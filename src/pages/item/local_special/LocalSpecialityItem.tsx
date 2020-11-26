import React from 'react';
import styled from 'styled-components';

import { CSSGridWrapper, FlexWrapper, GridWrapper, ItemContentBox, RoundImage } from 'src/components';
import { localSpecialityItemInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { LocalSpecialityItemImages } from 'src/resources/images';
import { Layout } from '../Layout';

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {
  local: string;
}

export function LocalSpecialityItem(props: Props) {
  return (
    <Layout
      title={trans(Lang[props.local as KeyLang])}
      styles={{
        containerStyle: { width: '900px', medium: { width: '600px' }, small: { width: '90%' } },
        titleStyle: { fontSize: '16px', medium: { fontSize: '14px' }, small: { fontSize: '13px' } },
        buttonStyle: { fontSize: '14px', medium: { fontSize: '12px' }, small: { fontSize: '12px' } }
      }}
    >
      <CSSGridWrapper styles={{ gridTemplateColumns: 'repeat(auto-fit, 250px)', columnGap: '20px', rowGap: '20px' }}>
        {Object.keys(localSpecialityItemInfo)
          .filter((item) => localSpecialityItemInfo[item].region === props.local)
          .map((item) => {
            return (
              <ItemContentBox
                image={
                  <RoundImage
                    src={LocalSpecialityItemImages[item]}
                    styles={{
                      width: '70px',
                      height: '70px',
                      medium: { width: '60px', height: '60px' },
                      small: { width: '60px', height: '60px' }
                    }}
                  />
                }
                name={trans(Lang[item.replace(/\s/g, '_') as KeyLang])}
              >
                <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 0 0' }}>
                  {localSpecialityItemInfo[item].usage.map((usage) => (
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
