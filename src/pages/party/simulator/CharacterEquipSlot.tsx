import React, { useState } from 'react';
import styled from 'styled-components';

import { GridWrapper, Modal, RoundImageButton } from 'src/components';
import { weaponInfo } from 'src/resources/data';
import { SelectButton } from '../SelectButton';

interface EquipmentButtonProps {
  type: string;
  // items: string[];
}

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
          {Object.keys(weaponInfo).map((weaponName: string) => {
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
          })}
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

const arr = ['Bow', 'Flower', 'Feather', 'Hourglass', 'HolyGrail', 'Crown'];

export function CharacterEquipSlot(props: Props) {
  return (
    <Container>
      {props.characterSrc !== null && (
        <>
          {arr.map((type: string) => {
            return <EquipmentButton key={type} type={type} />;
          })}
        </>
      )}
    </Container>
  );
}
