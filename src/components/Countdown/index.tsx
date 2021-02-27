import { useState, useEffect, useCallback } from 'react';

import * as S from './styles';

export function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [leftMinute, rightMinute] = String(minutes).padStart(2, "0").split('');
  const [leftSecond, rightSecond] = String(seconds).padStart(2, "0").split('');

  const startCountdown = useCallback(() => {
    setActive(true);
  }, [])

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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

      <S.CountdownButtom onClick={startCountdown} type="button">
        Iniciar um ciclo
      </S.CountdownButtom>
    </div>
  )
};