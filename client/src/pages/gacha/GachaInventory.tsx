import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';
import {
  FlexWrapper,
  RoundImage,
  TextCenterWrapper,
  CheckBoxButton,
  ItemBadgeBox,
  DropDownButton,
  SquareImage,
  RoundTextButton,
  CSSGridWrapper
} from 'src/components';
import { characterInfo, gachaInfo, weaponInfo } from 'src/resources/data';
import { GachaImages } from 'src/resources/images';
import { gachaDispatch } from 'src/redux/gacha/dispatch';
import { Ripple } from 'src/components/effect';

const items = Object.assign({}, characterInfo, weaponInfo);

type Inventory = Map<string, number>;

interface Props {
  inventoryList: Array<string>;
  four: number;
  five: number;
  showVideo: boolean;
  usedGem: number;
  blankView: Function;
}

const Title = styled.div({
  width: 'fit-content',
  fontSize: '25px',
  '@media screen and (max-width: 768px)': {
    width: '100%',
    fontSize: '20px'
  }
});

const ItemCount = styled.div({
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
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
  boxShadow: '4px 4px 2px rgba(0,0,0,0.5)',
  '@media screen and (max-width: 768px)': {
    width: '20px',
    height: '20px',
    fontSize: '12px'
  }
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

const Result = styled.div({
  margin: '0 5px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

enum Filter {
  Rarity = 'Filter_Rarity',
  Character = 'Filter_Character',
  Weapon = 'Filter_Weapon',
  PickUps = 'Filter_PickUp'
}

type FilterKey = keyof typeof Filter;
const filterList = Object.values(Filter);

export function GachaInventory(props: Props) {
  const [isHideThree, setIsHideThree] = useState<boolean>(false);
  const [filter, setFilter] = useState(filterList[0]);
  const inputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const transFilterList = filterList.map((filter) => trans(Lang[filter]));
  const inventory = createInventory(props.inventoryList);
  const inventoryItems: Array<string> = getFilteredInventory(Array.from(inventory.keys()), isHideThree, filter);

  const totalItemCount = Array.from(inventory.values()).reduce((acc: number, count: number) => {
    return acc + count;
  }, 0);

  const onLabelClicked = () => {
    inputRef.current && setIsHideThree(inputRef.current.checked);
  };

  function onResetClick() {
    gachaDispatch.ClearGacha();
    props.blankView();
  }

  const onFilterClick = (index: number) => {
    setFilter(filterList[index]);
  };

  return (
    <>
      <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 10px' }}>
        <>
          <Title>{trans(Lang.Inventory)}</Title>
          {props.showVideo ? (
            <RoundTextButton
              styles={{
                buttonStyles: { display: 'inline-block', backgroundColor: '#cc0000', padding: '5px 10px', pointerEvents: 'none' },
                textStyles: { fontSize: '20px', small: { fontSize: '16px' } }
              }}
              onClick={() => {}}
            >
              <>
                <i className="far fa-trash-alt"></i>
                <Ripple />
              </>
            </RoundTextButton>
          ) : (
            <RoundTextButton
              styles={{
                buttonStyles: { display: 'inline-block', backgroundColor: '#cc0000', padding: '5px 10px' },
                textStyles: { fontSize: '20px', small: { fontSize: '16px' } }
              }}
              onClick={() => onResetClick()}
            >
              <>
                <i className="far fa-trash-alt"></i>
                <Ripple />
              </>
            </RoundTextButton>
          )}
        </>
      </FlexWrapper>
      <FlexWrapper
        styles={{
          width: '100%',
          margin: '10px 0',
          padding: '0 10px',
          flexDirection: 'column',
          alignItems: 'flex-end'
        }}
      >
        <FlexWrapper>
          <ItemCount>{`${trans(Lang.Item_Count)}: ${totalItemCount}`}</ItemCount>
          <FlexWrapper styles={{ margin: '0 5px 0 10px' }}>
            <SquareImage src={require('../../resources/images/items/gem/Primogem.webp')} styles={{ width: '20px', height: '20px' }} />
            <ItemCount>: {props.usedGem}</ItemCount>
          </FlexWrapper>
        </FlexWrapper>
        <FlexWrapper styles={{ margin: '10px 0 0' }}>
          <Result>5★: {props.five}</Result>
          <Result>4★: {props.four}</Result>
        </FlexWrapper>
      </FlexWrapper>
      <FlexWrapper styles={{ justifyContent: 'flex-end', margin: '0 0 40px' }}>
        <>
          <DropDownButton
            ref={filterRef}
            id="filter"
            items={transFilterList}
            onClick={onFilterClick}
            content={trans(Lang[filter])}
            styles={{
              containerStyles: { width: '110px', height: '32px', small: { fontSize: '14px' } },
              listStyles: { width: '110px', top: '31px', right: '-1px' }
            }}
            defaultValue={trans(Lang[filter])}
          />
          <CheckBoxButton onClick={() => onLabelClicked()} ref={inputRef} styles={{ labelStyles: { small: { fontSize: '14px' } } }}>
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
      <CSSGridWrapper
        styles={{
          gridTemplateColumns: 'repeat(auto-fit, 120px)',
          rowGap: '15px',
          medium: { gridTemplateColumns: 'repeat(auto-fit, 120px)', rowGap: '15px' },
          small: { gridTemplateColumns: 'repeat(auto-fit, 80px)', rowGap: '15px' }
        }}
      >
        {inventoryItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              <ItemBadgeBox
                badge={<Badge>{inventory.get(item)}</Badge>}
                child={<RoundImage styles={{ small: { width: '70px', height: '70px' } }} src={GachaImages[item]} />}
                rank={items[item].rank}
                tooltip={item}
                styles={{
                  tooltipStyles: { fontSize: '14px', bottom: '0', small: { fontSize: '12px' } },
                  badgePosition: { top: '-13px', right: '6px' }
                }}
              />
            </Item>
          );
        })}
      </CSSGridWrapper>
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
