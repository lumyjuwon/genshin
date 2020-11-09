import React from 'react';
import styled from 'styled-components';

import { CharacterName } from 'src/resources/data';
import { CharacterImages } from 'src/resources/images';

import { CharacterSlot } from './CharacterSlot';
import { useSelector } from 'react-redux';
import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';

export const maxCharacterLength = 4;

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

interface Props {}

export function CharacterSimulator(props: Props) {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);
  const charactersArray = Object.keys(characters);
  const emptyCharacterSize = maxCharacterLength - charactersArray.length;

  return (
    <Wrapper id={'party-content'}>
      {charactersArray.map((characterName: CharacterName) => {
        return <CharacterSlot key={characterName} name={characterName} src={CharacterImages[characterName]} />;
      })}
      {Array.from({ length: emptyCharacterSize }, () => '').map((characterName: CharacterName, index: number) => {
        return <CharacterSlot key={index} name={characterName} src={CharacterImages[characterName]} />;
      })}
    </Wrapper>
  );
}
