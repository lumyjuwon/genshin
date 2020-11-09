import React from 'react';
import styled from 'styled-components';

import { ContentWrapper } from 'src/components';

import { Menu } from './menu/Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

const PositionAbsolute = styled.div({
  position: 'absolute',
  top: '50px',
  right: '0'
});

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  return (
    <ContentWrapper>
      <>
        <PositionAbsolute>
          <Menu />
        </PositionAbsolute>
        <CharacterSimulator />
        <ElementResult />
      </>
    </ContentWrapper>
  );
}
