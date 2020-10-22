import React from 'react';
import styled from 'styled-components';

import { RoundImage, TextCenterWrapper } from 'src/components';
import { characterInfo, weaponInfo } from 'src/resources/data';

interface Props {
  inventoryList: Array<string>;
}

interface Inventory {
  [key: string]: number;
}

const Title = styled.div({
  width: "fit-content",
  fontSize: "20px",
  marginBottom: "30px"
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

export function GachaInventory(props: Props){

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

  const arrayToObject = (sortedInventory: Array<string>): Inventory => {
    let inventoryObject: Inventory = {};
  
    sortedInventory.map((item: string) => {
      
      if(!inventoryObject.hasOwnProperty(item)) {
        inventoryObject[item] = 1;
      }
      else {
        inventoryObject[item] += 1;
      }
  
    });
    
    return inventoryObject;
  }

  const sortedGachaResult = sortByStars(props.inventoryList);
  const inventory = arrayToObject(sortedGachaResult);
  const inventoryItems = Object.keys(inventory);
  const inventoryItemCounts = Object.values(inventory);

  const itemRank = inventoryItems.map((item: string) => {
    if (characterInfo[item]) {
      return characterInfo[item].rank;

    } else {
      return weaponInfo[item].rank;
    }
  });

  return (
    <>
      <Title>Inventory</Title>
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
                    src={require(`../../resources/images/characters/${item}.png`)}
                  /> :
                  <RoundImage
                    src={require(`../../resources/images/items/weapons/${item}.png`)}
                  />
                }
                <ItemTooltip>{item}</ItemTooltip>
                <PositionAbsolute>{inventoryItemCounts[index]}</PositionAbsolute>
                <StarEmoji role="img">{"⭐".repeat(itemRank[index])}</StarEmoji>
              </Item>
            );
          })}
      </GridContainer>
    </>
  );
}