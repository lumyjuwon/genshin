import React from "react";
import { RoundImage } from "src/components/image/RoundImage";
import styled from "styled-components";

export function GachaScreen() {
  const Container = styled.div({});

  return (
    <Container>
      <RoundImage
        image={require("../../resources/characters/images/Amber.png")}
      />
    </Container>
  );
}
