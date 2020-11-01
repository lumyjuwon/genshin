import React from 'react';
import styled from 'styled-components';

import { ItemBadgeBox, RoundImage, RoundImageButton } from 'src/components';
import { CharacterName } from 'src/resources/data';
import { ImageSrc, ElementImages } from 'src/resources/images';
import { characterInfo } from 'src/resources/data';

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
        return (
          <Inner key={index}>
            <ItemBadgeBox
              tooltip={dic[0]}
              rank={1}
              badge={
                <RoundImage
                  src={dic[1] !== null ? ElementImages[characterInfo[dic[0]].element] : null}
                  styles={{
                    width: '30px',
                    height: '30px',
                    small: {
                      width: '25px',
                      height: '25px'
                    }
                  }}
                />
              }
              image={
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
              }
              isToolTipVisible={false}
              isRankVisible={false}
            />
            <CharacterEquipSlot key={index} characterName={dic[0]} characterSrc={dic[1]}></CharacterEquipSlot>
          </Inner>
        );
      })}
    </Wrapper>
  );
}
