import { useContext, useMemo } from 'react';

import { ChallengesContext } from '../../hooks/ChallengesContext';

import * as S from './styles';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = useMemo(() => Math.floor((currentExperience * 100) / experienceToNextLevel), [currentExperience, experienceToNextLevel])

  return (
    <S.HeaderExperienceBar>
      <span>0 xp</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        {percentToNextLevel !== 0 && <span style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>}
      </div>

      <span>{experienceToNextLevel} xp</span>
    </S.HeaderExperienceBar>
  )
}