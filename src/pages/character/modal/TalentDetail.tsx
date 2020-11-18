import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, RoundImage } from 'src/components';
import { characterTalentItemInfo, alchemyItemInfo, characterInfo } from 'src/resources/data';
import { CharacterAscentionItemImages, WeeklyBossItemImages } from 'src/resources/images';

const Title = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'center',
  margin: '15px 0 0'
});

interface Props {
  character: string;
}

export function TalentDetail(props: Props) {
  const characterTalentInfo = characterInfo[props.character].talent;

  return (
    <>
      <Title>Talent Level Up Items</Title>
      <FlexWrapper styles={{ margin: '10px 0 0' }}>
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <FlexWrapper>
            {Object.keys(characterTalentItemInfo[characterTalentInfo.book].items).map((item) => {
              return (
                <RoundImage
                  src={require(`../../../resources/images/items/character-talent/${item}.png`)}
                  styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
                />
              );
            })}
          </FlexWrapper>
          <FlexWrapper>{characterTalentInfo.book}</FlexWrapper>
        </FlexWrapper>
        <FlexWrapper styles={{ margin: '0 0 0 10px', flexDirection: 'column' }}>
          <FlexWrapper>
            <RoundImage src={CharacterAscentionItemImages[characterTalentInfo.drop]} styles={{ width: '60px', height: '60px' }} />
            <>
              {Object.keys(alchemyItemInfo)
                .filter((item) => alchemyItemInfo[item].source === characterTalentInfo.drop)
                .map((item) => {
                  return (
                    <RoundImage
                      src={CharacterAscentionItemImages[item]}
                      styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
                    />
                  );
                })}
            </>
          </FlexWrapper>
          <FlexWrapper>{characterTalentInfo.drop}</FlexWrapper>
        </FlexWrapper>
        <FlexWrapper styles={{ margin: '0 0 0 10px', flexDirection: 'column' }}>
          <RoundImage
            src={WeeklyBossItemImages[characterTalentInfo.boss]}
            styles={{ width: '60px', height: '60px', medium: { width: '50px', height: '50px' } }}
          />
          <FlexWrapper>{characterTalentInfo.boss}</FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </>
  );
}
