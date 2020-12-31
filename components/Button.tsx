import React from 'react';

import styled from '@emotion/styled';

const Button = ({ children }) => {
  const Container = styled.div`
    display: flex;
  `;

  const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    height: 40px;
    width: 59px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.5);
    margin-left: 10px;
  `;

  return (
    <Container>
      <Button>{children}</Button>
    </Container>
  );
};

export default Button;
