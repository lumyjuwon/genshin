import React from 'react';
import styled from 'styled-components';

import { trans, Lang, KeyLang } from 'src/resources/languages';
import { FlexWrapper, RoundImage, GridWrapper, ItemContentBox } from 'src/components';
import { weeklyBossItemInfo } from 'src/resources/data';
import { WeeklyBossItemImages } from 'src/resources/images';
import { Layout } from './Layout';

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '14px',
  margin: '3px 0 0'
});

interface Props {}

export function WeeklyRewardItem(props: Props) {
  return (
    <Layout title={trans(Lang.Weekly_Boss_Items)}>
      <GridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
        {Object.keys(weeklyBossItemInfo).map((item) => {
          return (
            <FlexWrapper key={item} styles={{ flexDirection: 'column', margin: '15px 10px 0', width: '300px', small: { width: '240px' } }}>
              <ItemContentBox
                image={
                  <RoundImage
                    src={WeeklyBossItemImages[item]}
                    styles={{
                      width: '70px',
                      height: '70px',
                      medium: { width: '60px', height: '60px' },
                      small: { width: '60px', height: '60px' }
                    }}
                  />
                }
                name={trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}
              >
                <Description>
                  {weeklyBossItemInfo[item].obtain.map((location) => trans(Lang[location.replace(/\s/g, '_') as KeyLang])).join(', ')}
                </Description>
                <>
                  {weeklyBossItemInfo[item].usage.map((usage) => (
                    <Description key={usage}>{trans(Lang[usage as KeyLang])}</Description>
                  ))}
                </>
              </ItemContentBox>
            </FlexWrapper>
          );
        })}
      </GridWrapper>
    </Layout>
  );
}
