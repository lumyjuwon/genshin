import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { FlexWrapper, RoundImage, TextCenterWrapper, CheckBoxButton, HoverDropDown } from 'src/components';
import { characterInfo, gachaInfo, weaponInfo } from 'src/resources/data';

interface Props {
  inventoryList: Array<string>;
}

const Title = styled.div({
  width: "fit-content",
  fontSize: "25px"
})

const ItemCount = styled.div({
  
})

const GridContainer = styled.div({
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",
  gridTemplateColumns: "repeat(10, 100px)",
  gridTemplateRows: "repeat(autofit, 100px)",
  columnGap: "10px",
  rowGap: "10px",
  "@media screen and (max-width: 1380px)": {
    gridTemplateColumns: "repeat(6, 100px)",
  },
  "@media screen and (max-width: 768px)": {
    gridTemplateColumns: "repeat(3, 80px)",
  }
});

const PositionAbsolute = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "-8px",
  right: "-8px",
  borderRadius: "50%",
  backgroundColor: "#ff0000",
  width: "25px",
  height: "25px",
  boxShadow: "4px 4px 2px rgba(0,0,0,0.5)"
})

const StarEmoji = styled.span({
  marginLeft: "-5px",
  display: "inline-block",
  letterSpacing: "-10px",
  width: "100%",
  textAlign: "center",
})

const ItemTooltip = styled.div({
  visibility: "hidden",
  width: "100%",
  position: "absolute",
  bottom: "16px",
  left: "0",
  backgroundColor: "#000",
  textAlign: "center",
  borderRadius: "8px",
  opacity: "0.8",
  fontSize: "14px",
  "@media screen and (max-width: 768px)": {
    fontSize: "12px"
  }
});

const Item = styled.div`
  position: relative;
  border: 2px solid #aaa;
  border-radius: 16px;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 5px rgba(0,0,0,0.77);
  }
  &:hover ${ItemTooltip} {
    visibility: visible;
  }  
`;

const filterList: Array<string> = ["Rarity", "Character", "Weapon", "PickUps"]

export function GachaInventory(props: Props){
  
  const [ isHide, setIsHide ] = useState<boolean>(false);
  const [ filter, setFilter ] = useState(filterList[0]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  
  const sortByStars = (gachaResult: Array<string>): Array<string> => {
    gachaResult.sort((item: string, nextItem: string): number => {
      if(characterInfo[item]) {
        
        if(characterInfo[nextItem]) {
          return characterInfo[nextItem].rank - characterInfo[item].rank;
        }
        else {
          return weaponInfo[nextItem].rank - characterInfo[item].rank;
        }
        
      }
      else {
        
        if(characterInfo[nextItem]){
          return characterInfo[nextItem].rank - weaponInfo[item].rank;
        }
        else {
          return weaponInfo[nextItem].rank - weaponInfo[item].rank;
        }

      }
    });
    return gachaResult;
  }

  const arrayToMap = (sortedInventory: Array<string>): Map<string, number> => {
    let inventoryMap = new Map<string, number>();
  
    sortedInventory.map((item: string) => {
      
      if(!inventoryMap.has(item)) {
        inventoryMap.set(item, 0);
      }
      
      const count = inventoryMap.get(item) as number + 1;
      count && inventoryMap.set(item, count);
    });
    
    return inventoryMap;
  }

  let pickUpList: Array<string> = [];
  Object.keys(gachaInfo).forEach(content => {
    pickUpList = pickUpList.concat(gachaInfo[content].fiveStars.pickUpItems);
    pickUpList = pickUpList.concat(gachaInfo[content].fourStars.pickUpItems);
  })

  const onLabelClicked = () => {
    inputRef.current && setIsHide(inputRef.current.checked);
  }

  const sortedGachaResult = sortByStars(props.inventoryList);
  const inventory = arrayToMap(sortedGachaResult);
  
  let inventoryItems: Array<string> = Array.from(inventory.keys());
  
  if(isHide) {
    inventoryItems = inventoryItems.filter((item: string) => {
      if (characterInfo[item]) {
        return characterInfo[item].rank > 3;
  
      } else {
        return weaponInfo[item].rank > 3;
      }
    });
  };
  

  if(filter === filterList[0]) {
    
  }
  else if(filter === filterList[1]) {
    inventoryItems = inventoryItems.filter((item: string) => characterInfo[item]);
  }
  else if(filter === filterList[2]) {
    inventoryItems = inventoryItems.filter((item: string) => weaponInfo[item]);
  }
  else {
    inventoryItems = inventoryItems.filter((item: string) => pickUpList.includes(item))
  }

  const itemRank = inventoryItems.map((item: string) => {
    if (characterInfo[item]) {
      return characterInfo[item].rank;

    } else {
      return weaponInfo[item].rank;
    }
  });

  const totalItemCount = Array.from(inventory.values()).reduce(
    (acc: number, count: number) => {
      return acc + count;
    }
  , 0);


  const onFilterClick = (content: string) => {
    setFilter(content);
    console.log(filter);
  }

  return (
    <>
    <FlexWrapper styles={{justifyContent: "space-between", margin: "0 0 10px"}}>
      <>
      <Title>Inventory</Title>
      <FlexWrapper styles={{
        justifyContent: "flex-end"
      }}>
        <ItemCount>
          {`Total Items: ${totalItemCount}`}
        </ItemCount>
      </FlexWrapper>
      </>
    </FlexWrapper>
    <FlexWrapper styles={{justifyContent: "flex-end", margin: "0 0 40px"}}>
      <>
      <HoverDropDown 
        hoverList={filterList}
        onClick={onFilterClick}
        content={filter}
        styles={{
          containerStyles: {width: "110px", height: "30px", small: {fontSize: "14px"}},
          listStyles: {width: "110px", top: "29px", left: "-1px"}
        }}
      />
      <CheckBoxButton
        onClick={() => onLabelClicked()}
        refProp={inputRef}
        styles={{labelStyles: {small: {fontSize: "14px"}}}}
      >
        Hide 3-Stars Items
      </CheckBoxButton>
      </>
    </FlexWrapper>
    {!props.inventoryList.length ?
      <TextCenterWrapper styles={{
        width: "1300px", margin: "10px auto",
        medium: {width: "700px"},
        small: {width: "100%", fontSize: "16px"}
      }}>
        There is no item... Press button!
      </TextCenterWrapper>
      : null
    }
    <GridContainer>
        {inventoryItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              {characterInfo[item] ?
                <RoundImage
                  styles={{borderRadius: "16px", small: {width: "80px", height: "80px"}}}
                  src={require(`../../resources/images/characters/${item}.png`)}
                /> :
                <RoundImage
                  styles={{borderRadius: "16px", small: {width: "80px", height: "80px"}}}
                  src={require(`../../resources/images/items/weapons/${item}.png`)}
                />
              }
              <ItemTooltip>{item}</ItemTooltip>
              <PositionAbsolute>{inventory.get(item)}</PositionAbsolute>
              <StarEmoji role="img">{"⭐".repeat(itemRank[index])}</StarEmoji>
            </Item>
          );
        })}
    </GridContainer>
    </>
  );
}