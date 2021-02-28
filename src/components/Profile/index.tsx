import { useContext } from 'react';

import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <S.Container>
      <img src="https://github.com/fernando-meira.png" alt="Foto de perfil" />

      <div>
        <strong>Fernando Meira</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>

    </S.Container>
  );
}