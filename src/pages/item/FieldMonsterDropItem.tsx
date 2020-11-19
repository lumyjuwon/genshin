import React from 'react';
import styled from 'styled-components';

import { fieldMonsterDropItemInfo } from 'src/resources/data';
import { FlexWrapper, RoundImage, GridWrapper } from 'src/components';
import { FieldMonsterDropItemImages } from 'src/resources/images';
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
  fontSize: '14px'
});

export function FieldMonsterDropItem() {
  return (
    <Layout title={trans(Lang.Field_Monster_Drop_Item)}>
      <GridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
        {Object.keys(fieldMonsterDropItemInfo).map((item) => {
          return (
            <FlexWrapper styles={{ width: '200px', flexDirection: 'column', margin: '15px 0 0' }}>
              <RoundImage
                src={FieldMonsterDropItemImages[item]}
                styles={{
                  width: '70px',
                  height: '70px',
                  medium: { width: '60px', height: '60px' },
                  small: { width: '60px', height: '60px' }
                }}
              />
              <Name>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</Name>
              <>
                {fieldMonsterDropItemInfo[item].monster.map((monster, index) => {
                  return (
                    <Description>
                      {`Drop${index + 1}: `}
                      {trans(Lang[monster.replace(/\s/g, '_') as KeyLang])}
                    </Description>
                  );
                })}
              </>
              <Description>{trans(Lang.Character_Ascension_Material)}</Description>
            </FlexWrapper>
          );
        })}
      </GridWrapper>
    </Layout>
  );
}
