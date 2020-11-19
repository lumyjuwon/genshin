import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, GridWrapper, RoundImage } from 'src/components';
import { localSpecialityItemInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { LocalSpecialityItemImages } from 'src/resources/images';
import { Layout } from '../Layout';

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

interface Props {
  local: string;
}

export function LocalSpecialityItem(props: Props) {
  return (
    <Layout
      title={trans(Lang[props.local as KeyLang])}
      styles={{
        containerStyle: { width: '800px', medium: { width: '600px' }, small: { width: '200px' } },
        titleStyle: { fontSize: '16px', medium: { fontSize: '14px' }, small: { fontSize: '13px' } },
        buttonStyle: { fontSize: '14px', medium: { fontSize: '12px' }, small: { fontSize: '12px' } }
      }}
    >
      <GridWrapper styles={{ width: '800px' }}>
        {Object.keys(localSpecialityItemInfo)
          .filter((item) => localSpecialityItemInfo[item].region === props.local)
          .map((item) => {
            return (
              <FlexWrapper styles={{ flexDirection: 'column', margin: '15px 0 0', width: '200px' }}>
                <RoundImage
                  src={LocalSpecialityItemImages[item]}
                  styles={{
                    width: '70px',
                    height: '70px',
                    medium: { width: '60px', height: '60px' },
                    small: { width: '60px', height: '60px' }
                  }}
                />
                <Name>{trans(Lang[item.replace(/\s/g, '_') as KeyLang])}</Name>
                <FlexWrapper styles={{ flexDirection: 'column', margin: '5px 0 0' }}>
                  {localSpecialityItemInfo[item].usage.map((usage) => (
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
