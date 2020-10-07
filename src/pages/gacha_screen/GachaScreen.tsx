import React from "react";
import styled from "styled-components";

import { InnerDiv } from "src/components";
import { RoundImage } from "src/components";
import { RoundButton } from "src/components";
import { CenterAlignDiv } from 'src/components';

export function GachaScreen() {
  const Container = styled.div({});

  return (
    <Container>
      <InnerDiv>
        <RoundImage
          image={require("../../resources/characters/images/Amber.png")}
        />
        <CenterAlignDiv>
          <>
            <RoundButton>Reset</RoundButton>
            <RoundButton>10Times</RoundButton>
          </>
        </CenterAlignDiv>
      </InnerDiv>
    </Container>
  );
}
