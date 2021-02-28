import * as S from './styles';

export function ChallengeNotActive() {
  return (
    <S.Container>
      <strong>Inicie um ciclo <br />
      para receber desafios a
      serem completados</strong>

      <p>
        <img src="icons/level-up.svg" alt="Level-Up" />

        Complete-os e ganhe
        experiência e avance de leve.
      </p>
    </S.Container>
  )
}