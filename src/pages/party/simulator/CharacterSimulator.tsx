import React from 'react';
import styled from 'styled-components';

import { RoundImageButton } from 'src/components';
import { CharacterName } from 'src/resources/data';
import { ImageSrc, CharacterImages, ElementImages } from 'src/resources/images';
import { characterInfo } from 'src/resources/data';
import { ItemButton } from '../ItemButton';

import { CharacterEquipSlot } from './CharacterEquipSlot';

const Wrapper = styled.div({
  display: 'flex',
  width: '845px',
  height: 'fit-content',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  margin: '0 auto',
  marginBottom: '5vh',
  '@media screen and (max-width: 1380px)': {
    width: '655px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    padding: '0'
  }
});

const Inner = styled.div({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  flexDirection: 'row',
  margin: '0 0 15px',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

interface Props {
  characters: Array<[CharacterName, ImageSrc]>;
  onClick: Function;
}

export function CharacterSimulator(props: Props) {
  return (
    <Wrapper>
      {props.characters.map((dic: [CharacterName, ImageSrc], index: number) => {
        return characterInfo[dic[0]] ? (
          <Inner>
            <ItemButton
              floatImagePath={ElementImages[characterInfo[dic[0]].element]}
              fillFloatBackground={false}
              onClick={() => {
                props.onClick();
              }}
              src={CharacterImages[dic[0]]}
              item={dic[0]}
              starVisible={true}
              styles={{
                roundImageButtonStyles: {
                  buttonStyles: {
                    width: '120px',
                    height: '120px',
                    margin: '0',
                    medium: { width: '90px', height: '90px' },
                    small: { width: '80px', height: '80px' }
                  },
                  imageStyles: { medium: { width: '80px', height: '80px' }, small: { width: '70px', height: '70px' } }
                },
                boxStyles: { margin: '0px' },
                tooltipStyles: { fontSize: '16px', bottom: '22px', small: { fontSize: '14px' } },
                absoluteStyles: { top: '5px', right: '5px' }
              }}
            />
            <CharacterEquipSlot key={index} characterName={dic[0]} characterSrc={dic[1]}></CharacterEquipSlot>
          </Inner>
        ) : (
          <Inner key={dic[0]}>
            <RoundImageButton
              src={dic[1]}
              onClick={() => {
                props.onClick();
              }}
              styles={{
                buttonStyles: {
                  width: '120px',
                  height: '120px',
                  margin: '0',
                  medium: { width: '90px', height: '90px' },
                  small: { width: '80px', height: '80px' }
                },
                imageStyles: { medium: { width: '80px', height: '80px' }, small: { width: '70px', height: '70px' } }
              }}
            />
            <CharacterEquipSlot key={index} characterName={dic[0]} characterSrc={dic[1]}></CharacterEquipSlot>
          </Inner>
        );
      })}
    </Wrapper>
  );
}
