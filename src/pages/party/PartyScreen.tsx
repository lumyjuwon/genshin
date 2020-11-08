import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';

import { Menu } from './Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());

  return (
    <ContentWrapper>
      <>
        <Menu />
        <CharacterSimulator />
        <ElementResult activeElements={activeElements} />
      </>
    </ContentWrapper>
  );
}
