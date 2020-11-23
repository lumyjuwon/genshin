import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { FlexWrapper, RoundImage, GridWrapper } from 'src/components';
import { characterInfo, AscensionMaterialName, Level } from 'src/resources/data';
import { CharacterAscentionItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const MaxLevel = styled.div({
  width: '120px',
  fontSize: '16px',
  textAlign: 'center',
  margin: '0 0 5px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const Materials = styled.div({
  width: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
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
    <Layout title="Character Ascension Materials">
      <FlexWrapper styles={{ width: '100%', flexDirection: 'column' }}>
        <FlexWrapper>
          <MaxLevel>Ascension Step</MaxLevel>
          <GridWrapper styles={{ width: '500px' }}>Materials</GridWrapper>
        </FlexWrapper>
        <>
          {Object.values(AscensionStep).map((step: Step) => {
            return (
              <FlexWrapper styles={{ margin: '10px 0 0' }}>
                <MaxLevel>{step}</MaxLevel>
                <GridWrapper styles={{ width: '500px' }}>
                  {getAscensionItems(AscensionStep[step]).map((item: AscensionMaterialName) => {
                    return (
                      <FlexWrapper styles={{ margin: '0 10px' }}>
                        <RoundImage src={CharacterAscentionItemImages[item]} styles={{ width: '60px', height: '60px' }} />
                        <Count>x{ascensionItems.get(item)}</Count>
                      </FlexWrapper>
                    );
                  })}
                </GridWrapper>
              </FlexWrapper>
            );
          })}
        </>
      </FlexWrapper>
    </Layout>
  );
}
