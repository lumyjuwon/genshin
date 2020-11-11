import React from 'react';
import styled from 'styled-components';

import { CharacterName } from 'src/resources/data';
import { CharacterImages } from 'src/resources/images';
import { Menu } from '../Menu';
import { ElementResult } from '../element/ElementResult';

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
  alignItems: 'center',
  margin: '0 auto',
  marginBottom: '5vh',
  position: 'relative',
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
  const maxCharacterSlot = 4;

  return (
    <Wrapper>
      <Menu />
      <div id={'party-content'}>
        {Array.from({ length: maxCharacterSlot }, () => '').map((name: string, index: number) => {
          const characterName = charactersArray[index] !== undefined ? charactersArray[index] : '';
          return <CharacterSlot key={index} name={characterName} src={CharacterImages[characterName]} />;
        })}
        <ElementResult />
      </div>
    </Wrapper>
  );
}
