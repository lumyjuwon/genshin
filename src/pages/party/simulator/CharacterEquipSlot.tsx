import React, { useState } from 'react';
import styled from 'styled-components';

import { GridWrapper, Modal, RoundImageButton } from 'src/components';
import { artifactInfo, gachaInfo, weaponInfo } from 'src/resources/data';
import { SelectButton } from '../SelectButton';

interface EquipmentButtonProps {
  type: string;
  // items: string[];
}

enum weaponType {
  Bow = "Bow",
  Catalyst = "Catalyst",
  Claymore = "Claymore",
  Polearm = "Polearm",
  Sword = "sword"
}

type weaponTypeKey = keyof typeof weaponType;

const EquipmentButton = (props: EquipmentButtonProps) => {
  const [equipment, setEquipment] = useState<string>('');
  const [equipmentSrc, setEquipmentSrc] = useState<string | null>(null);
  const [isVisibleEquipmentModal, setIsVisibleEquipmentModal] = useState<boolean>(false);

  return (
    <div>
      <RoundImageButton
        src={equipmentSrc}
        onClick={() => {
          setIsVisibleEquipmentModal(true);
        }}
        styles={{
          buttonStyles: { width: '100px', height: '100px', 
            medium: { width: '75px', height: '75px' },
            small: { width: '65px', height: '65px', margin: '3px' } },
          imageStyles: { width: '80px', height: '80px', small: { width : '55px', height: '55px' } }
        }}
      />
      <Modal
        cancel={() => {
          setIsVisibleEquipmentModal(false);
        }}
        visible={isVisibleEquipmentModal}
      >
        <GridWrapper>
          {weaponType[props.type as weaponTypeKey] ? 
            Object.keys(weaponInfo).map((weaponName: string) => {
              if (weaponInfo[weaponName].type === props.type) {
                return (
                  <SelectButton
                    key={weaponName}
                    src={require(`../../../resources/images/items/weapons/${weaponName}.png`)}
                    onClick={() => {
                      setEquipmentSrc(require(`../../../resources/images/items/weapons/${weaponName}.png`));
                      setEquipment(weaponName);
                    }}
                    isActive={weaponName === equipment}
                  />
                );
              } else {
                return null;
              }
            }) :
            Object.keys(artifactInfo).map((artifactName: string) => {
              if (artifactInfo[artifactName].type && (artifactInfo[artifactName].type === props.type)) {
                return (
                  <SelectButton
                    key={artifactName}
                    src={require(`../../../resources/images/items/artifacts/${artifactName}.png`)}
                    onClick={() => {
                      setEquipmentSrc(require(`../../../resources/images/items/artifacts/${artifactName}.png`));
                      setEquipment(artifactName);
                    }}
                    isActive={artifactName === equipment}
                  />
                )
              }
            })
          }
        </GridWrapper>
      </Modal>
    </div>
  );
};

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
  characterSrc: string | null;
}

const itemCategoryList = ['Bow', 'Flower', 'Feather', 'HourGlass', 'HolyGrail', 'Crown'];

export function CharacterEquipSlot(props: Props) {
  return (
    <Container>
      {props.characterSrc !== null && (
        <>
          {itemCategoryList.map((type: string) => {
            return <EquipmentButton key={type} type={type} />;
          })}
        </>
      )}
    </Container>
  );
}
