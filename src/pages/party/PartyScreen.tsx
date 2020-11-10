import React from 'react';

import { ContentWrapper } from 'src/components';

import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  return (
    <ContentWrapper>
      <>
        <CharacterSimulator />
        <ElementResult />
      </>
    </ContentWrapper>
  );
}
