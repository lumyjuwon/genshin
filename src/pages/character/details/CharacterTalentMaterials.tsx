import React from 'react';
import styled from 'styled-components';

import { BoxModelWrapper, FlexWrapper, RoundImage } from 'src/components';
import { characterTalentItemInfo, alchemyItemInfo, characterInfo } from 'src/resources/data';
import { CharacterTalentItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { Layout } from './Layout';

const Name = styled.div({
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {
  character: string;
}

export function CharacterTalentMaterials(props: Props) {
  const talentInfo = characterInfo[props.character].talentMaterials;

  function getArchemyItems(originItem: string): Array<string> {
    const archemyItems: Array<string> = [];
    Object.keys(alchemyItemInfo).forEach((archemyItem) => {
      if (originItem === alchemyItemInfo[archemyItem].source) {
        archemyItems.push(archemyItem);
      }
    });
    return archemyItems;
  }

  return (
    <Layout title="Character Talent Materials">
      <FlexWrapper styles={{ width: '100%' }}>
        <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 20px' }}>
          {talentInfo.book ? (
            <>
              <FlexWrapper>
                <>
                  {Object.keys(characterTalentItemInfo[talentInfo.book].items).map((item) => {
                    return (
                      <RoundImage
                        src={require(`../../../resources/images/items/character-talent/${item}.png`)}
                        styles={{ width: '60px', height: '60px' }}
                      />
                    );
                  })}
                </>
              </FlexWrapper>
              <Name>{talentInfo.book}</Name>
            </>
          ) : (
            <Name>None</Name>
          )}
        </FlexWrapper>
        <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 20px' }}>
          <FlexWrapper>
            <RoundImage src={CharacterTalentItemImages[talentInfo.drop]} styles={{ width: '60px', height: '60px' }} />
            <>
              {getArchemyItems(talentInfo.drop).map((item) => {
                return <RoundImage src={CharacterTalentItemImages[item]} styles={{ width: '60px', height: '60px' }} />;
              })}
            </>
          </FlexWrapper>
          <Name>{talentInfo.drop}</Name>
        </FlexWrapper>
        <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 20px' }}>
          <RoundImage src={CharacterTalentItemImages[talentInfo.boss]} styles={{ width: '60px', height: '60px' }} />
          <Name>{talentInfo.boss}</Name>
        </FlexWrapper>
      </FlexWrapper>
    </Layout>
  );
}
