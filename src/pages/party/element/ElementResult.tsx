import React from 'react';

import { ElementBuffText } from './ElementBuffText';
import { ElementCircleList } from './ElementCircleList';

import { useSelector } from 'react-redux';
import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';
import { characterInfo } from 'src/resources/data';
import styled from 'styled-components';

const Container = styled.div({
  marginTop: '32px',
  '@media screen and (max-width: 1380px)': {
    marginTop: '16px'
  },
  '@media screen and (max-width: 768px)': {
    marginTop: '8px'
  }
});

export function ElementResult() {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

  function getActiveElements(data: PartyData) {
    let activeElemts: Map<string, number> = new Map();

    Object.keys(data).forEach((character) => {
      let element: string = characterInfo[character].element;
      if (activeElemts.has(element)) {
        // @ts-ignore Check Has
        activeElemts.set(element, activeElemts.get(element) + 1);
      } else {
        activeElemts.set(element, 1);
      }
    });

    return activeElemts;
  }

  return (
    <Container>
      <ElementCircleList activeElements={getActiveElements(characters)} />
      <ElementBuffText activeElements={getActiveElements(characters)} />
    </Container>
  );
}
