import { useContext } from 'react';

import colors from '../../themes/colors';
import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';
import { CountdownContext } from '../../hooks/CountdownContext';

export function ChallengeActive() {
  const { activeChallenge, resetChallenge, completedChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completedChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  };

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
          backgroundColor={colors.red}
          onClick={handleChallengeFailed}
        >
          Falhei
        </S.ChallengeButton>

        <S.ChallengeButton
          type="button"
          onClick={handleChallengeSucceeded}
        >
          Completei
        </S.ChallengeButton>
      </footer>
    </S.Container>
  )
};