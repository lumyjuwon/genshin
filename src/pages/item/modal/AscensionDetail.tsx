import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, GridWrapper, RoundImage } from 'src/components';
import { characterInfo } from 'src/resources/data';
// import { CharacterAscentionItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Title = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const MaxLevel = styled.div({
  fontSize: '16px',
  margin: '0 0 5px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const Count = styled.div({
  fontSize: '16px',
  margin: '0 0 0 3px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

enum AscensionStep {
  Max_40 = 'Max_40',
  Max_50 = 'Max_50',
  Max_60 = 'Max_60',
  Max_70 = 'Max_70',
  Max_80 = 'Max_80',
  Max_90 = 'Max_90'
}
type Step = keyof typeof AscensionStep;

interface Props {
  character: string;
}

export function AscensionDetail(props: Props) {
  let ascensionItems: Map<string, number> = new Map();
  const characterAscensionInfo = characterInfo[props.character].ascensionMaterials;

  function getAscensionItems(key: AscensionStep): Array<string> {
    ascensionItems.clear();
    Object.keys(characterAscensionInfo[key]).forEach((item) => {
      ascensionItems.set(item, characterAscensionInfo[key][item]);
    });
    let items = Array.from(ascensionItems.keys());
    return items;
  }

  return (
    <FlexWrapper styles={{ flexDirection: 'column', margin: '15px 0 0' }}>
      <>
        {/* <Title>Ascension Steps</Title>
        {Object.values(AscensionStep).map((step: Step) => {
          return (
            <FlexWrapper key={step} styles={{ margin: '10px 0 0', small: { flexDirection: 'column' } }}>
              <>
                <MaxLevel>{trans(Lang[AscensionStep[step] as KeyLang])}</MaxLevel>
                <GridWrapper styles={{ width: '400px', medium: { width: '370px' } }}>
                  {getAscensionItems(AscensionStep[step]).map((item: string) => {
                    return (
                      <FlexWrapper key={item} styles={{ margin: '0 3px' }}>
                        <RoundImage
                          src={CharacterAscentionItemImages[item]}
                          styles={{
                            width: '60px',
                            height: '60px',
                            medium: { width: '50px', height: '50px' },
                            small: { width: '30px', height: '30px' }
                          }}
                        />
                        <Count>x{ascensionItems.get(item)}</Count>
                      </FlexWrapper>
                    );
                  })}
                </GridWrapper>
              </>
            </FlexWrapper>
          );
        })} */}
      </>
    </FlexWrapper>
  );
}
