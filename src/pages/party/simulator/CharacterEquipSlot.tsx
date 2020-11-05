import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { artifactInfo, ArtifactType, characterInfo, weaponInfo, WeaponType, WeaponName, ArtifactName } from 'src/resources/data';
import { GridWrapper, ItemBadgeBox, Modal, RoundImage, BoxModelWrapper, RoundImageBox } from 'src/components';
import { ImageSrc, CategoryImages, ItemImages } from 'src/resources/images';

interface Items {
  [name: string]: {
    rank: number;
    type: WeaponType;
  };
}

type ItemName = WeaponName | ArtifactName;
type ArtifactCount = number;
type ArtifactSetName = string;
type Category = 'Bow' | 'Catalyst' | 'Claymore' | 'Polearm' | 'Sword' | 'Flower' | 'Feather' | 'HourGlass' | 'HolyGrail' | 'Crown';

interface EquipmentButtonProps {
  category: string;
  onClick: Function;
}

const items: Items = Object.assign({}, weaponInfo, artifactInfo);
const selectedItems = new Map<Category, ItemName>(new Map());

const EquipmentButton = (props: EquipmentButtonProps) => {
  let activeArtifacts = new Map<ArtifactName, ArtifactCount>(new Map());
  const [equipmentName, setEquipmentName] = useState<string>('');
  const [isVisibleEquipmentModal, setIsVisibleEquipmentModal] = useState<boolean>(false);

  function setSelectedItems(category: Category, name: ItemName) {
    selectedItems.set(category, name);
  }

  function getArtifactMap(selected: Map<Category, ItemName>) {
    let artifactMap: Map<Category, ItemName> = new Map(selected);
    artifactMap.has('Bow') && artifactMap.delete('Bow');
    artifactMap.has('Catalyst') && artifactMap.delete('Catalyst');
    artifactMap.has('Claymore') && artifactMap.delete('Claymore');
    artifactMap.has('Polearm') && artifactMap.delete('Polearm');
    artifactMap.has('Sword') && artifactMap.delete('Sword');

    return artifactMap;
  }

  function setActiveArtifacts(artifacts: Map<Category, ItemName>) {
    const activeArtifs: Map<ArtifactSetName, ArtifactCount> = new Map();

    artifacts.forEach((name: string, category: string) => {
      if (activeArtifs.has(artifactInfo[name].set)) {
        //@ts-ignore Check Has
        activeArtifs.set(artifactInfo[name].set, activeArtifs.get(artifactInfo[name].set) + 1);
      } else {
        activeArtifs.set(artifactInfo[name].set, 1);
      }
    });
    activeArtifacts = activeArtifs;
  }

  return (
    <BoxModelWrapper styles={{ margin: '0 0 0 6px', small: { margin: '0 0 3px 3px' } }}>
      <ItemBadgeBox
        tooltip={selectedItems.get(props.category as Category)}
        rank={items[equipmentName] !== undefined ? items[equipmentName].rank : undefined}
        hoverInnerColor={'#f1f2f3'}
        onClick={() => {
          setIsVisibleEquipmentModal(true);
        }}
        badge={
          <RoundImage
            src={CategoryImages[props.category]}
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
          {Object.keys(items).map((name: string) => {
            if (items[name] && items[name].type === props.category) {
              return (
                <ItemBadgeBox
                  key={name}
                  tooltip={name}
                  rank={items[name].rank}
                  hoverInnerColor={'#f1f2f3'}
                  onClick={() => {
                    setEquipmentName(name);
                    setSelectedItems(props.category as Category, name);
                    console.log('selected', selectedItems);
                    setActiveArtifacts(getArtifactMap(selectedItems));
                    console.log('after selected', selectedItems);
                    console.log('active', activeArtifacts);
                    props.onClick(activeArtifacts);
                  }}
                  badge={
                    <RoundImage
                      src={CategoryImages[items[name].type]}
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
  onClick: Function;
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
          return <EquipmentButton onClick={props.onClick} key={cateogry} category={cateogry} />;
        })}
      </Container>
    );
  } else {
    return null;
  }
}
