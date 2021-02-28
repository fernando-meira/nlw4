import { useContext } from 'react';

import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';


export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Container>
        <header>{level}</header>

        <strong>Parabéns</strong>

        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Container>
    </S.Overlay>
  )
};