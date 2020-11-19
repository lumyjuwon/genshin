import React from 'react';
import styled from 'styled-components';

import { trans, Lang, KeyLang } from 'src/resources/languages';
import { FlexWrapper, RoundImage, GridWrapper } from 'src/components';
import { weeklyBossItemInfo } from 'src/resources/data';
import { WeeklyBossItemImages } from 'src/resources/images';
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
  fontSize: '14px'
});

interface Props {}

export function WeeklyRewardItem(props: Props) {
  return (
    <Layout title={trans(Lang.Weekly_Boss_Items)}>
      <GridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
        {Object.keys(weeklyBossItemInfo).map((item) => {
          return (
            <FlexWrapper styles={{ flexDirection: 'column', margin: '15px 0 0', width: '300px' }}>
              <FlexWrapper>
                <RoundImage
                  src={WeeklyBossItemImages[item]}
                  styles={{
                    width: '70px',
                    height: '70px',
                    medium: { width: '60px', height: '60px' },
                    small: { width: '60px', height: '60px' }
                  }}
                />
              </FlexWrapper>
              <Name>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</Name>
              <Description>
                {weeklyBossItemInfo[item].obtain.map((location) => trans(Lang[location.replace(/\s/g, '_') as KeyLang])).join(', ')}
              </Description>
              <FlexWrapper styles={{ flexDirection: 'column', margin: '5px 0 0' }}>
                {weeklyBossItemInfo[item].usage.map((usage) => (
                  <Description>{trans(Lang[usage as KeyLang])}</Description>
                ))}
              </FlexWrapper>
            </FlexWrapper>
          );
        })}
      </GridWrapper>
    </Layout>
  );
}
