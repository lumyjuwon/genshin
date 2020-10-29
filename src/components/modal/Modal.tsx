import React, { useState } from 'react';
import styled from 'styled-components';

import { CloseBlackButton } from 'src/resources/svg';

import { CircleButton } from '../button/CircleButton';

const Overlay = styled.div({
  position: 'fixed',
  zIndex: 20,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.25)'
});

const Wrapper = styled.div({
  display: 'flex',
  position: 'fixed',
  zIndex: 30,
  tabIndex: -1,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    overflow: 'scroll'
  }
});

const WrapperInner = styled.div({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.25)',
  padding: '16px',
  width: 'fit-content',
  height: 'fit-content',
  backgroundColor: '#2B2B2B',
  borderRadius: '12px',
  '@media screen and (max-width: 768px)': {
    width: '95%',
    padding: '0'
  }
});

const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '8px'
});

interface Props {
  cancel: Function;
  visible: boolean;
  children?: JSX.Element;
  onCancel?: Function;
}

export function Modal(props: Props) {
  if (props.visible) {
    return (
      <>
        <Overlay />
        <Wrapper>
          <WrapperInner>
            <Header>
              <CircleButton onClick={props.cancel}>
                <CloseBlackButton></CloseBlackButton>
              </CircleButton>
            </Header>
            {props.children}
          </WrapperInner>
        </Wrapper>
      </>
    );
  } else {
    return null;
  }
}
