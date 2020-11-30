import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { FlexWrapper, RoundImage, FlexGridWrapper, BoxModelWrapper, TableWrapper } from 'src/components';
import { characterInfo, AscensionMaterialName } from 'src/resources/data';
import { CharacterAscentionItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const MaxLevel = styled.div({
  width: '120px',
  fontSize: '16px',
  textAlign: 'center',
  margin: '0 0 5px',
  '@media screen and (max-width: 768px)': {
    float: 'left',
    fontSize: '14px',
    width: '80px'
  }
});
const Count = styled.div({
  fontSize: '16px',
  margin: '0 0 0 3px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface Props {
  character: string;
}

enum AscensionStep {
  Max_40 = 'Max_40',
  Max_50 = 'Max_50',
  Max_60 = 'Max_60',
  Max_70 = 'Max_70',
  Max_80 = 'Max_80',
  Max_90 = 'Max_90'
}
type Step = keyof typeof AscensionStep;

export function CharacterAscensionMaterials(props: Props) {
  const ascensionInfo = characterInfo[props.character].ascensionMaterials;
  const ascensionItems: Map<AscensionMaterialName, number> = new Map();

  function getAscensionItems(key: AscensionStep): Array<string> {
    ascensionItems.clear();
    Object.keys(ascensionInfo[key]).forEach((item) => {
      ascensionItems.set(item, ascensionInfo[key][item]);
    });
    let items = Array.from(ascensionItems.keys());
    return items;
  }
  return (
    <Layout title={trans(Lang.Character_Ascension_Material)}>
      <BoxModelWrapper styles={{ small: { padding: '0 10px' } }}>
        <TableWrapper
          header={
            <FlexWrapper styles={{ padding: '5px', small: { width: '100%', padding: '5px' } }}>
              <MaxLevel>{trans(Lang.Ascension_Step)}</MaxLevel>
              <FlexGridWrapper styles={{ width: '500px', medium: { width: '450px' }, small: { width: '100%' } }}>
                {trans(Lang.Material)}
              </FlexGridWrapper>
            </FlexWrapper>
          }
          body={Object.values(AscensionStep).map((step: Step) => {
            return (
              <FlexWrapper key={step} styles={{ padding: '15px', small: { width: '100%', padding: '8px' } }}>
                <MaxLevel>{trans(Lang[step as KeyLang])}</MaxLevel>
                <FlexGridWrapper styles={{ width: '500px', medium: { width: '450px' }, small: { width: '100%' } }}>
                  {getAscensionItems(AscensionStep[step]).map((item: AscensionMaterialName) => {
                    return (
                      <FlexWrapper key={item} styles={{ margin: '8px' }}>
                        <RoundImage
                          src={CharacterAscentionItemImages[item]}
                          styles={{ width: '50px', height: '50px', small: { width: '40px', height: '40px' } }}
                        />
                        <Count>x{ascensionItems.get(item)}</Count>
                      </FlexWrapper>
                    );
                  })}
                </FlexGridWrapper>
              </FlexWrapper>
            );
          })}
        />
      </BoxModelWrapper>
    </Layout>
  );
}
