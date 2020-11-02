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
    justifyContent: 'space-between',
    margin: '0',
    minWidth: '100%',
    padding: '0 10px'
  }
});

export function Header(props: Props) {
  return (
    <HeaderOuter>
      <HeaderInner>{props.children}</HeaderInner>
    </HeaderOuter>
  );
}
