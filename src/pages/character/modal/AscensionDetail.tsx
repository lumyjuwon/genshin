import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, RoundImage } from 'src/components';
import { characterInfo } from 'src/resources/data';
import { CharacterAscentionItemImages } from 'src/resources/images';

const Title = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '20px'
});

enum AscensionStep {
  first = 'first',
  second = 'second',
  third = 'third',
  fourth = 'fourth',
  fifth = 'fifth',
  sixth = 'sixth'
}
type Step = keyof typeof AscensionStep;

interface Props {
  character: string;
}

export function AscensionDetail(props: Props) {
  let ascensionItems: Map<string, number> = new Map();
  const characterAscensionInfo = characterInfo[props.character].ascension;

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
        <Title>Ascension Steps</Title>
        {Object.values(AscensionStep).map((step: Step) => {
          return (
            <FlexWrapper styles={{ margin: '10px 0 0' }}>
              <>
                <FlexWrapper styles={{ width: '70px' }}>{AscensionStep[step]}</FlexWrapper>
                <FlexWrapper styles={{ width: '400px' }}>
                  {getAscensionItems(AscensionStep[step]).map((item: string) => {
                    return (
                      <FlexWrapper styles={{ margin: '0 3px' }}>
                        <RoundImage src={CharacterAscentionItemImages[item]} styles={{ width: '60px', height: '60px' }} />
                        <div style={{ margin: '0 0 0 3px' }}>x{ascensionItems.get(item)}</div>
                      </FlexWrapper>
                    );
                  })}
                </FlexWrapper>
              </>
            </FlexWrapper>
          );
        })}
      </>
    </FlexWrapper>
  );
}
