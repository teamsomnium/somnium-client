import React from 'react';
import * as I from '~/assets';
import { css } from '@emotion/react';
import HeaderSide from '~/components/Header/HeaderSide';

interface Props {
  title?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
}

export default function Header({
  title = <I.Logo />,
  headerLeft,
  headerRight,
}: Props) {
  return (
    <header css={Block}>
      {headerLeft && <HeaderSide position="left">{headerLeft}</HeaderSide>}
      <div css={Title}>{title}</div>
      {headerRight && <HeaderSide position="right">{headerRight}</HeaderSide>}
    </header>
  );
}

const Block = css`
  position: relative;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.8rem;
`;

const Title = css`
  color: #333333;
  font-size: 1.8rem;
  font-weight: 600;
`;
