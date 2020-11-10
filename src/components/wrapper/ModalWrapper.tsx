import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div({
  width: '100%',
  height: '100%',
  position: 'fixed',
  overflowX: 'hidden',
  zIndex: 1000,
  top: 0,
  right: 0,
  display: 'flex',
  tabIndex: -1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  '@media screen and (max-width: 500px)': {
    alignItems: 'flex-start',
    overflowY: 'scroll'
  }
});

const WrapperInner = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.25)',
  padding: '16px',
  width: 'fit-content',
  height: 'fit-content',
  margin: '0 auto',
  backgroundColor: '#2B2B2B',
  borderRadius: '12px',
  '@media screen and (max-width: 1380px)': {
    width: '80%',
    justifyContent: 'center'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    padding: '0'
  }
});

interface Props {
  visible: boolean;
  children: JSX.Element | JSX.Element[];
}

export function ModalWrapper(props: Props) {
  if (props.visible) {
    return (
      <Wrapper>
        <WrapperInner>{props.children}</WrapperInner>
      </Wrapper>
    );
  } else {
    return null;
  }
}

ModalWrapper.defaultProps = {
  visible: false
};
