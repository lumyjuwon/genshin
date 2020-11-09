import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';

import { Menu } from './Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

import { useSelector } from 'react-redux';
import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  return (
    <ContentWrapper>
      <>
        <Menu />
        <CharacterSimulator />
        <ElementResult />
      </>
    </ContentWrapper>
  );
}
