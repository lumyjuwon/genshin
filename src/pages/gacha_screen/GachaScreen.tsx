import React, { useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { wishesInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
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
  let pityFlag: boolean = false;
  let getFiveStar: boolean = false;
  let getPickUp: boolean = false;
  
  const oneTimeGachaExecution = function(): void {
    // let result: any = {};

    if (gachaTimes % 90 === 89 && !getFiveStar && !getPickUp) {
      pityFlag = true;
    }

    if(pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
      pityFlag = false;
      getFiveStar = false;
    } else {
      if (fiveProbability) {
        // 픽업이 뽑히면.,..
        // if (winPickUp) {
        //   getPickUp = true;
        // } else {
          
        //   getFiveStar = true;
        // }
        setFiveStarCount(fiveStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      } else if (fourProbability) {
        setFourStarCount(fourStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      } else {
        setThreeStarCount(threeStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      }
    }

    setGachaTimes(gachaTimes + 1);
  }
  
  const tenTimesGachaExecution = function(): void {
    if (gachaTimes % 90 === 89 && !getFiveStar && !getPickUp) {
      pityFlag = true;
    }

    if (pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
      pityFlag = false;
      getFiveStar = false;
    } else {

      if (fiveProbability) {
        // 픽업이 뽑히면...
        // if (winPickUp) {
        //   getPickUp = true;
        // } else {
        //   getFiveStar = true;
        // }
        setFiveStarCount(fiveStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      
      // 4성은 100% 1개 나옴...
      } else if (fourProbability) {
        setFourStarCount(fourStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      } else {
        setThreeStarCount(threeStarCount + 1);
        // setGachaResult({ ...gachaResult, ...result})
      }
    }

    setGachaTimes(gachaTimes + 10);
  }

  // styled-component
  const Container = styled.div({});

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner contents={wishesInfo.pickupContents}/>
          <div style={{clear: "both"}}></div>
          <GachaArrangeView result={["Venti", "Mona", "Keqing", "Fischl", "Diluc", "Amber", "Barbara", "Qiqi", "Jean", "Kaeya"]} />
          <TextCenterWrapper>
            <div style={{margin: "20px"}}>
              <RoundTextButton onClick={() => onResetClick()}>Reset</RoundTextButton>
              <RoundTextButton onClick={() => oneTimeGachaExecution()}>1 Time</RoundTextButton>
              <RoundTextButton onClick={() => tenTimesGachaExecution()}>10 Times</RoundTextButton>
            </div>
          </TextCenterWrapper>
          <GachaResult times={gachaTimes} three={threeStarCount} four={fourStarCount} five={fiveStarCount} />
        </div>
      </ScreenInnerWrapper>
    </Container>
  );
}
