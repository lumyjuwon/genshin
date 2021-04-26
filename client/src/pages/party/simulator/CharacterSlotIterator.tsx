import React, { useState } from 'react';

import { CharacterSlot } from './CharacterSlot';
import { Modal, FlexGridWrapper, ItemBadgeBox, RoundImage, RoundImageBox, ContentBackgroundBox, BoxModelWrapper } from 'src/components';
import { characterInfo, CharacterName } from 'src/resources/data';
import { ElementImages, CharacterImages } from 'src/resources/images';
import { maxCharacterLength } from './CharacterSimulator';

import { partyDispatch } from 'src/redux/party/dispatch';
import { PartyData } from 'src/redux/party/types';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px',
  '@media screen and (max-width: 768px)': {
    padding: '10px'
  }
});

interface Props {
  characters: PartyData;
}

export function CharacterSlotIterator(props: Props) {
  const [isVisibleCharacterModal, setIsVisibleCharacterModal] = useState<boolean>(false);
  const charactersArray = Object.keys(props.characters);
  const maxCharacterSlot = 4;

  function callbackSetIsVisibleCharacterModal(bool: boolean) {
    setIsVisibleCharacterModal(bool);
  }

  function selectCharacter(name: CharacterName) {
    const partySize = Object.keys(props.characters).length;
    const partyData = Object.assign({}, props.characters);

    if (props.characters[name] === undefined && partySize < maxCharacterLength) {
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
    <Container>
      {Array.from({ length: maxCharacterSlot }, () => '').map((name: string, index: number) => {
        const characterName = charactersArray[index] !== undefined ? charactersArray[index] : '';
        return (
          <BoxModelWrapper key={`${name}_${index}_slot`} styles={{ margin: '20px 0' }}>
            <ContentBackgroundBox padding={'40px 30px 10px 40px'}>
              <CharacterSlot setVisible={callbackSetIsVisibleCharacterModal} name={characterName} src={CharacterImages[characterName]} />
            </ContentBackgroundBox>
          </BoxModelWrapper>
        );
      })}
      <Modal
        cancel={() => {
          setIsVisibleCharacterModal(false);
        }}
        visible={isVisibleCharacterModal}
      >
        <FlexGridWrapper>
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
                        backgroundColor: props.characters[name] !== undefined ? '#f1f2f3' : 'transparent',
                        margin: '0px',
                        small: { width: '80px', height: '80px' }
                      },
                      imageStyle: {
                        width: '80px',
                        height: '80px',
                        borderRadius: '35%',
                        small: { width: '70px', height: '70px' }
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
        </FlexGridWrapper>
      </Modal>
    </Container>
  );
}
