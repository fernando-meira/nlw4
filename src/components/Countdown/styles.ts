import styled from 'styled-components';

import colors from '../../themes/colors';

interface IButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-family: Rajdhani;
  color: ${colors.title};

  > div {
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0 ,0 ,0 0.05);
    
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-size: 8.5rem;
    text-align: center;
    background: ${colors.white};

    span {
      flex: 1; 
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }

    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    margin: 0 0.5rem;

    font-size: 6.25rem;
  }
`;

export const CountdownButtom = styled.button<IButtonProps>`
  border: 0;
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-size: 1.25rem;
  transition: background-color .3s;
  color: ${({ isActive }) => isActive ? colors.title : colors.white};
  background-color: ${({ isActive }) => isActive ? colors.white : colors.blue};

  :hover {
    color: ${colors.white};
    background-color: ${({ isActive }) => isActive ? colors.red : colors.blueDark};
  }

  :disabled {
    cursor: not-allowed;
    color: ${colors.title};
    background-color: ${colors.white};
    border-bottom: 4px solid ${colors.green};
  }
`;