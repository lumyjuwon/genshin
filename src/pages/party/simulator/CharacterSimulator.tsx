import React from 'react';
import styled from 'styled-components';

import { RoundImageButton } from 'src/components';
import { CharacterEquipSlot } from './CharacterEquipSlot';

const Wrapper = styled.div({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '0 25vw 0',
  marginBottom: '5vh',
  '@media screen and (max-width: 768px)': {
    padding: '0',
  }
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
          <Inner key={dic[0]}>
            <RoundImageButton
              src={dic[1]}
              onClick={() => {
                props.onClick();
              }}
              styles={{ 
                buttonStyles: { 
                  width: '120px', height: '120px',
                  small: {width: "90px", height: "90px"}
                },
                imageStyles: { small: { width: "80px", height: "80px" } }
              }}
            />
            <CharacterEquipSlot key={index} characterSrc={dic[1]}></CharacterEquipSlot>
          </Inner>
        );
      })}
    </Wrapper>
  );
}
