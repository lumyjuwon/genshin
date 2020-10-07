import React from "react";
import Styled from "styled-components";

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    maxWidth: "980px",
    height: "400px",
    margin: "30px auto",
    padding: "20px 50px",
    gridTemplateColumns: "repeat(5, 100px)",
    columnGap: "10px",
    rowGap: "20px"
  });

  return (
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
  );
}
