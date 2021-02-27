import * as S from './styles';

export function Profile() {
  return (
    <S.Container>
      <img src="https://github.com/fernando-meira.png" alt="Foto de perfil" />

      <div>
        <strong>Fernando Meira</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>

    </S.Container>
  );
}