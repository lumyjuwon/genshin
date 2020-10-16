import React, { SetStateAction, useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { wishesInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper } from "src/components";

export function GachaScreen() {
  
  const wishesInfoObject = JSON.parse(JSON.stringify(wishesInfo));

  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0);
  const [ isPickUp, setIsPickup ] = useState(false);
  const [ pickUpContent, setPickUpContent ] = useState("All Time PickUp");
  const [ gachaResult, setGachaResult ] = useState([]);
  
  const onResetClick = (): void => {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
  };

  const onBannerClick = function(content: string): void {
    setPickUpContent(content);
  }
  
  
  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability: boolean = probability(0.6);
  const fourProbability: boolean = probability(5.7);
  
  let contentWithoutBlank: string = pickUpContent.split(" ").join("");
  let pityFlag: boolean = false;
  let getFiveStar: boolean = false;
  let getPickUp: boolean = false;
  let fiveStarList: string[] = wishesInfoObject[contentWithoutBlank].pool.five;
  let fourStarList: string[] = wishesInfoObject[contentWithoutBlank].pool.four;
  let threeStarList: string[] = wishesInfoObject[contentWithoutBlank].pool.three;
  let fiveStarListLength: number = wishesInfo[contentWithoutBlank].pool.five.length;
  let fourStarListLength: number = wishesInfo[contentWithoutBlank].pool.four.length;
  let threeStarListLength: number = wishesInfo[contentWithoutBlank].pool.three.length;
  
  const oneTimeGachaExecution = function(): void {
    let result: never[] = [];

    if (gachaTimes % 90 === 89 && !getFiveStar && !getPickUp) {
      pityFlag = true;
    }

    if(pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
      pityFlag = false;
      getFiveStar = false;
    } else {
      if (fiveProbability) {
        result.push(fiveStarList[Math.floor(Math.random() * fiveStarListLength)] as never);
        setFiveStarCount(fiveStarCount + 1);
        setGachaResult([...gachaResult, ...result]);
      } else if (fourProbability) {
        result.push(fourStarList[Math.floor(Math.random() * fourStarListLength)] as never);
        setFourStarCount(fourStarCount + 1);
        setGachaResult([...gachaResult, ...result]);
      } else {
        result.push(threeStarList[Math.floor(Math.random() * threeStarListLength)] as never);
        setThreeStarCount(threeStarCount + 1);
        setGachaResult([...gachaResult, ...result]);
      }
    }
    console.log(gachaResult);
    setGachaTimes(gachaTimes + 1);
  }
  
  // Mock-up result Data
  // need to delete
  const mockUpResult: Array<string> = ["Venti", "Mona", "Keqing", "Fischl", "Diluc", "Amber", "Barbara", "Qiqi", "Jean", "Kaeya"];

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
        // setGachaResult({ ...gachaResult, ...result})
        setFiveStarCount(fiveStarCount + 1);
      // 4성은 100% 1개 나옴...
      } else if (fourProbability) {
        setFourStarCount(fourStarCount + 1);
      } else {
        setThreeStarCount(threeStarCount + 1);
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
          <GachaBanner contents={wishesInfo.pickupContents} onClick={onBannerClick}/>
          <GachaArrangeView result={gachaResult} />
          <TextCenterWrapper>
            <div style={{margin: "20px"}}>
              <RoundTextButton onClick={() => onResetClick()}>Reset</RoundTextButton>
              {isPickUp || <RoundTextButton onClick={() => oneTimeGachaExecution()}>1 Time</RoundTextButton>}
              {isPickUp || <RoundTextButton onClick={() => tenTimesGachaExecution()}>10 Time</RoundTextButton>}
            </div>
          </TextCenterWrapper>
          <GachaResult times={gachaTimes} three={threeStarCount} four={fourStarCount} five={fiveStarCount} />
        </div>
      </ScreenInnerWrapper>
    </Container>
  );
}
