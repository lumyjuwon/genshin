import React from 'react';
import styled from 'styled-components';

import { PartyPreset } from 'src/redux/party/types';
import { SavedParty } from './SavedParty';
import { trans, Lang } from 'src/resources/languages';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-between',
  flexDirection: 'column',
  margin: '10px 0 0',
  padding: '0 10px',
  width: '250px',
  textAlign: 'left'
});

const Title = styled.div({
  fontSize: '20px'
});

interface Props {
  toggle: Function;
  parties: PartyPreset;
}

export function SavedPartyList(props: Props) {
  return (
    <Container>
      <Title>
        {trans(Lang.Party_List)} <hr />
      </Title>
      {Object.keys(props.parties).map((partyName) => {
        return <SavedParty partyName={partyName} parties={props.parties} toggle={props.toggle} />;
      })}
    </Container>
  );
}
