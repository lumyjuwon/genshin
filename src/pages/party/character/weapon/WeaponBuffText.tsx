import React from 'react';
import styled from 'styled-components';

import { WeaponName, CharacterName, weaponInfo, characterInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';
import { FlexWrapper, SquareImage } from 'src/components';
import { CategoryImages } from 'src/resources/images';

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
    width: '280px'
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

const Level = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '12px'
});

const TextDesc = styled.div<{ marginTop?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => props.marginTop && '5px'};
`;

const WeaponStat = styled.span({
  color: '#ff0000'
});

interface Props {
  activeWeapon?: WeaponName;
  selectedCharacter: CharacterName;
}

export function WeaponBuffText(props: Props) {
  return (
    <Container>
      <Title>{trans(Lang.Character_Stat)}</Title>
      <FlexWrapper styles={{ width: '100%', justifyContent: 'space-between' }}>
        <>
          {props.selectedCharacter && (
            <Level>
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages.Character} />:{' '}
              {characterInfo[props.selectedCharacter].stats.Level}
            </Level>
          )}
          {props.activeWeapon && (
            <Level>
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages[characterInfo[props.selectedCharacter].weapon]} />
              : {weaponInfo[props.activeWeapon].stats.Level}
            </Level>
          )}
        </>
      </FlexWrapper>
      <FlexWrapper styles={{ width: '100%', flexDirection: 'column', margin: '5px 0 0' }}>
        <>
          <TextDesc>HP: {characterInfo[props.selectedCharacter].stats.HP}</TextDesc>
          <TextDesc>
            ATK: {characterInfo[props.selectedCharacter].stats.ATK}
            {props.activeWeapon && <WeaponStat>(+{weaponInfo[props.activeWeapon].stats.ATK})</WeaponStat>}
          </TextDesc>
          <TextDesc>DEF: {characterInfo[props.selectedCharacter].stats.DEF}</TextDesc>
          <TextDesc marginTop>
            <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages.Character} />
            Extra:&nbsp;
            <RegexColorText regex={/\d.+%/g} color={'red'}>
              {characterInfo[props.selectedCharacter].stats.Additional}
            </RegexColorText>
          </TextDesc>
          {props.activeWeapon && (
            <TextDesc>
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages[characterInfo[props.selectedCharacter].weapon]} />
              Extra:&nbsp;
              <RegexColorText regex={/\d.+%/g} color={'red'}>
                {weaponInfo[props.activeWeapon].stats.Additional}
              </RegexColorText>
            </TextDesc>
          )}
        </>
      </FlexWrapper>
    </Container>
  );
}
