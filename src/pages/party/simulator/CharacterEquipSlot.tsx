import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import * as Loadsh from 'lodash';

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

interface EquipmentSlotProps {
  equipmentName: string;
  equipmentCateogry: EquipmentCategory;
  characterName: CharacterName;
  onModalEquipmentName: Function;
  onModalEquipmentCategory: Function;
  onModalVisible: Function;
  isActive?: boolean;
}

function EquipmentSlot(props: EquipmentSlotProps) {
  return (
    <BoxModelWrapper styles={{ margin: '0 0 0 6px', small: { margin: '0 0 3px 3px' } }}>
      <ItemBadgeBox
        tooltip={props.equipmentName}
        isActive={props.isActive}
        isToolTipVisible={false}
        rank={items[props.equipmentName] !== undefined ? items[props.equipmentName].rank : undefined}
        hoverInnerColor={'#f1f2f3'}
        onClick={() => {
          props.onModalEquipmentName(props.equipmentName);
          props.onModalEquipmentCategory(props.equipmentCateogry);
          props.onModalVisible(true);
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
            src={
              props.equipmentName && items[props.equipmentName].type === props.equipmentCateogry
                ? ItemImages[props.equipmentName]
                : undefined
            }
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
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);
  const [isVisibleEquipmentModal, setIsVisibleEquipmentModal] = useState<boolean>(false);
  const [modalEquipmentName, setModalEquipmentName] = useState<EquipmentName>('');
  const [modalEquipmentCategory, setModalEquipmentCategory] = useState<WeaponType | ArtifactType>();

  function getCharacterEquipCategory(category: WeaponType | ArtifactType) {
    const weaponOrArtifact = ['Bow', 'Catalyst', 'Claymore', 'Polearm', 'Sword'].includes(category) ? 'Weapon' : 'Artifact';
    return weaponOrArtifact;
  }

  function equipItem(name: EquipmentName) {
    const partyData = Loadsh.cloneDeep(characters);
    if (partyData[props.characterName] && modalEquipmentCategory) {
      const equipCategory = getCharacterEquipCategory(modalEquipmentCategory);
      //@ts-ignore
      partyData[props.characterName][equipCategory][modalEquipmentCategory] = name;
    }

    partyDispatch.SetParty(partyData);
  }

  return (
    <Container>
      {itemCategoryList.map((category: WeaponType | ArtifactType) => {
        const equipCategory = getCharacterEquipCategory(category);
        // @ts-ignore
        const equipmentName = props.characterName !== '' ? characters[props.characterName][equipCategory][category] : '';

        return (
          <EquipmentSlot
            key={category}
            onModalEquipmentName={setModalEquipmentName}
            onModalEquipmentCategory={setModalEquipmentCategory}
            onModalVisible={setIsVisibleEquipmentModal}
            equipmentName={equipmentName}
            equipmentCateogry={category}
            characterName={props.characterName}
            isActive={characterInfo[props.characterName] !== undefined}
          />
        );
      })}
      <Modal
        cancel={() => {
          setIsVisibleEquipmentModal(false);
        }}
        visible={isVisibleEquipmentModal}
      >
        <GridWrapper>
          {Object.keys(items).map((name: EquipmentName) => {
            if (items[name].type === modalEquipmentCategory) {
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
                      src={CategoryImages[modalEquipmentCategory]}
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
                          backgroundColor: name === modalEquipmentName ? '#f1f2f3' : 'transparent',
                          margin: '0px',
                          small: { width: '70px', height: '70px' }
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
    </Container>
  );
}
