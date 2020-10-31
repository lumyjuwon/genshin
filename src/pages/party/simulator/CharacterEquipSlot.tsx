import React, { useState } from 'react';
import styled from 'styled-components';

import { GridWrapper, Modal, RoundImageButton } from 'src/components';
import { artifactInfo, ArtifactType, characterInfo, weaponInfo, WeaponType } from 'src/resources/data';
import { ItemButton } from '../ItemButton';
import { ItemImages } from 'src/resources/images';

interface Items {
  [name: string]: {
    rank: number;
    type: WeaponType;
  };
}

const items: Items = Object.assign({}, weaponInfo, artifactInfo);

interface EquipmentButtonProps {
  category: string;
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
          buttonStyles: {
            width: '100px',
            height: '100px',
            medium: { width: '75px', height: '75px' },
            small: { width: '65px', height: '65px', margin: '3px' }
          },
          imageStyles: { width: '80px', height: '80px', small: { width: '55px', height: '55px' } }
        }}
      />
      <Modal
        cancel={() => {
          setIsVisibleEquipmentModal(false);
        }}
        visible={isVisibleEquipmentModal}
      >
        <GridWrapper>
          {Object.keys(items).map((name: string) => {
            if (items[name] && items[name].type === props.category) {
              return (
                <ItemButton
                  key={name}
                  fillFloatBackground={true}
                  floatImagePath={ItemImages[name]}
                  item={name}
                  src={ItemImages[name]}
                  onClick={() => {
                    setEquipmentSrc(ItemImages[name]);
                    setEquipment(name);
                  }}
                  starVisible={true}
                  styles={{
                    boxStyles: {},
                    absoluteStyles: {},
                    starStyles: {},
                    roundImageButtonStyles: {
                      buttonStyles: {
                        backgroundColor: name === equipment ? '#f1f2f3' : 'transparent',
                        margin: '0px'
                      },
                      imageStyles: {
                        width: '80px',
                        height: '80px',
                        borderRadius: '35%',
                        small: { width: '60px', height: '60px' }
                      }
                    },
                    tooltipStyles: {
                      fontSize: '14px',
                      bottom: '0px',
                      small: { fontSize: '12px' }
                    }
                  }}
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
  characterName: string;
}

export function CharacterEquipSlot(props: Props) {
  if (props.characterSrc !== null) {
    const itemCategoryList: Array<WeaponType | ArtifactType> = [
      characterInfo[props.characterName].weapon as WeaponType,
      'Flower',
      'Feather',
      'HourGlass',
      'HolyGrail',
      'Crown'
    ];

    return (
      <Container>
        {itemCategoryList.map((cateogry: WeaponType | ArtifactType) => {
          return <EquipmentButton key={cateogry} category={cateogry} />;
        })}
      </Container>
    );
  } else {
    return null;
  }
}
