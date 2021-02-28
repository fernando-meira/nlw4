import { useContext } from 'react';

import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <S.Container>
      <span>Desafios completos</span>

      <span>{challengesCompleted}</span>
    </S.Container>
  );
}