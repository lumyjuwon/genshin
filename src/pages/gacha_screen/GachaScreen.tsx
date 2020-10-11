import React, { useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { GachaBanner } from "./GachaBanner";
import { GachaArrangeView } from './GachaArrangeView';
import { wishesInfo } from 'src/resources/data';
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper } from "src/components";

export function GachaScreen() {
  
  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0);
  const [ gachaResult, setGachaResult ] = useState({});
  
  const onResetClick = (): void => {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
  };
  
  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability: boolean = probability(0.6);
  const fourProbability: boolean = probability(5.7);
  
  // const fiveStarListLength: number = wishesInfo["5starCharacter"].length;
  // const fourStarListLength: number = wishesInfo["4starCharacter"].length;
  let pityFlag = false;
  
  const oneTimeGachaExecution = function(): void {
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
  
  const tenTimesGachaExecution = function() {
    if (gachaTimes % 90 >= 80) {
      pityFlag = true;
    }
    if (pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
    } else {

    }
    setGachaTimes(gachaTimes + 10);
  }

  // styled-component
  const Container = styled.div({});

  return (
    <Container>
      <ScreenInnerWrapper>
        <>
          <GachaBanner />
          <GachaArrangeView />
          <TextCenterWrapper>
            <>
              <RoundTextButton onClick={() => onResetClick()}>Reset</RoundTextButton>
              <RoundTextButton onClick={() => oneTimeGachaExecution()}>1 Time</RoundTextButton>
              <RoundTextButton onClick={() => tenTimesGachaExecution()}>10 Times</RoundTextButton>
            </>
          </TextCenterWrapper>
          <GachaResult times={gachaTimes} three={threeStarCount} four={fourStarCount} five={fiveStarCount} />
        </>
      </ScreenInnerWrapper>
    </Container>
  );
}
