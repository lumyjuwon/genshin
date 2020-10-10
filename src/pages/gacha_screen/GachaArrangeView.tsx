import React from "react";
import Styled from "styled-components";

import { FlexCenterWrapper, SquareImage } from "src/components";

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    width: "1200px",
    height: "400px",
    gridTemplateColumns: "repeat(10, 110px)",
    columnGap: "10px",
    textAlign: "center",
  });

  return (
    <FlexCenterWrapper>
      <GridContainer>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
        <FlexCenterWrapper direction="column">
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexCenterWrapper>
      </GridContainer>
    </FlexCenterWrapper>
  );
}
