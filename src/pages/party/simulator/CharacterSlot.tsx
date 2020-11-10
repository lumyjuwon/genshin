import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { partyDispatch } from 'src/redux';
import { RootState } from 'src/redux/rootReducer';
import { PartyData } from 'src/redux/party/types';
import { ItemBadgeBox, RoundImage, RoundImageBox, Modal, GridWrapper, FlexWrapper } from 'src/components';
import { characterInfo, CharacterName } from 'src/resources/data';
import { ElementImages, CategoryImages, CharacterImages, ImageSrc } from 'src/resources/images';
import { CharacterResult } from '../character/CharacteResult';
import { CharacterEquipSlot } from './CharacterEquipSlot';
import { maxCharacterLength } from './CharacterSimulator';

const Inner = styled.div({
  display: 'flex',
  width: 'fit-content',
  height: 'fit-content',
  flexDirection: 'column',
  margin: '0 0 15px',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

interface Props {
  name: CharacterName;
  src: ImageSrc;
}

type ArtifactSetName = string;
type Count = number;

export function CharacterSlot(props: Props) {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

  const [isVisibleCharacterModal, setIsVisibleCharacterModal] = useState<boolean>(false);

  function selectCharacter(name: CharacterName) {
    const partySize = Object.keys(characters).length;
    const partyData = Object.assign({}, characters);

    if (characters[name] === undefined && partySize < maxCharacterLength) {
      const data: PartyData = {
        [name]: {
          Weapon: {},
          Artifact: {}
        }
      };
      Object.assign(partyData, data);
    } else {
      delete partyData[name];
    }

    partyDispatch.SetParty(partyData);
  }

  return (
    <Inner>
      <FlexWrapper styles={{ flexDirection: 'row', margin: '0 0 5px', small: { flexDirection: 'column' } }}>
        <>
          <ItemBadgeBox
            tooltip={props.name}
            hoverInnerColor={'#f1f2f3'}
            isToolTipVisible={false}
            isRankVisible={false}
            onClick={() => {
              setIsVisibleCharacterModal(true);
            }}
            badge={
              <RoundImage
                src={props.src !== undefined ? ElementImages[characterInfo[props.name].element] : CategoryImages.Character}
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
                src={props.src}
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
                      selectCharacter(name);
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
                            backgroundColor: characters[name] !== undefined ? '#f1f2f3' : 'transparent',
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
          <CharacterEquipSlot characterName={props.name} characterSrc={props.src} />
        </>
      </FlexWrapper>
      {characters[props.name] && (
        <CharacterResult
          selectedCharacter={props.name}
          activeWeapon={characters[props.name].Weapon[characterInfo[props.name].weapon]}
          activeArtifacts={characters[props.name].Artifact}
        />
      )}
    </Inner>
  );
}
