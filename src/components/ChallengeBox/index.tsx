import * as S from './styles';
import { ChallengeActive, ChallengeNotActive } from '../';

export function ChallengeBox() {
  const isActive = true;

  return (
    <S.Container>
      {isActive ? <ChallengeActive /> : <ChallengeNotActive />}
    </S.Container>
  );
};