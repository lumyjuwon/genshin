import React from 'react';
import styled from 'styled-components';

import { characterInfo } from 'src/resources/data';

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  margin: '20px 0 10px',
  padding: '5px 0',
  borderRadius: '16px',
  flexWrap: 'wrap',
  backgroundColor: '#212223'
});

const Button = styled.a({
  display: 'block',
  padding: '10px',
  margin: '5px 10px',
  fontSize: '18px',
  fontWeight: 'bold',
  borderRadius: '12px',
  transition: '.3s',
  '&:hover': {
    backgroundColor: '#f1f2f3',
    color: '#333435'
  }
});

interface Props {
  character: string;
}

export function CharacterDetailNavigation(props: Props) {
  return (
    <Container>
      <Button href="#stats">Stat</Button>
      <Button href="#ascension-materials">Ascension</Button>
      <Button href="#talent-materials">Talent</Button>
      {characterInfo[props.character].recommendedParty ? <Button href="#recommended-party">Party</Button> : null}
      <Button href="#recommended-equip">Equipments</Button>
    </Container>
  );
}
