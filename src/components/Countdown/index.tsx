import { useContext } from 'react';
import { CountdownContext } from '../../hooks/CountdownContext';

import * as S from './styles';

export function Countdown() {
  const {
    seconds,
    minutes,
    isActive,
    hasFinished,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [leftMinute, rightMinute] = String(minutes).padStart(2, "0").split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, "0").split('');

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