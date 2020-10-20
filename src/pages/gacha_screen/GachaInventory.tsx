import React from 'react';
import styled from 'styled-components';

interface Props {
  inventoryList: Array<string>;
}

interface Inventory {
  [key: string]: number;
}

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
    <div>
      {inventoryItems.map((item: string, index: number) => {
        return (
          <>
            <p>{item}</p>
            <p>{inventoryItemCounts[index]}</p>
          </>
        );
      })}
    </div>
  );
}