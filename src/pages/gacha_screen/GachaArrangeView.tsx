import React from "react";
import Styled from "styled-components";

import { FlexCenterWrapper, RoundImage } from 'src/components';

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    height: "fit-content",
    padding: "25px 50px",
    gridTemplateColumns: "repeat(5, 150px)",
    columnGap: "10px",
    rowGap: "20px",
    textAlign: "center"
  });

  return (
    <FlexCenterWrapper>
      <GridContainer>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
        <FlexCenterWrapper>
          <RoundImage image={require("../../resources/characters/images/Venti.png")} />
        </FlexCenterWrapper>
      </GridContainer>
    </FlexCenterWrapper>
  );
}
