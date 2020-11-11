import React from 'react';
import styled from 'styled-components';

import { PartyPreset } from 'src/redux/party/types';
import { Preset } from './Preset';
import { trans, Lang } from 'src/resources/languages';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'space-between',
  flexDirection: 'column',
  margin: '10px 0 0',
  padding: '0 10px',
  width: '250px',
  height: 'max-content',
  textAlign: 'left'
});

const Title = styled.div({
  fontSize: '20px'
});

interface Props {
  toggle: Function;
  parties: PartyPreset;
  getPartyName: Function;
}

export function PresetList(props: Props) {
  const sortedByLatestParty = Object.keys(props.parties).sort((name, nextName) => {
    if (props.parties[nextName].latestTime > props.parties[name].latestTime) {
      return 1;
    } else {
      return -1;
    }
  });
  return (
    <Container>
      <Title>
        {trans(Lang.Party_List)} <hr />
      </Title>
      {sortedByLatestParty.map((partyName) => {
        return (
          <Preset key={partyName} getPartyName={props.getPartyName} partyName={partyName} parties={props.parties} toggle={props.toggle} />
        );
      })}
    </Container>
  );
}
