import React from 'react';
import styled from 'styled-components';

import { Menu } from '../Menu';
import { CharacterSlotIterator } from './CharacterSlotIterator';
import { ElementResult } from '../element/ElementResult';

import { useSelector } from 'react-redux';
import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';
import { ContentBackgroundBox } from 'src/components';

export const maxCharacterLength = 4;

const Wrapper = styled.div({
  display: 'flex',
  height: 'fit-content',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '20px auto 0',
  marginBottom: '5vh',
  position: 'relative',
  '@media screen and (max-width: 1380px)': {
    // width: '655px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    padding: '0'
  }
});

interface Props {}

export function CharacterSimulator(props: Props) {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

  return (
    <Wrapper>
      <ContentBackgroundBox backgroundColor="#2a2b2c">
        <Menu />
        <div id={'party-content'}>
          <CharacterSlotIterator characters={characters} />
          <ElementResult />
        </div>
      </ContentBackgroundBox>
    </Wrapper>
  );
}
