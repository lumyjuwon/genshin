import React from "react";
import styled from "styled-components";

import { ScreenInnerWrapper } from "src/components";
import { RoundImage } from "src/components";
import { RoundButton } from "src/components";
import { TextCenterWrapper } from 'src/components';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaResult } from "./GachaResult";

export function GachaScreen() {
  const Container = styled.div({});

  return (
    <Container>
      <ScreenInnerWrapper>
        <GachaArrangeView />
        <TextCenterWrapper>
          <>
            <RoundButton>Reset</RoundButton>
            <RoundButton>10Times</RoundButton>
          </>
        </TextCenterWrapper>
        <GachaResult />
      </ScreenInnerWrapper>
    </Container>
  );
}
