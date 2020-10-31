import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper, RoundImage, TextCenterWrapper, CheckBoxButton, HoverDropDown, ItemBadgeBox } from 'src/components';
import { characterInfo, gachaInfo, weaponInfo } from 'src/resources/data';
import { GachaImages, GachaTypeImages } from 'src/resources/images';

const items = Object.assign({}, characterInfo, weaponInfo);

interface Props {
  inventoryList: Array<string>;
}

const Title = styled.div({
  width: 'fit-content',
  fontSize: '25px'
});

const ItemCount = styled.div({});

const GridContainer = styled.div({
  display: 'grid',
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(9, 120px)',
  gridTemplateRows: 'repeat(autofit, 100px)',
  columnGap: '10px',
  rowGap: '10px',
  '@media screen and (max-width: 1380px)': {
    gridTemplateColumns: 'repeat(6, 120px)',
    columnGap: '4px'
  },
  '@media screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(3, 90px)'
  }
});

const PositionAbsolute = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '-8px',
  right: '-8px',
  borderRadius: '50%',
  backgroundColor: '#ff0000',
  width: '25px',
  height: '25px',
  zIndex: 1,
  boxShadow: '4px 4px 2px rgba(0,0,0,0.5)'
});

const HoverVisibleElement = styled.div({
  visibility: 'hidden'
});

const Item = styled.div`
  position: relative;
  border: 2px solid #aaa;
  border-radius: 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 5px rgba(0, 0, 0, 0.77);
  }
  &:hover ${HoverVisibleElement} {
    visibility: visible;
  }
`;

const filterList: Array<string> = [
  trans(Lang.Filter_Rarity),
  trans(Lang.Filter_Character),
  trans(Lang.Filter_Weapon),
  trans(Lang.Filter_PickUp)
];

export function GachaInventory(props: Props) {
  const [isHide, setIsHide] = useState<boolean>(false);
  const [filter, setFilter] = useState(filterList[0]);

  const inputRef = useRef<HTMLInputElement>(null);

  const sortByStars = (gachaResult: Array<string>): Array<string> => {
    gachaResult.sort((item: string, nextItem: string): number => {
      if (characterInfo[item]) {
        if (characterInfo[nextItem]) {
          return characterInfo[nextItem].rank - characterInfo[item].rank;
        } else {
          return weaponInfo[nextItem].rank - characterInfo[item].rank;
        }
      } else {
        if (characterInfo[nextItem]) {
          return characterInfo[nextItem].rank - weaponInfo[item].rank;
        } else {
          return weaponInfo[nextItem].rank - weaponInfo[item].rank;
        }
      }
    });
    return gachaResult;
  };

  const arrayToMap = (sortedInventory: Array<string>): Map<string, number> => {
    let inventoryMap = new Map<string, number>();

    sortedInventory.map((item: string) => {
      if (!inventoryMap.has(item)) {
        inventoryMap.set(item, 0);
      }

      const count = (inventoryMap.get(item) as number) + 1;
      count && inventoryMap.set(item, count);
    });

    return inventoryMap;
  };

  let pickUpList: Array<string> = [];
  Object.keys(gachaInfo).forEach((content) => {
    pickUpList = pickUpList.concat(gachaInfo[content].fiveStars.pickUpItems);
    pickUpList = pickUpList.concat(gachaInfo[content].fourStars.pickUpItems);
  });

  const onLabelClicked = () => {
    inputRef.current && setIsHide(inputRef.current.checked);
  };

  const sortedGachaResult = sortByStars(props.inventoryList);
  const inventory = arrayToMap(sortedGachaResult);

  let inventoryItems: Array<string> = Array.from(inventory.keys());

  if (isHide) {
    inventoryItems = inventoryItems.filter((item: string) => {
      if (characterInfo[item]) {
        return characterInfo[item].rank > 3;
      } else {
        return weaponInfo[item].rank > 3;
      }
    });
  }

  if (filter === filterList[0]) {
  } else if (filter === filterList[1]) {
    inventoryItems = inventoryItems.filter((item: string) => characterInfo[item]);
  } else if (filter === filterList[2]) {
    inventoryItems = inventoryItems.filter((item: string) => weaponInfo[item]);
  } else {
    inventoryItems = inventoryItems.filter((item: string) => pickUpList.includes(item));
  }

  const totalItemCount = Array.from(inventory.values()).reduce((acc: number, count: number) => {
    return acc + count;
  }, 0);

  const onFilterClick = (index: number) => {
    setFilter(filterList[index]);
  };

  return (
    <>
      <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 10px' }}>
        <>
          <Title>{trans(Lang.Inventory)}</Title>
          <FlexWrapper
            styles={{
              justifyContent: 'flex-end'
            }}
          >
            <ItemCount>{`${trans(Lang.Item_Count)}: ${totalItemCount}`}</ItemCount>
          </FlexWrapper>
        </>
      </FlexWrapper>
      <FlexWrapper styles={{ justifyContent: 'flex-end', margin: '0 0 40px' }}>
        <>
          <HoverDropDown
            hoverList={filterList}
            onClick={onFilterClick}
            content={filter}
            styles={{
              containerStyles: { width: '110px', height: '30px', small: { fontSize: '14px' } },
              listStyles: { width: '110px', top: '29px', left: '-1px' }
            }}
          />
          <CheckBoxButton onClick={() => onLabelClicked()} refProp={inputRef} styles={{ labelStyles: { small: { fontSize: '14px' } } }}>
            {trans(Lang.Hide_Three_Star)}
          </CheckBoxButton>
        </>
      </FlexWrapper>
      {!props.inventoryList.length ? (
        <TextCenterWrapper
          styles={{
            width: '1300px',
            margin: '10px auto',
            medium: { width: '700px' },
            small: { width: '100%', fontSize: '16px' }
          }}
        >
          {trans(Lang.If_Inventory_Blank)}
        </TextCenterWrapper>
      ) : null}
      <GridContainer>
        {inventoryItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              <PositionAbsolute>{inventory.get(item)}</PositionAbsolute>
              <ItemBadgeBox
                src={GachaImages[item]}
                item={item}
                starVisible={true}
                styles={{
                  roundImageStyles: { borderRadius: '16px', small: { width: '80px', height: '80px ' } },
                  tooltipStyles: { fontSize: '14px', bottom: '0', small: { fontSize: '12px' } },
                  absoluteStyles: { top: '70px' }
                }}
              >
                <RoundImage src={GachaTypeImages[items[item].type || items[item].element]} styles={{ width: '30px', height: '30px' }} />
              </ItemBadgeBox>
            </Item>
          );
        })}
      </GridContainer>
    </>
  );
}
