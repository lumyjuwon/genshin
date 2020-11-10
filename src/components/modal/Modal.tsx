import React from 'react';
import styled from 'styled-components';

import { CloseBlackButton } from 'src/resources/svg';

import { CircleButton } from '../button/CircleButton';
import { ModalWrapper } from '../wrapper/ModalWrapper';

const Header = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px 0'
});

interface Props {
  visible: boolean;
  cancel: Function;
  children: JSX.Element;
}

export function Modal(props: Props) {
  return (
    <ModalWrapper visible={props.visible}>
      <Header>
        <CircleButton
          onClick={() => {
            props.cancel();
          }}
        >
          <CloseBlackButton />
        </CircleButton>
      </Header>
      {props.children}
    </ModalWrapper>
  );
}
