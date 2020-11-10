import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { PartyData } from 'src/redux/party/types';
import { RootState } from 'src/redux/rootReducer';
import {
  artifactInfo,
  ArtifactType,
  characterInfo,
  weaponInfo,
  WeaponType,
  WeaponName,
  ArtifactName,
  CharacterName
} from 'src/resources/data';
import { GridWrapper, ItemBadgeBox, Modal, RoundImage, BoxModelWrapper, RoundImageBox } from 'src/components';
import { CategoryImages, ImageSrc, ItemImages } from 'src/resources/images';
import { partyDispatch } from 'src/redux';

interface Items {
  [name: string]: {
    rank: number;
    type: WeaponType;
  };
}

const items: Items = Object.assign({}, weaponInfo, artifactInfo);

type EquipmentName = WeaponName | ArtifactName;
type EquipmentCategory = ArtifactType | WeaponType;
type ArtifactCount = number;
type ArtifactSetName = string;

interface EquipmentSlotProps {
  equipmentCateogry: EquipmentCategory;
  characterName: CharacterName;
  isActive?: boolean;
}

function EquipmentSlot(props: EquipmentSlotProps) {
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);
  const weaponOrArtifact = ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword'].includes(props.equipmentCateogry) ? 'Weapon' : 'Artifact';
  // @ts-ignore
  const equipmentName = props.characterName !== '' ? characters[props.characterName][weaponOrArtifact][props.equipmentCateogry] : '';
  const [isVisibleEquipmentModal, setIsVisibleEquipmentModal] = useState<boolean>(false);

  function equipItem(name: EquipmentName) {
    const partyData = Object.assign({}, characters);
    if (partyData[props.characterName]) {
      //@ts-ignore
      partyData[props.characterName][weaponOrArtifact][props.equipmentCateogry] = name;
    }

    partyDispatch.SetParty(partyData);
  }

  return (
    <BoxModelWrapper styles={{ margin: '0 0 0 6px', small: { margin: '0 0 3px 3px' } }}>
      <ItemBadgeBox
        tooltip={equipmentName}
        isActive={props.isActive}
        isToolTipVisible={false}
        rank={items[equipmentName] !== undefined ? items[equipmentName].rank : undefined}
        hoverInnerColor={'#f1f2f3'}
        onClick={() => {
          setIsVisibleEquipmentModal(true);
        }}
        badge={
          <RoundImage
            src={CategoryImages[props.equipmentCateogry]}
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
            src={ItemImages[equipmentName]}
            styles={{
              boxStyle: {
                width: '100px',
                height: '100px',
                margin: '0px',
                medium: { width: '75px', height: '75px' },
                small: { width: '65px', height: '65px', margin: '3px' }
              },
              imageStyle: {
                width: '80px',
                height: '80px',
                small: { width: '55px', height: '55px' }
              }
            }}
          />
        }
        isHoverdToolTip={false}
        isRankVisible={false}
        styles={{
          tooltipStyles: { bottom: '0px' }
        }}
      />
      <Modal
        cancel={() => {
          setIsVisibleEquipmentModal(false);
        }}
        visible={isVisibleEquipmentModal}
      >
        <GridWrapper>
          {Object.keys(items).map((name: EquipmentName) => {
            if (items[name].type === props.equipmentCateogry) {
              return (
                <ItemBadgeBox
                  key={name}
                  tooltip={name}
                  rank={items[name].rank}
                  hoverInnerColor={'#f1f2f3'}
                  onClick={() => {
                    setIsVisibleEquipmentModal(false);
                    equipItem(name);
                  }}
                  badge={
                    <RoundImage
                      src={CategoryImages[props.equipmentCateogry]}
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
                      src={ItemImages[name]}
                      styles={{
                        boxStyle: {
                          width: '100px',
                          height: '100px',
                          backgroundColor: name === equipmentName ? '#f1f2f3' : 'transparent',
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
                    tooltipStyles: { bottom: '0px' }
                  }}
                />
              );
            }
            return null;
          })}
        </GridWrapper>
      </Modal>
    </BoxModelWrapper>
  );
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    flexWrap: 'wrap'
  }
});

interface Props {
  // changeActiveArtifacts: Function;
  // changeSelectedWeapon: Function;
  characterSrc: ImageSrc;
  characterName: CharacterName;
}

export function CharacterEquipSlot(props: Props) {
  const itemCategoryList: Array<WeaponType | ArtifactType> = [
    characterInfo[props.characterName] !== undefined ? characterInfo[props.characterName].weapon : 'Bow',
    'Flower',
    'Feather',
    'HourGlass',
    'HolyGrail',
    'Crown'
  ];

  return (
    <Container>
      {itemCategoryList.map((cateogry: WeaponType | ArtifactType) => {
        return (
          <EquipmentSlot
            key={cateogry}
            equipmentCateogry={cateogry}
            characterName={props.characterName}
            isActive={characterInfo[props.characterName] !== undefined}
          />
        );
      })}
    </Container>
  );
}
