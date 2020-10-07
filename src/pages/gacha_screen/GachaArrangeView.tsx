import React from "react";
import Styled from "styled-components";

import { FlexCenterWrapper } from 'src/components';

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    height: "400px",
    padding: "25px 50px",
    gridTemplateColumns: "repeat(5, 150px)",
    columnGap: "10px",
    rowGap: "20px",
    textAlign: "center"
  });

  return (
    <FlexCenterWrapper>
      <GridContainer>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </GridContainer>
    </FlexCenterWrapper>
  );
}
