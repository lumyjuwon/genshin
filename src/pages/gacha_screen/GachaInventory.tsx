import React from 'react';
import styled from 'styled-components';

import { RoundImage } from 'src/components';
import { characterInfo } from 'src/resources/data';

interface Props {
  inventoryList: Array<string>;
}

interface Inventory {
  [key: string]: number;
}

const GridContainer = styled.div({
  display: "grid",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",
  gridTemplateColumns: "repeat(5, 100px)",
  gridTemplateRows: "repeat(autofit, 100px)",
  columnGap: "5px",
  rowGap: "5px",
});

const PositionAbsolute = styled.div({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  position: "absolute",
  top: "0",
  right: "0",
  borderRadius: "50%",
  backgroundColor: "#ff0000",
  width: "25px",
  height: "25px",
  boxShadow: "4px 4px 2px rgba(0,0,0,0.5)"
})

export function GachaInventory(props: Props){
  
  const arrayToObject = function(inventory: Array<string>): Inventory {
    let inventoryObject: Inventory = {};
  
    inventory.map((item: string) => {
      
      if(!inventoryObject.hasOwnProperty(item)) {
        inventoryObject[item] = 1;
      }
      else {
        inventoryObject[item] += 1;
      }
  
    });
  
    return inventoryObject;
  }

  const inventory = arrayToObject(props.inventoryList)
  const inventoryItems = Object.keys(inventory);
  const inventoryItemCounts = Object.values(inventory);

  return (
    <GridContainer>
      {inventoryItems.map((item: string, index: number) => {
        return (
          <div key={index} style={{position: "relative"}}>
            {characterInfo[item] ?
              <RoundImage
                src={require(`../../resources/images/characters/${item}.png`)}
              /> :
              <RoundImage
                src={require(`../../resources/images/items/weapons/${item}.png`)}
              />
            }
            <PositionAbsolute style={{display: "block", position:"absolute", top: "0", right: "0"}}>{inventoryItemCounts[index]}</PositionAbsolute>
          </div>
        );
      })}
    </GridContainer>
  );
}