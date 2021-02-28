import { createContext, ReactNode, useState, useEffect } from 'react';

import challenges from '../../challenges.json';

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
  experienceToNextLevel: number;
  completedChallenge: () => void;
  activeChallenge: IChallengeType;
}

interface IChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider({ children }: IChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
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

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        resetChallenge,
        activeChallenge,
        currentExperience,
        startNewChallenge,
        completedChallenge,
        challengesCompleted,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}