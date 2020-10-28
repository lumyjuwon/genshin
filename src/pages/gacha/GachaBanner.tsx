import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, HoverDropDown } from 'src/components';
import { GachaDetails } from './GachaDetails';

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
}

export function GachaBanner(props: Props) {

  return (
    <FlexWrapper styles={{justifyContent: "space-between"}}>
      <>
      <HoverDropDown
        hoverList={props.pickUpList}
        styles={{
          containerStyles: { width: "300px", height: "40px", fontSize: "20px", small: {width: "220px", fontSize: "16px", height: "35px"} },
          listStyles: {width: "300px", top: "39px", left: "-1px", small: {width: "220px", top: "34px"}}
        }}
        onClick={props.onClick}
        content={props.content}
      />
      <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  )
}