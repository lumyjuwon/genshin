import React from 'react';
import styled from 'styled-components';

import { BoxModelWrapper, FlexWrapper, RoundImage } from 'src/components';
import { characterTalentItemInfo, alchemyItemInfo, characterInfo } from 'src/resources/data';
import { CharacterAscentionItemImages, WeeklyBossItemImages } from 'src/resources/images';

const Title = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'center',
  margin: '15px 0 0',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const Name = styled.div({
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {
  character: string;
}

export function TalentDetail(props: Props) {
  const characterTalentInfo = characterInfo[props.character].talent;

  return (
    <>
      <Title>Talent Level Up Items</Title>
      {characterTalentInfo.book ? (
        <FlexWrapper styles={{ margin: '10px 0 0', small: { flexDirection: 'column' } }}>
          <FlexWrapper styles={{ flexDirection: 'column' }}>
            <FlexWrapper>
              {Object.keys(characterTalentItemInfo[characterTalentInfo.book].items).map((item) => {
                return (
                  <BoxModelWrapper key={item} styles={{ margin: '3px', medium: { margin: '3px' }, small: { margin: '3px' } }}>
                    <RoundImage
                      src={require(`../../../resources/images/items/character-talent/${item}.png`)}
                      styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
                    />
                  </BoxModelWrapper>
                );
              })}
            </FlexWrapper>
            <Name>{characterTalentInfo.book}</Name>
          </FlexWrapper>
          <FlexWrapper styles={{ margin: '0 0 0 10px', flexDirection: 'column', small: { margin: '10px 0 0' } }}>
            <FlexWrapper>
              <BoxModelWrapper styles={{ margin: '3px', medium: { margin: '3px' }, small: { margin: '3px' } }}>
                <RoundImage src={CharacterAscentionItemImages[characterTalentInfo.drop]} styles={{ width: '60px', height: '60px' }} />
              </BoxModelWrapper>
              <>
                {Object.keys(alchemyItemInfo)
                  .filter((item) => alchemyItemInfo[item].source === characterTalentInfo.drop)
                  .map((item) => {
                    return (
                      <BoxModelWrapper key={item} styles={{ margin: '3px', medium: { margin: '3px' }, small: { margin: '3px' } }}>
                        <RoundImage
                          src={CharacterAscentionItemImages[item]}
                          styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
                        />
                      </BoxModelWrapper>
                    );
                  })}
              </>
            </FlexWrapper>
            <Name>{characterTalentInfo.drop}</Name>
          </FlexWrapper>
          <FlexWrapper styles={{ margin: '0 0 0 10px', flexDirection: 'column', small: { margin: '10px 0 0' } }}>
            <RoundImage
              src={WeeklyBossItemImages[characterTalentInfo.boss]}
              styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
            />
            <Name>{characterTalentInfo.boss}</Name>
          </FlexWrapper>
        </FlexWrapper>
      ) : (
        <FlexWrapper>None</FlexWrapper>
      )}
    </>
  );
}
