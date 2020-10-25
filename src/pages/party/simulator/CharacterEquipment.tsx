import React from 'react';
import styled from 'styled-components';

import { RoundImageButton } from 'src/components';

import { SelectedCharacterImage } from './SelectedCharacter';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
});

interface Props {
  characterSrc: string;
}

export function CharacterEquipment(props: Props) {
  return (
    <Container>
      <SelectedCharacterImage src={props.characterSrc} />
      {props.characterSrc !== '' && (
        <>
          <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
          <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
          <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
          <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
          <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
        </>
      )}
    </Container>
  );
}
