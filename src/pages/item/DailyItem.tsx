import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, weaponAscesionItemInfo } from 'src/resources/data';
import { RoundImage, FlexWrapper, GridWrapper, ItemContentBox, CSSGridWrapper } from 'src/components';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { Layout } from './Layout';

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '16px',
  margin: '10px 0 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {}

export function DailyItem(props: Props) {
  return (
    <Layout title={trans(Lang.Daily_Abyssal_Items)}>
      <CSSGridWrapper styles={{ gridTemplateColumns: 'repeat(auto-fit, 300px)', columnGap: '20px', rowGap: '20px' }}>
        <>
          {Object.keys(characterTalentItemInfo).map((set) => {
            return (
              <ItemContentBox
                key={set}
                image={
                  <FlexWrapper>
                    {Object.keys(characterTalentItemInfo[set].items).map((item) => {
                      return (
                        <RoundImage
                          key={item}
                          src={require(`../../resources/images/items/character-talent/${item}.png`)}
                          styles={{
                            width: '70px',
                            height: '70px',
                            medium: { width: '60px', height: '60px' },
                            small: { width: '60px', height: '60px' }
                          }}
                        />
                      );
                    })}
                  </FlexWrapper>
                }
                name={trans(Lang[set as KeyLang])}
              >
                <Description>{characterTalentItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
                <Description>{trans(Lang.Character_Talent_Material)}</Description>
              </ItemContentBox>
            );
          })}
          {Object.keys(weaponAscesionItemInfo).map((set) => {
            return (
              <ItemContentBox
                key={set}
                image={
                  <FlexWrapper>
                    {Object.keys(weaponAscesionItemInfo[set].items).map((item) => {
                      return (
                        <RoundImage
                          key={item}
                          src={require(`../../resources/images/items/weapon-ascension/${item}.png`)}
                          styles={{
                            width: '70px',
                            height: '70px',
                            medium: { width: '60px', height: '60px' },
                            small: { width: '60px', height: '60px' }
                          }}
                        />
                      );
                    })}
                  </FlexWrapper>
                }
                name={trans(Lang[set as KeyLang])}
              >
                <Description>{weaponAscesionItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
                <Description>{trans(Lang.Weapon_Ascension_Material)}</Description>
              </ItemContentBox>
            );
          })}
        </>
      </CSSGridWrapper>
    </Layout>
  );
}
