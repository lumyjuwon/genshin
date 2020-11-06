import React from 'react';
import styled from 'styled-components';

import { CharacterName } from 'src/resources/data';
import { ImageSrc } from 'src/resources/images';

import { CharacterSlot } from './CharacterSlot';

const Wrapper = styled.div({
  display: 'flex',
  width: '845px',
  height: 'fit-content',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '0 auto',
  marginBottom: '5vh',
  '@media screen and (max-width: 1380px)': {
    width: '655px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    padding: '0'
  }
});

interface Props {
  characters: Array<[CharacterName, ImageSrc]>;
  // onClick: Function;
  selectedCharacter: Map<CharacterName, ImageSrc>;
  fillEmptyCharacters: Function;
  changeActiveElements: Function;
  emptyCharacters: Map<CharacterName, ImageSrc>;
}

type ArtifactCount = number;

const MAX_SELECTED_CHARACTER = 4;

export function CharacterSimulator(props: Props) {
  function selectCharacter(name: CharacterName, resource: ImageSrc) {
    if (props.selectedCharacter.has(name)) {
      props.selectedCharacter.delete(name);
    } else {
      if (props.selectedCharacter.size < MAX_SELECTED_CHARACTER) {
        props.selectedCharacter.set(name, resource);
      }
    }

    props.fillEmptyCharacters(props.selectedCharacter.size);
    props.changeActiveElements(props.selectedCharacter);
  }

  return (
    <Wrapper>
      {props.characters.map((dic: [CharacterName, ImageSrc], index: number) => {
        return <CharacterSlot key={dic[0]} selectedCharacter={props.selectedCharacter} onClick={selectCharacter} dic={dic} />;
      })}
    </Wrapper>
  );
}
