import { useState, useEffect, useCallback, useContext } from 'react';

import { ChallengesContext } from '../../hooks/ChallengesContext'

import * as S from './styles';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [leftMinute, rightMinute] = String(minutes).padStart(2, "0").split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, "0").split('');

  const resetCountdown = useCallback(() => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
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
    <div>
      <S.Container>
        <div>
          <span>{leftMinute}</span>
          <span>{rightMinute}</span>
        </div>

        <span>:</span>

        <div>
          <span>{leftSecond}</span>
          <span>{rightSecond}</span>
        </div>

      </S.Container>

      {hasFinished
        ?
        <S.CountdownButtom disabled>
          Ciclo finalizado
        </S.CountdownButtom>
        :
        <S.CountdownButtom
          type="button"
          isActive={isActive}
          onClick={isActive ? resetCountdown : startCountdown}
        >
          {isActive ? "Abandonar ciclo" : "Iniciar um ciclo"}
        </S.CountdownButtom>
      }


    </div>
  )
};