import React from 'react';
import styled from 'styled-components';
import { CharacterEquipment } from './CharacterEquipment';

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: '25vw',
  paddingRight: '25vw',
  marginBottom: '5vh'
});

interface Props {
  allCharacters: Array<[string, string]>;
}

export function CharacterSimulator(props: Props) {
  return (
    <Container>
      {props.allCharacters.map((dic: [string, string]) => {
        return <CharacterEquipment characterSrc={dic[1]}></CharacterEquipment>;
      })}
    </Container>
  );
}
