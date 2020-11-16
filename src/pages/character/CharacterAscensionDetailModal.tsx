import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, Modal, RoundImage } from 'src/components';
import { characterInfo } from 'src/resources/data';
import { CharacterImages, CharacterAscentionItemImages } from 'src/resources/images';

const Name = styled.span({
  fontSize: '20px',
  fontWeight: 'bold'
});

interface Props {
  visible: boolean;
  cancel: Function;
  character: string;
}

enum AscensionStep {
  first = 'first',
  second = 'second',
  third = 'third',
  fourth = 'fourth',
  fifth = 'fifth',
  sixth = 'sixth'
}

type Step = keyof typeof AscensionStep;

export function CharacterAscensionDetailModal(props: Props) {
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

  console.log(getAscensionItems(AscensionStep.first));

  if (props.character) {
    return (
      <Modal visible={props.visible} cancel={props.cancel}>
        <FlexWrapper styles={{ flexDirection: 'column' }}>
          <>
            <FlexWrapper>
              <RoundImage src={CharacterImages[props.character]} />
              <Name>{props.character}</Name>
            </FlexWrapper>
            <FlexWrapper styles={{ flexDirection: 'column' }}>
              {Object.values(AscensionStep).map((step: Step) => {
                return (
                  <FlexWrapper>
                    {getAscensionItems(AscensionStep[step]).map((item: string) => {
                      return (
                        <>
                          <RoundImage src={CharacterAscentionItemImages[item]} styles={{ width: '60px', height: '60px' }} />
                          <div>{ascensionItems.get(item)}</div>
                        </>
                      );
                    })}
                  </FlexWrapper>
                );
              })}

              {/* <div>{characterInfo[props.character].ascension.second}</div>
              <div>{characterInfo[props.character].ascension.third}</div>
              <div>{characterInfo[props.character].ascension.fourth}</div>
              <div>{characterInfo[props.character].ascension.fifth}</div>
              <div>{characterInfo[props.character].ascension.sixth}</div> */}
            </FlexWrapper>
          </>
        </FlexWrapper>
      </Modal>
    );
  } else {
    return null;
  }
}
