import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`
  display: flex;
  align-items: center;


  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    > strong {
      font-weight: 600;
      font-size: 1.5rem;
      color: ${colors.title};
    }

    > p {
      margin-top: 0.5rem;

      display: flex;
      align-items: center;

      font-size: 1rem;

      > img {
        margin-right: 0.5rem;
      }
    }
  }
`;