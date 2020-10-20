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
          <div>
            {characterInfo[item] ?
              <RoundImage
                src={require(`../../resources/images/characters/${item}.png`)}
              /> :
              <RoundImage
                src={require(`../../resources/images/items/weapons/${item}.png`)}
              />
            }
            <p>{inventoryItemCounts[index]}</p>
          </div>
        );
      })}
    </GridContainer>
  );
}