import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
export enum Size {
  big = 'BIG',
  small = 'SMALL',
  litle = 'LITLE',
}
interface PropsSize {
  size?: Size;
  style?: ReactNode;
}

const height = {
  [Size.big]: '315px',
  [Size.litle]: '230px',
  [Size.small]: '105px',
};
const width = {
  [Size.big]: '575px',
  [Size.litle]: '277px',
  [Size.small]: '278px',
};

const Card: React.FC<PropsSize> = ({
  children,
  size = Size.small,
  style = {},
}) => {
  const Container = styled.div`
    margin: 10px;
    background: #ffffff;
    height: ${height[size]};
    width: ${width[size]};
  `;

  return <Container style={{ ...style }}>{children}</Container>;
};

export default Card;
