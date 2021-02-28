import styled from 'styled-components';

import colors from '../../themes/colors';

export const Overlay = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(242, 243, 245, 0.8);
`;

export const Container = styled.div`
  position: relative;
  
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: rgba(0,0,0,0.05);

  text-align: center;
  background: ${colors.white};

  header {
    font-weight: 600;
    font-size: 8.75rem;
    color: ${colors.blue};  
    background-size: contain;
    background: url('/icons/levelup.svg') no-repeat center;
  }

  strong {
    font-size: 2.25rem;
    color: ${colors.title};
  }

  > p {
    margin-top: 0.25rem;

    font-size: 1.25rem;
    color: ${colors.text};
  }

  button {
    top: 0.5rem;
    right: 0.5rem;
    position: absolute;

    border: 0;

    font-size: 0;
    background: transparent;
  }
`;