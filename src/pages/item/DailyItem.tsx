import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, weaponAscesionItemInfo } from 'src/resources/data';
import { RoundImage, FlexWrapper, GridWrapper } from 'src/components';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { Layout } from './Layout';

const Name = styled.div({
  width: '100%',
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '5px 0 0'
});

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '14px',
  margin: '5px 0 0'
});

interface Props {}

export function DailyItem(props: Props) {
  return (
    <Layout title={trans(Lang.Daily_Abyssal_Items)} styles={{ containerStyle: { margin: '0 auto' } }}>
      <GridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
        {Object.keys(characterTalentItemInfo).map((set) => {
          return (
            <FlexWrapper
              key={set}
              styles={{
                flexDirection: 'column',
                width: '300px',
                margin: '15px 0 0',
                medium: { width: '240px' },
                small: { width: '240px' }
              }}
            >
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
              <Name>{trans(Lang[set as KeyLang])}</Name>
              <Description>{characterTalentItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
              <Description>{trans(Lang.Character_Talent_Material)}</Description>
            </FlexWrapper>
          );
        })}
        {Object.keys(weaponAscesionItemInfo).map((set) => {
          return (
            <FlexWrapper
              key={set}
              styles={{
                flexDirection: 'column',
                width: '300px',
                margin: '10px 0 0',
                medium: { width: '240px' },
                small: { width: '240px' }
              }}
            >
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
              <Name>{trans(Lang[set as KeyLang])}</Name>
              <Description>{weaponAscesionItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
              <Description>{trans(Lang.Weapon_Ascension_Material)}</Description>
            </FlexWrapper>
          );
        })}
      </GridWrapper>
    </Layout>
  );
}
