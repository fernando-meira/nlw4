import styled from 'styled-components';

import colors from '../../themes/colors';

export const HeaderExperienceBar = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    position: relative;
    
    margin: 0 1.5rem;
    border-radius: 4px;
    
    flex: 1;
    height: 4px;
    
    background: ${colors.grayLine};

    > div {
      height: 4px;
      border-radius: 4px;

      background: ${colors.green};
    }

    > span {
      top: 12px;
      position: absolute;

      transform: translateX(-50%);
    }
  }
`;