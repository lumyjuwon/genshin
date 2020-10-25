import React from 'react';
import styled from 'styled-components';

import { RoundImageButton } from 'src/components';
import { CharacterEquipment } from './CharacterEquipment';

const Wrapper = styled.div({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: '25vw',
  paddingRight: '25vw',
  marginBottom: '5vh'
});

const Inner = styled.div({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  flexDirection: 'row'
});

interface Props {
  characters: Array<[string, string | null]>;
  onClick: Function;
}

export function CharacterSimulator(props: Props) {
  return (
    <Wrapper>
      {props.characters.map((dic: [string, string | null], index: number) => {
        return (
          <Inner>
            <RoundImageButton
              src={dic[1]}
              onClick={() => {
                props.onClick();
              }}
              styles={{ buttonStyles: { width: '120px', height: '120px' } }}
            />
            <CharacterEquipment key={index} characterSrc={dic[1]}></CharacterEquipment>
          </Inner>
        );
      })}
    </Wrapper>
  );
}
