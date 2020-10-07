import React from "react";
import Styled from "styled-components";

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    maxWidth: "980px",
    margin: "30px auto",
    padding: "20px 50px",
  });

  return (
    <GridContainer>
      Gacha Grid
    </GridContainer>
  );
}
