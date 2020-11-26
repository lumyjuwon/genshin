import React from 'react';
import styled from 'styled-components';

import { CSSGridWrapper, FlexWrapper, RoundImage } from 'src/components';
import { characterTalentItemInfo, alchemyItemInfo, characterInfo } from 'src/resources/data';
import { CharacterTalentItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { Layout } from './Layout';

const Name = styled.div({
  fontSize: '16px',
  margin: '5px 0 0',
  fontWeight: 'bold'
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
    <Layout title={trans(Lang.Character_Talent_Material)}>
      <CSSGridWrapper styles={{ gridTemplateColumns: 'repeat(auto-fit, 250px)', columnGap: '20px' }}>
        {talentInfo.book ? (
          <>
            <FlexWrapper styles={{ flexDirection: 'column' }}>
              <FlexWrapper>
                <>
                  {Object.keys(characterTalentItemInfo[talentInfo.book].items).map((item) => {
                    return (
                      <FlexWrapper key={item} styles={{ margin: '3px' }}>
                        <RoundImage
                          src={require(`../../../resources/images/items/character-talent/${item}.png`)}
                          styles={{ width: '60px', height: '60px' }}
                        />
                      </FlexWrapper>
                    );
                  })}
                </>
              </FlexWrapper>
              <Name>{trans(Lang[talentInfo.book as KeyLang])}</Name>
            </FlexWrapper>
            <FlexWrapper styles={{ flexDirection: 'column' }}>
              <FlexWrapper>
                <FlexWrapper styles={{ margin: '3px' }}>
                  <RoundImage src={CharacterTalentItemImages[talentInfo.drop]} styles={{ width: '60px', height: '60px' }} />
                </FlexWrapper>
                <>
                  {getArchemyItems(talentInfo.drop).map((item) => {
                    return (
                      <FlexWrapper key={item} styles={{ margin: '3px' }}>
                        <RoundImage src={CharacterTalentItemImages[item]} styles={{ width: '60px', height: '60px' }} />
                      </FlexWrapper>
                    );
                  })}
                </>
              </FlexWrapper>
              <Name>{trans(Lang[talentInfo.drop.replace(/'/g, '').replace(/\s/g, '_') as KeyLang])}</Name>
            </FlexWrapper>
            <FlexWrapper styles={{ flexDirection: 'column' }}>
              <FlexWrapper styles={{ margin: '3px' }}>
                <RoundImage src={CharacterTalentItemImages[talentInfo.boss]} styles={{ width: '60px', height: '60px' }} />
              </FlexWrapper>
              <Name>{trans(Lang[talentInfo.boss.replace(/'/g, '').replace(/\s/g, '_') as KeyLang])}</Name>
            </FlexWrapper>
          </>
        ) : (
          <Name>{trans(Lang.None)}</Name>
        )}
      </CSSGridWrapper>
    </Layout>
  );
}
