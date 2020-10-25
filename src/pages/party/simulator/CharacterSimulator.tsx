import React from 'react';
import { RoundImageButton } from 'src/components';
import styled from 'styled-components';
import { SelectedCharacterImage } from './SelectedCharacter';

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: '25vw',
  paddingRight: '25vw',
  marginBottom: '5vh'
});

const ContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
});

interface Props {
  allCharacters: Array<[string, string]>;
}

export function CharacterSimulator(props: Props) {
  return (
    <Container>
      {props.allCharacters.map((dic: [string, string]) => {
        return (
          <ContentContainer>
            <SelectedCharacterImage src={dic[1]} />
            <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
            <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
            <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
            <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
            <RoundImageButton src={''} onClick={() => {}}></RoundImageButton>
          </ContentContainer>
        );
      })}
    </Container>
  );
}
