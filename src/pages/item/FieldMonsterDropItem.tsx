import React from 'react';
import styled from 'styled-components';

import { fieldMonsterDropItemInfo } from 'src/resources/data';
import { FlexWrapper, RoundImage, ItemContentBox, CSSGridWrapper, BoxModelWrapper } from 'src/components';
import { FieldMonsterDropItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { Layout } from './Layout';

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

export function FieldMonsterDropItem() {
  return (
    <Layout title={trans(Lang.Field_Monster_Drop_Item)}>
      <CSSGridWrapper
        styles={{
          gridTemplateColumns: 'repeat(auto-fit, 300px)',
          columnGap: '20px',
          rowGap: '20px',
          medium: { gridTemplateColumns: 'repeat(auto-fit, 300px)', rowGap: '20px', columnGap: '20px' },
          small: { gridTemplateColumns: 'repeat(auto-fit, 250px)', rowGap: '20px', columnGap: '20px' }
        }}
      >
        {Object.keys(fieldMonsterDropItemInfo).map((item) => {
          return (
            <ItemContentBox
              key={item}
              image={
                <RoundImage
                  src={FieldMonsterDropItemImages[item]}
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
                {fieldMonsterDropItemInfo[item].monster.map((monster, index) => {
                  return (
                    <Description key={monster}>
                      {`Drop${index + 1}: `}
                      {trans(Lang[monster.replace(/\s/g, '_') as KeyLang])}
                    </Description>
                  );
                })}
              </FlexWrapper>
              <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 0 0' }}>
                {fieldMonsterDropItemInfo[item].usage.map((usage) => (
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
