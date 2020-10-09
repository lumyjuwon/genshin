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
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0); 

  const onResetClick: Function = function(): void {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
  };

  const oneTimeClick: Function = function(): void {
    gachaExecution();
  };

  const tenTimesClick: Function = function(): void {
    for(let i = 0; i < 10; i++) {
      gachaExecution();
    }
  };

  const Container = styled.div({});

  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability: boolean = probability(0.6);
  const fourProbability: boolean = probability(5.7);

  const gachaResult = {};
  const fiveStarListLength: number = wishesInfo["5starCharacter"].length;
  const fourStarListLength: number = wishesInfo["4starCharacter"].length;
  
  const gachaExecution: Function = function(): void {
    let pityFlag = false;
    if (gachaTimes % 90 === 89) {
      pityFlag = true;
    }
    if(pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
    } else {
      if (fiveProbability) {
        setFiveStarCount(fiveStarCount + 1);
      } else if (fourProbability) {
        setFourStarCount(fourStarCount + 1);
      } else {

      }
    }
    setGachaTimes(gachaTimes + 1);
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
