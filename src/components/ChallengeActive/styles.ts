import styled from 'styled-components';

import colors from '../../themes/colors';

interface IButtonProps {
  backgroundColor?: string;
}

export const Container = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  header {
    width: 100%;

    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${colors.grayLine};

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 1.25rem;
    color: ${colors.blue};
  }

  main {
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    > strong {
      margin: 1.5rem 0 1rem;

      font-size: 2rem;
      font-weight: 600;
      color: ${colors.title};
    }

    > p {
      line-height: 1.5;
    }
  }

  footer {
    width: 100%;

    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ChallengeButton = styled.button<IButtonProps>`
  border: none;
  height: 3rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 600;
  color: ${colors.white};
  transition: filter 0.3s;
  background-color: ${({ backgroundColor }) => backgroundColor || colors.green};

  :hover {
    filter: brightness(0.9);
  }
`;