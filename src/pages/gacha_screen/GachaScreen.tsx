import React from "react";
import styled from "styled-components";

import { InnerDiv } from "src/components";
import { RoundImage } from "src/components/image/RoundImage";

export function GachaScreen() {
  const Container = styled.div({});

  return (
    <Container>
      <InnerDiv>
        <RoundImage
          image={require("../../resources/characters/images/Amber.png")}
        />
      </InnerDiv>
    </Container>
  );
}
