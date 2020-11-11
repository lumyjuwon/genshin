import React from 'react';
import styled from 'styled-components';

import { RoundTextButton } from '../button/RoundTextButton';
import { ModalWrapper } from '../wrapper/ModalWrapper';

const Container = styled.div({
  width: '480px',
  '@media screen and (max-width: 768px)': {
    width: '250px'
  }
});

const Title = styled.div({
  fontSize: '18px'
});

const Content = styled.div({
  fontSize: '14px'
});

const ContentContainer = styled.div({
  display: 'flex',
  marginTop: '24px'
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '12px',
  bottom: '10px'
});

interface Props {
  isVisible: boolean;
  title: string;
  content?: string;
  confirm: Function;
  cancel: Function;
}

export function Dialog(props: Props) {
  return (
    <ModalWrapper visible={props.isVisible} dialogMoblieAlignCenter={true}>
      <Container>
        <Title>{props.title}</Title>
        <ContentContainer>
          <Content>{props.content}</Content>
        </ContentContainer>
        <ButtonContainer>
          <RoundTextButton onClick={() => props.confirm()} styles={{ buttonStyles: { backgroundColor: '#0088ff', width: '50px' } }}>
            Yes
          </RoundTextButton>
          <RoundTextButton onClick={() => props.cancel()} styles={{ buttonStyles: { backgroundColor: '#cc0000', width: '50px' } }}>
            No
          </RoundTextButton>
        </ButtonContainer>
      </Container>
    </ModalWrapper>
  );
}
