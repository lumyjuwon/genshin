import React from "react";
import Styled from "styled-components";

import { FlexWrapper, SquareImage } from "src/components";

interface Props {}

export function GachaArrangeView(props: Props) {
  const GridContainer = Styled.div({
    backgroundColor: "#333",
    display: "grid",
    width: "1200px",
    height: "400px",
    gridTemplateColumns: "repeat(auto-fit, 110px)",
    columnGap: "10px",
    textAlign: "center",
  });

  return (
    <FlexWrapper>
      <GridContainer>

        {/* need to modify to map() */}
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        <FlexWrapper styles={{flexDirection: "column"}}>
          <SquareImage
            src={require("../../resources/characters/images/Venti.png")}
          />
        </FlexWrapper>
        
      </GridContainer>
    </FlexWrapper>
  );
}
