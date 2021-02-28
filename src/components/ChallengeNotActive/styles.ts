import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`
  padding: 2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > strong {
    margin-bottom: 2.5rem;

    font-weight: 400;
    font-size: 1.5rem;
    text-align: center;
    color: ${colors.text};
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 1rem;

    img {
      width: 32px;
      margin-right: 1.5rem; 
    }
  }
`;