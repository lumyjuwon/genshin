import React, { useState } from 'react';
import styled from 'styled-components';

import { artifactInfo, ArtifactType, characterInfo, weaponInfo, WeaponType } from 'src/resources/data';
import { ItemTypeImages, ItemImages } from 'src/resources/images';
import { GridWrapper, ItemBadgeBox, Modal, RoundImage, RoundImageButton, BoxModelWrapper } from 'src/components';
import { ImageSrc } from 'src/resources/images';

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
  const [equipmentName, setEquipmentName] = useState<string>('');
  const [equipmentSrc, setEquipmentSrc] = useState<ImageSrc>(undefined);
  const [isVisibleEquipmentModal, setIsVisibleEquipmentModal] = useState<boolean>(false);

  return (
    <BoxModelWrapper styles={{ margin: '0 0 0 12px', small: { margin: '0 0 3px 6px' } }}>
      <ItemBadgeBox
        tooltip={equipmentName}
        badge={
          <RoundImage
            src={equipmentSrc}
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
          <RoundImageButton
            src={ItemImages[equipmentName]}
            onClick={() => {
              setIsVisibleEquipmentModal(true);
            }}
            styles={{
              buttonStyles: {
                width: '100px',
                height: '100px',
                margin: '0px',
                medium: { width: '75px', height: '75px' },
                small: { width: '65px', height: '65px', margin: '3px' }
              },
              imageStyles: {
                width: '80px',
                height: '80px',
                small: { width: '55px', height: '55px' }
              }
            }}
          />
        }
        styles={{
          tooltipStyles: { bottom: '0' }
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
                <ItemBadgeBox
                  key={name}
                  tooltip={name}
                  rank={items[name].rank}
                  badge={
                    <RoundImage
                      src={ItemTypeImages[items[name].type]}
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
                    <RoundImageButton
                      src={ItemImages[name]}
                      onClick={() => {
                        setEquipmentSrc(ItemImages[name]);
                        setEquipmentName(name);
                      }}
                      styles={{
                        buttonStyles: {
                          backgroundColor: name === equipmentName ? '#f1f2f3' : 'transparent',
                          margin: '0px'
                        },
                        imageStyles: {
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
            }
            return null;
          })}
        </GridWrapper>
      </Modal>
    </BoxModelWrapper>
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
  characterSrc: ImageSrc;
  characterName: string;
}

export function CharacterEquipSlot(props: Props) {
  if (props.characterSrc !== undefined) {
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
