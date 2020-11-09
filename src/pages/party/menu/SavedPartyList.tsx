import React from 'react';
import styled from 'styled-components';

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
  return (
    <Container>
      <div>TEST</div>
    </Container>
  );
}
