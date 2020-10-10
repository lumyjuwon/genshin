import React from 'react';
import styled from 'styled-components';

import { SelectOptions } from 'src/components';
import { wishesInfo } from 'src/resources/data';

export function GachaBanner() {
  
  console.log(wishesInfo)

  return (
    <SelectOptions id="pickup" desc="Choose PickUp" options={wishesInfo.pickupContents} />
  );
}