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
  padding: '16px',
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '12px',
  margin: '0 auto'
});

interface Props {
  children?: JSX.Element;
  onCancel?: Function;
}

export function ModalWrapper(props: Props) {
  const [visible, setVisible] = useState<boolean>(true);

  console.log(props.children);

  if (visible) {
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
