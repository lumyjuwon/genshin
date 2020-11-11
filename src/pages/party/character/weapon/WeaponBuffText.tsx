import React from 'react';
import styled from 'styled-components';

import { WeaponName, CharacterName, weaponInfo, characterInfo } from 'src/resources/data';
import { trans, Lang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';
import { FlexWrapper, SquareImage, CharacterStatRegexText } from 'src/components';
import { CategoryImages } from 'src/resources/images';

const Container = styled.div({
  display: 'flex',
  flex: '2 1',
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
    width: '220px'
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
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.marginTop && '5px'};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const WeaponStat = styled.span({
  color: '#ffff00'
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
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages.Character} />
              &nbsp;:
              {characterInfo[props.selectedCharacter].stats.Level}
            </Level>
          )}
          {props.activeWeapon && (
            <Level>
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages[characterInfo[props.selectedCharacter].weapon]} />
              &nbsp;: {weaponInfo[props.activeWeapon].stats.Level}
            </Level>
          )}
        </>
      </FlexWrapper>
      <FlexWrapper styles={{ width: '100%', flexDirection: 'column', margin: '5px 0 0' }}>
        <>
          <FlexWrapper
            styles={{ justifyContent: 'space-between', width: '100%', small: { flexDirection: 'column', justifyContent: 'center' } }}
          >
            <>
              <FlexWrapper styles={{ small: { width: '100%', justifyContent: 'space-between' } }}>
                <>
                  <TextDesc>
                    {trans(Lang.Character_HP)}: {characterInfo[props.selectedCharacter].stats.HP}
                  </TextDesc>
                  <TextDesc>
                    {trans(Lang.Character_DEF)}: {characterInfo[props.selectedCharacter].stats.DEF}
                  </TextDesc>
                </>
              </FlexWrapper>
              <FlexWrapper>
                <TextDesc>
                  {trans(Lang.Character_ATK)}: {characterInfo[props.selectedCharacter].stats.ATK}
                  {props.activeWeapon && <WeaponStat>(+{weaponInfo[props.activeWeapon].stats.ATK})</WeaponStat>}
                </TextDesc>
              </FlexWrapper>
            </>
          </FlexWrapper>
          {/* 기본공격력 + 무기 공격력 + (파티버프 + 무기버프 + 캐릭터버프 %합산) */}
          <TextDesc marginTop>
            <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages.Character} />
            &nbsp;
            {trans(Lang.Character_Additional)}:&nbsp;
            <CharacterStatRegexText>{characterInfo[props.selectedCharacter].stats.Additional}</CharacterStatRegexText>
          </TextDesc>
          {props.activeWeapon && (
            <TextDesc>
              <SquareImage styles={{ width: '20px', height: '20px' }} src={CategoryImages[characterInfo[props.selectedCharacter].weapon]} />
              &nbsp;
              {trans(Lang.Character_Additional)}:&nbsp;
              <CharacterStatRegexText>{weaponInfo[props.activeWeapon].stats.Additional}</CharacterStatRegexText>
            </TextDesc>
          )}
        </>
      </FlexWrapper>
    </Container>
  );
}
