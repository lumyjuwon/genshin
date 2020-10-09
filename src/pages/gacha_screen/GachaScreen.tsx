import React, { useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { GachaBanner } from "./GachaBanner";
import { GachaArrangeView } from './GachaArrangeView';
import wishesInfo from '../../resources/characters/wishesInfo.json'
import { ScreenInnerWrapper, RoundButton, TextCenterWrapper } from "src/components";

export function GachaScreen() {

  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFoutStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0); 

  const onResetClick: Function = function(): void {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFoutStarCount(0);
    setThreeStarCount(0);
  };

  const oneTimeClick: Function = function(): void {
    setGachaTimes(gachaTimes + 1);
  };

  const tenTimesClick: Function = function(): void {
    setGachaTimes(gachaTimes + 10);
  };

  const Container = styled.div({});

  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability: boolean = probability(0.6);
  const fourProbability: boolean = probability(5.7);

  const gachaResult = [];
  
  if (fiveProbability) {
    wishesInfo["5starCharacter"]
  } else if (fourProbability) {

  } else {

  }

  return (
    <Container>
      <ScreenInnerWrapper>
        <>
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
        </>
      </ScreenInnerWrapper>
    </Container>
  );
}
