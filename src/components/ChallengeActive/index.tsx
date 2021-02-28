import { useContext } from 'react';

import colors from '../../themes/colors';
import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';

export function ChallengeActive() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);

  return (
    <S.Container>
      <header>Ganhe {activeChallenge.amount} xp</header>

      <main>
        <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />

        <strong>Novo desafio</strong>

        <p>{activeChallenge.description}</p>
      </main>

      <footer>
        <S.ChallengeButton
          type="button"
          onClick={resetChallenge}
          backgroundColor={colors.red}
        >
          Falhei
        </S.ChallengeButton>

        <S.ChallengeButton
          type="button"
          onClick={completedChallenge}
        >
          Completei
        </S.ChallengeButton>
      </footer>
    </S.Container>
  )
};