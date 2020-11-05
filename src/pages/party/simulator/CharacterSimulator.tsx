import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ItemBadgeBox, RoundImage, RoundImageBox } from 'src/components';
import { CharacterName, ArtifactName } from 'src/resources/data';
import { ImageSrc, ElementImages, CategoryImages } from 'src/resources/images';
import { characterInfo } from 'src/resources/data';
import { ArtifactResult } from '../artifact/ArtifactResult';

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
  // activeArtifacts: Map<ArtifactName, number>;
  onClick: Function;
}

type ArtifactCount = number;

export function CharacterSimulator(props: Props) {
  const [activeArtifacts, setActiveArtifacts] = useState<Map<ArtifactName, ArtifactCount>>(new Map());

  function getActiveArtifacts(activeArtifs: Map<ArtifactName, ArtifactCount>) {
    setActiveArtifacts(activeArtifs);
  }
  console.log('function call', activeArtifacts);

  return (
    <Wrapper>
      {props.characters.map((dic: [CharacterName, ImageSrc], index: number) => {
        return (
          <>
            <Inner key={index}>
              <ItemBadgeBox
                tooltip={dic[0]}
                rank={1}
                hoverInnerColor={'#f1f2f3'}
                onClick={() => {
                  props.onClick();
                }}
                badge={
                  <RoundImage
                    src={dic[1] !== undefined ? ElementImages[characterInfo[dic[0]].element] : CategoryImages.Character}
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
                    src={dic[1]}
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
                isToolTipVisible={false}
                isRankVisible={false}
              />
              <CharacterEquipSlot
                onClick={getActiveArtifacts}
                key={index}
                characterName={dic[0]}
                characterSrc={dic[1]}
              ></CharacterEquipSlot>
            </Inner>
            {dic[1] && <ArtifactResult activeArtifacts={activeArtifacts} />}
          </>
        );
      })}
    </Wrapper>
  );
}
