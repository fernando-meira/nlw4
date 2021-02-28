import styled from 'styled-components';

import colors from '../../themes/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.06);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.white};
`;