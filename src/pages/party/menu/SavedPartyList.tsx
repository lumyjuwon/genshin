import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { PartyPreset } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';
import { SavedParty } from './SavedParty';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-between',
  flexDirection: 'column',
  margin: '10px 0 0',
  padding: '0 10px',
  width: '100%',
  textAlign: 'left'
});

export function SavedPartyList() {
  const parties: PartyPreset = useSelector<RootState, any>((state) => state.party.partyPreset);

  return (
    <Container>
      {Object.keys(parties).map((partyName) => {
        return <SavedParty partyName={partyName} />;
      })}
    </Container>
  );
}