import { createContext, ReactNode, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';

import { LevelUpModal } from '../components';

interface IChallengeType {
  amount: number;
  description: string;
  type: "body" | "eye";
}

interface IChallengesContextData {
  level: number;
  levelUp: () => void;
  currentExperience: number;
  resetChallenge: () => void;
  challengesCompleted: number;
  startNewChallenge: () => void;
  closeLevelUpModal: () => void;
  experienceToNextLevel: number;
  completedChallenge: () => void;
  activeChallenge: IChallengeType;
}

interface IChallengesProviderProps {
  level: number;
  children: ReactNode;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider({ children, ...rest }: IChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio", {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  };

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completedChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience > experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        resetChallenge,
        activeChallenge,
        closeLevelUpModal,
        currentExperience,
        startNewChallenge,
        completedChallenge,
        challengesCompleted,
        experienceToNextLevel,
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
  );
}