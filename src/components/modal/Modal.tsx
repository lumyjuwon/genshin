import React, { useState } from 'react';
import styled from 'styled-components';

import { CloseBlackButton } from 'src/resources/svg';

import { CircleButton } from '../button/CircleButton';

const Wrapper = styled.div({
  position: 'fixed',
  zIndex: 20,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0, 
  display: 'flex',
  tabIndex: -1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  overflow: 'scroll'
});

const WrapperInner = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.25)',
  padding: '16px',
  width: 'fit-content',
  height: 'fit-content',
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

const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px 0'
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
      <div style={{position: 'relative'}}>
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
      </div>
    );
  } else {
    return null;
  }
}
