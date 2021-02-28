import colors from '../../themes/colors';
import * as S from './styles';

export function ChallengeActive() {
  return (
    <S.Container>
      <header>Ganhe 400 xp</header>

      <main>
        <img src="icons/body.svg" alt="Body" />

        <strong>Novo desafio</strong>

        <p>Levante e faça uma caminhada de 3 minutos.</p>
      </main>

      <footer>
        <S.ChallengeButton type="button" backgroundColor={colors.red}>
          Falhei
        </S.ChallengeButton>

        <S.ChallengeButton type="button">
          Completei
        </S.ChallengeButton>
      </footer>
    </S.Container>
  )
};