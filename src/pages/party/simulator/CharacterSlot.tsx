import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'src/redux/rootReducer';
import { PartyData } from 'src/redux/party/types';
import { ItemBadgeBox, RoundImage, RoundImageBox, FlexWrapper } from 'src/components';
import { characterInfo, CharacterName } from 'src/resources/data';
import { ElementImages, CategoryImages, ImageSrc } from 'src/resources/images';
import { CharacterResult } from '../character/CharacterResult';
import { CharacterEquipSlot } from './CharacterEquipSlot';

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
  setVisible: Function;
}

type ArtifactSetName = string;
type Count = number;

export function CharacterSlot(props: Props) {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

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
              props.setVisible(true);
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
