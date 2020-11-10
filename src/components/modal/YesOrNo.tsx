import React, { useEffect } from 'react';
import styled from 'styled-components';

import { RoundTextButton } from '../button/RoundTextButton';

const Wrapper = styled.div({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  zIndex: 1000,
  top: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
});

const WrapperInner = styled.div({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.25)',
  padding: '16px',
  width: 'fit-content',
  height: '150px',
  margin: '0 auto',
  backgroundColor: '#2B2B2B',
  borderRadius: '12px'
});

const Question = styled.div({
  fontSize: '18px'
});

const Buttons = styled.div({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  alignItems: 'center'
});

interface Props {
  isVisible: boolean;
  question: string;
  yesButtonClick: Function;
  noButtonClick: Function;
}

export function YesOrNo(props: Props) {
  useEffect(() => {
    if (props.isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [props.isVisible]);

  if (props.isVisible) {
    return (
      <Wrapper>
        <WrapperInner>
          <Question>{props.question}</Question>
          <Buttons>
            <RoundTextButton
              onClick={() => props.yesButtonClick()}
              styles={{ buttonStyles: { backgroundColor: '#0088ff', width: '50px' } }}
            >
              Yes
            </RoundTextButton>
            <RoundTextButton onClick={() => props.noButtonClick()} styles={{ buttonStyles: { backgroundColor: '#cc0000', width: '50px' } }}>
              No
            </RoundTextButton>
          </Buttons>
        </WrapperInner>
      </Wrapper>
    );
  } else {
    return null;
  }
}
