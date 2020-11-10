import React from 'react';
import styled from 'styled-components';

import { ContentWrapper } from 'src/components';

import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';
import { SavedPartyList } from './menu/SavedPartyList';

const PositionAbsolute = styled.div({
  position: 'absolute',
  top: '80px',
  right: '250px'
});

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  return (
    <ContentWrapper>
      <>
        {/* <PositionAbsolute>
          <SavedPartyList />
        </PositionAbsolute> */}
        <CharacterSimulator />
        <ElementResult />
      </>
    </ContentWrapper>
  );
}
