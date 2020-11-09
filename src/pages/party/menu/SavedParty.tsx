import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
});

interface Props {
  partyName: string;
}

export function SavedParty(props: Props) {
  return <div>{props.partyName}</div>;
}
