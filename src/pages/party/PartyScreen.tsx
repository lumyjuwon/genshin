import React, { useState } from 'react';
import styled from 'styled-components';

import { ContentWrapper } from 'src/components';

import { Menu } from './menu/Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

import { useSelector } from 'react-redux';
import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';

const FloatRight = styled.div({
  float: 'right'
});

const Clear = styled.div({
  clear: 'both'
});

type ElementName = string;
type ElementCount = number;

export function PartyScreen() {
  return (
    <ContentWrapper>
      <>
        <FloatRight>
          <Menu />
        </FloatRight>
        <Clear>
          <CharacterSimulator />
          <ElementResult />
        </Clear>
      </>
    </ContentWrapper>
  );
}
