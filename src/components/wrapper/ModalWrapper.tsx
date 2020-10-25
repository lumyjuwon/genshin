import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div({
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)'
});

const Wrapper = styled.div({
  display: 'flex',
  position: 'fixed',
  zIndex: 1000,
  tabIndex: -1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
});

const WrapperInner = styled.div({
  display: 'flex',
  position: 'relative',
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.25)',
  padding: '16px',
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: '#2B2B2B',
  borderRadius: '12px'
});

interface Props {
  visible: boolean;
  children?: JSX.Element;
  onCancel?: Function;
}

export function ModalWrapper(props: Props) {
  if (props.visible) {
    return (
      <>
        <Overlay />
        <Wrapper>
          <WrapperInner>{props.children}</WrapperInner>
        </Wrapper>
      </>
    );
  } else {
    return null;
  }
}
