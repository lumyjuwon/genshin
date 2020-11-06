import React, { useState } from 'react';
import styled from 'styled-components';

import { ItemBadgeBox, RoundImage, RoundImageBox, Modal, GridWrapper } from 'src/components';
import { characterInfo, CharacterName } from 'src/resources/data';
import { ElementImages, CategoryImages, CharacterImages, ImageSrc } from 'src/resources/images';
import { ArtifactResult } from '../artifact/ArtifactResult';
import { CharacterEquipSlot } from './CharacterEquipSlot';

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
  onClick: Function;
  dic: [CharacterName, ImageSrc];
  selectedCharacter: Map<CharacterName, ImageSrc>;
}

export function CharacterSlot(props: Props) {
  const [isVisibleCharacterModal, setIsVisibleCharacterModal] = useState<boolean>(false);

  return (
    <Inner>
      <ItemBadgeBox
        tooltip={props.dic[0]}
        rank={1}
        hoverInnerColor={'#f1f2f3'}
        isToolTipVisible={false}
        isRankVisible={false}
        onClick={() => {
          setIsVisibleCharacterModal(true);
        }}
        badge={
          <RoundImage
            src={props.dic[1] !== undefined ? ElementImages[characterInfo[props.dic[0]].element] : CategoryImages.Character}
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
        child={
          <RoundImageBox
            src={props.dic[1]}
            styles={{
              boxStyle: {
                width: '120px',
                height: '120px',
                margin: '0',
                medium: { width: '90px', height: '90px' },
                small: { width: '80px', height: '80px' }
              },
              imageStyle: {
                width: '100px',
                height: '100px',
                medium: { width: '90px', height: '90px' },
                small: { width: '80px', height: '80px' }
              }
            }}
          />
        }
      />
      <Modal
        cancel={() => {
          setIsVisibleCharacterModal(false);
        }}
        visible={isVisibleCharacterModal}
      >
        <GridWrapper>
          {Object.keys(characterInfo).map((name: string) => {
            return (
              <ItemBadgeBox
                key={name}
                rank={characterInfo[name].rank}
                tooltip={name}
                hoverInnerColor={'#f1f2f3'}
                onClick={() => {
                  props.onClick(name, CharacterImages[name]);
                }}
                badge={
                  <RoundImage
                    src={ElementImages[characterInfo[name].element]}
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
                child={
                  <RoundImageBox
                    src={CharacterImages[name]}
                    styles={{
                      boxStyle: {
                        width: '100px',
                        height: '100px',
                        backgroundColor: props.selectedCharacter.has(name) ? '#f1f2f3' : 'transparent',
                        margin: '0px'
                      },
                      imageStyle: {
                        width: '80px',
                        height: '80px',
                        borderRadius: '35%',
                        small: { width: '60px', height: '60px' }
                      }
                    }}
                  />
                }
                styles={{
                  tooltipStyles: { bottom: '0' }
                }}
              />
            );
          })}
        </GridWrapper>
      </Modal>
      <CharacterEquipSlot onClick={() => {}} characterName={props.dic[0]} characterSrc={props.dic[1]} />
      {props.dic[1] && <ArtifactResult activeArtifacts={new Map()} />}
    </Inner>
  );
}
