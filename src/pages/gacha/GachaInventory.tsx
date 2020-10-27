import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { FlexWrapper, RoundImage, TextCenterWrapper, CheckBoxButton } from 'src/components';
import { characterInfo, gachaInfo, weaponInfo } from 'src/resources/data';

interface Props {
  inventoryList: Array<string>;
}

const Title = styled.div({
  width: "fit-content",
  fontSize: "25px"
})

const ItemCount = styled.div({
  marginBottom: "10px"
})

const HoverDiv = styled.div({

})

const Icon = styled.div({
  transition: "0.2s",
  transform: "rotate(180deg)"
})

const DropDown = styled.ul({
  width: "120px",
  zIndex: 1,
  backgroundColor: "transparent",
  position: "absolute",
  borderRadius: "8px",
  top: "29px",
  left: "0",
  opacity: "0",
  visibility: "hidden",
  transition: "all 0.1s",
  boxShadow: "6px 6px 3px rgba(0,0,0,0.6)",
})

const StyledDiv = styled.div`
  width: 120px;
  height: 30px;
  border: 1px solid #f1f2f3;
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  &:hover {
    color: #212223;
    background-color: #f1f2f3;
  };
  &:hover ${Icon} {
    transform: rotate(0);
  };
  &:hover ${DropDown} {
    opacity: 1;
    visibility: visible;
  };
`

const List = styled.li({
  padding: "5px 10px",
  backgroundColor: "#f1f2f3",
  width: "100%",
  borderTop: "1px solid #212223",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#ccc",
  }
});

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
  fontSize: "14px"
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

const TextAlignRight = styled.div({
  textAlign: "right",
  marginBottom: "10px"
});

export function GachaInventory(props: Props){
  
  const [ isHide, setIsHide ] = useState<boolean>(false);
  const [ filter, setFilter ] = useState("Rarity");
 
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
  
  const filterList: Array<string> = ["Rarity", "Character", "Weapon", "PickUps"]

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


  const onFilterClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.currentTarget.textContent && setFilter(event.currentTarget.textContent);
  }

  return (
    <>
    <FlexWrapper styles={{justifyContent: "space-between", alignItems: "start"}}>
      <>
      <Title>Inventory</Title>
      <TextAlignRight style={{textAlign: "right"}}>
        <ItemCount>
          {`Total Items: ${totalItemCount}`}
        </ItemCount>
      </TextAlignRight>
      </>
    </FlexWrapper>
    <FlexWrapper styles={{justifyContent: "flex-end", margin: "0 0 40px"}}>
      <>
      <StyledDiv>
        <FlexWrapper styles={{justifyContent: "space-between"}}>
          <>
          <HoverDiv id="filter">
            {filter}
          </HoverDiv>
          <Icon>▲</Icon>
          </>
        </FlexWrapper>
        <DropDown>
          {filterList.map((content: string, i: number) => {
            return (
              <List
                key={i}
                onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => onFilterClick(event)}
              >
                {content}
              </List>
            );
          })}
        </DropDown>
      </StyledDiv>
      <CheckBoxButton onClick={() => onLabelClicked()} refProp={inputRef}>
        Hide 3-Stars Items
      </CheckBoxButton>
      </>
    </FlexWrapper>
    {!props.inventoryList.length ?
      <TextCenterWrapper styles={{width: "1200px", margin: "10px auto"}}>There is no item... Press button!</TextCenterWrapper>
      : null
    }
    <GridContainer>
        {inventoryItems.map((item: string, index: number) => {
          return (
            <Item key={index}>
              {characterInfo[item] ?
                <RoundImage
                  styles={{borderRadius: "16px"}}
                  src={require(`../../resources/images/characters/${item}.png`)}
                /> :
                <RoundImage
                  styles={{borderRadius: "16px"}}
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