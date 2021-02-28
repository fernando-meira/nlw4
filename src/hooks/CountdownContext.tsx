import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  useCallback,
  createContext
} from 'react';

import { ChallengesContext } from './ChallengesContext';

interface ICountdownContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
  resetCountdown: () => void;
  startCountdown: () => void;
}

interface ICountdownProviderProps {
  children: ReactNode;
}

export const CountdownContext = createContext({} as ICountdownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: ICountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
    setHasFinished(false);
  }, [])

  const startCountdown = useCallback(() => {
    setIsActive(true);
  }, [])

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <CountdownContext.Provider
      value={
        {
          minutes,
          seconds,
          isActive,
          hasFinished,
          resetCountdown,
          startCountdown
        }
      }
    >
      {children}
    </CountdownContext.Provider>
  )
}