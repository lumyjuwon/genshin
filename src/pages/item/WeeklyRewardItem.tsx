import React from 'react';
import styled from 'styled-components';

import { trans, Lang, KeyLang } from 'src/resources/languages';
import { FlexWrapper, RoundImage, CSSGridWrapper, ItemContentBox } from 'src/components';
import { weeklyBossItemInfo } from 'src/resources/data';
import { WeeklyBossItemImages } from 'src/resources/images';
import { Layout } from './Layout';

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '16px',
  margin: '3px 0 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {}

export function WeeklyRewardItem(props: Props) {
  return (
    <Layout title={trans(Lang.Weekly_Boss_Items)}>
      <CSSGridWrapper styles={{ gridTemplateColumns: 'repeat(auto-fit, 300px)', columnGap: '20px', rowGap: '20px' }}>
        {Object.keys(weeklyBossItemInfo).map((item) => {
          return (
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
              <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 0 0' }}>
                <Description>
                  {weeklyBossItemInfo[item].obtain.map((location) => trans(Lang[location.replace(/\s/g, '_') as KeyLang])).join(', ')}
                </Description>
              </FlexWrapper>
              <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 0 0' }}>
                {weeklyBossItemInfo[item].usage.map((usage) => (
                  <Description key={usage}>{trans(Lang[usage as KeyLang])}</Description>
                ))}
              </FlexWrapper>
            </ItemContentBox>
          );
        })}
      </CSSGridWrapper>
    </Layout>
  );
}
