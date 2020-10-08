import React, { useState } from "react";
import styled from "styled-components";

import { ScreenInnerWrapper } from "src/components";
import { RoundImage } from "src/components";
import { RoundButton } from "src/components";
import { TextCenterWrapper } from 'src/components';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaResult } from "./GachaResult";
import { GachaBanner } from "./GachaBanner";

export function GachaScreen() {

  const [ gachaCount, setGachaCount ] = useState(0);

  const onResetClick = function(): void {
    setGachaCount(0);
  };

  const oneTimeClick = function(): void {
    setGachaCount(gachaCount + 1);
  };

  const tenTimesClick = function(): void {
    setGachaCount(gachaCount + 10);
  };

  const Container = styled.div({});

  return (
    <Container>
      <ScreenInnerWrapper>
        <GachaBanner />
        <GachaArrangeView />
        <TextCenterWrapper>
          <>
            <RoundButton onClick={onResetClick}>Reset</RoundButton>
            <RoundButton onClick={oneTimeClick}>1 Time</RoundButton>
            <RoundButton onClick={tenTimesClick}>10 Times</RoundButton>
          </>
        </TextCenterWrapper>
        <GachaResult times={gachaCount} />
      </ScreenInnerWrapper>
    </Container>
  );
}
