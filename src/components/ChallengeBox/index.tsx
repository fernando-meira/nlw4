import { useContext } from 'react';

import { ChallengeActive, ChallengeNotActive } from '../';
import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <S.Container>
      {activeChallenge ? <ChallengeActive /> : <ChallengeNotActive />}
    </S.Container>
  );
};