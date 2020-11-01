import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

const HeaderOuter = styled.header({
  borderBottom: '1px solid #515253',
  backgroundColor: 'rgba(0, 0, 0, .7)',
  position: 'relative',
  zIndex: 999
});

const HeaderInner = styled.div({
  maxWidth: '80vw',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  minHeight: '10vh',
  '@media screen and (max-width: 768px)': {
    justifyContent: 'space-between'
  }
});

export function Header(props: Props) {
  return (
    <HeaderOuter>
      <HeaderInner>{props.children}</HeaderInner>
    </HeaderOuter>
  );
}
