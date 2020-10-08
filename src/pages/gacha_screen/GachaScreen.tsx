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

  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFoutStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0); 

  const onResetClick = function(): void {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFoutStarCount(0);
    setThreeStarCount(0);
  };

  const oneTimeClick = function(): void {
    setGachaTimes(gachaTimes + 1);
  };

  const tenTimesClick = function(): void {
    setGachaTimes(gachaTimes + 10);
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
        <GachaResult times={gachaTimes} three={threeStarCount} four={fourStarCount} five={fiveStarCount} />
      </ScreenInnerWrapper>
    </Container>
  );
}
