import React from "react";
import styled from "styled-components";

import { InnerDiv } from "src/components";
import { RoundImage } from "src/components";
import { RoundButton } from "src/components";
import { CenterAlignDiv } from 'src/components';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaResult } from "./GachaResult";

export function GachaScreen() {
  const Container = styled.div({});

  return (
    <Container>
      <InnerDiv>
        <GachaArrangeView />
        <CenterAlignDiv>
          <>
            <RoundButton>Reset</RoundButton>
            <RoundButton>10Times</RoundButton>
          </>
        </CenterAlignDiv>
        <GachaResult />
      </InnerDiv>
    </Container>
  );
}
