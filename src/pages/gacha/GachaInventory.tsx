import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper, RoundImage, TextCenterWrapper, CheckBoxButton, ItemBadgeBox, DropDownButton } from 'src/components';
import { characterInfo, gachaInfo, weaponInfo } from 'src/resources/data';
import { GachaImages } from 'src/resources/images';

const items = Object.assign({}, characterInfo, weaponInfo);

type Inventory = Map<string, number>;

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

const Badge = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
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

enum Filter {
  Rarity = 'Filter_Rarity',
  Character = 'Filter_Character',
  Weapon = 'Filter_Weapon',
  PickUps = 'Filter_PickUp'
}

type FilterKey = keyof typeof Filter;
const filterList = Object.values(Filter);

export function GachaInventory(props: Props) {
  const transFilterList = filterList.map((filter) => trans(Lang[filter]));
  const [isHideThree, setIsHideThree] = useState<boolean>(false);
  const [filter, setFilter] = useState(filterList[0]);

  const inputRef = useRef<HTMLInputElement>(null);
  const inventory = createInventory(props.inventoryList);
  let inventoryItems: Array<string> = Array.from(inventory.keys());

  const onLabelClicked = () => {
    inputRef.current && setIsHideThree(inputRef.current.checked);
  };

  inventoryItems = getFilteredInventory(inventoryItems, isHideThree, filter);

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
          <DropDownButton
            id="filter"
            items={transFilterList}
            onClick={onFilterClick}
            content={trans(Lang[filter])}
            styles={{
              containerStyles: { width: '110px', height: '32px', small: { fontSize: '14px' } },
              listStyles: { width: '110px', top: '31px', right: '-1px' }
            }}
            defaultValue={trans(Lang.Filter_Rarity)}
          />
          <CheckBoxButton onClick={() => onLabelClicked()} refProp={inputRef} styles={{ labelStyles: { small: { fontSize: '14px' } } }}>
            {trans(Lang.Hide_Three_Star)}
          </CheckBoxButton>
        </>
      </FlexWrapper>
      {!props.inventoryList.length && (
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
      )}
      <GridContainer>
        {inventoryItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              <ItemBadgeBox
                badge={<Badge>{inventory.get(item)}</Badge>}
                child={<RoundImage styles={{ small: { width: '80px', height: '80px' } }} src={GachaImages[item]} />}
                rank={items[item].rank}
                tooltip={item}
                styles={{
                  tooltipStyles: { fontSize: '14px', bottom: '0', small: { fontSize: '12px' } },
                  badgePosition: { top: '-16px', right: '8px' }
                }}
              />
            </Item>
          );
        })}
      </GridContainer>
    </>
  );
}

export function createInventory(gachaAccResult: Array<string>): Inventory {
  const sortByStars = (gachaResult: Array<string>): Array<string> => {
    gachaResult.sort((item: string, nextItem: string): number => {
      return items[nextItem].rank - items[item].rank;
    });
    return gachaResult;
  };

  const setItemCounts = (inven: Inventory, item: string) => {
    if (!inven.has(item)) {
      inven.set(item, 0);
    }

    const count = (inven.get(item) as number) + 1;
    count && inven.set(item, count);
  };

  const arrayToMap = (sortedInventory: Array<string>): Inventory => {
    let inventoryMap = new Map<string, number>();

    sortedInventory.map((item: string) => setItemCounts(inventoryMap, item));

    return inventoryMap;
  };

  return arrayToMap(sortByStars(gachaAccResult));
}

export function getFilteredInventory(items: Array<string>, isHide: boolean, criteria: string) {
  let pickUpList: Array<string> = [];
  Object.keys(gachaInfo).forEach((content) => {
    pickUpList = pickUpList.concat(gachaInfo[content].fiveStars.pickUpItems);
    pickUpList = pickUpList.concat(gachaInfo[content].fourStars.pickUpItems);
  });

  if (isHide) {
    items = items.filter((item: string) => {
      if (characterInfo[item]) {
        return characterInfo[item].rank > 3;
      } else {
        return weaponInfo[item].rank > 3;
      }
    });
  }

  if (criteria === filterList[0]) {
  } else if (criteria === filterList[1]) {
    items = items.filter((item: string) => characterInfo[item]);
  } else if (criteria === filterList[2]) {
    items = items.filter((item: string) => weaponInfo[item]);
  } else {
    items = items.filter((item: string) => pickUpList.includes(item));
  }

  return items;
}
