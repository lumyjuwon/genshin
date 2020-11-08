import React from 'react';
import styled from 'styled-components';

import { WeaponName, CharacterName, weaponInfo, characterInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';

const Container = styled.div({
  display: 'flex',
  flex: '1 1',
  width: '100%',
  textAlign: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '50px',
  '@media screen and (max-width: 1380px)': {
    // width: '700px',
    margin: '0 auto 50px'
  },
  '@media screen and (max-width: 768px)': {
    // width: '280px'
  }
});

const Title = styled.p({
  fontSize: '20px',
  marginBottom: '16px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '0'
  }
});

const TextDesc = styled.div({
  textAlign: 'left'
});

function getWeaponStat(weapon: WeaponName) {}

interface Props {
  activeWeapon: WeaponName;
  selectedCharacter: CharacterName;
}

export function WeaponBuffText(props: Props) {
  return (
    <Container>
      <Title>{trans(Lang.Character_Stat)}</Title>
      {props.selectedCharacter && <TextDesc>Character: {characterInfo[props.selectedCharacter].stats.Level}&nbsp;</TextDesc>}
      {props.activeWeapon && <TextDesc>Weapon: {weaponInfo[props.activeWeapon].stats.Level}&nbsp;</TextDesc>}
    </Container>
  );
}
