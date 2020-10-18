import React, { useState } from "react";
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
  const [ pickUpContent, setPickUpContent ] = useState("Character Event Wish");
  const [ accGachaResult, setAccGachaResult ] = useState([]);
  const [ gachaExecutionResult, setGachaExecutionResult ] = useState([]);
  
  const onResetClick = (): void => {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
    setGachaExecutionResult([]);
    setAccGachaResult([]);
  };

  const onBannerClick = function(content: string): void {
    setPickUpContent(content);
  }
  
  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability = probability(0.6);
  const fourProbability = probability(5.7);
  
  let contentWithoutBlank: string = pickUpContent.split(" ").join("");
  let pityFlag: boolean = false;
  let pityFlagCount: number = 0;
  let isGetFiveStar: boolean = false;
  let isGetPickUp: boolean = false;
  const pickUpGuaranteeCount = wishesInfoObject[contentWithoutBlank].pity.guarantee;
  const fivePickUpList = wishesInfoObject[contentWithoutBlank].pickUp.five;
  const fourPickUpList = wishesInfoObject[contentWithoutBlank].pickUp.four;
  const pickUpRate = wishesInfoObject[contentWithoutBlank].pickupRate;
  const fiveStarList = wishesInfoObject[contentWithoutBlank].pool.five;
  const fourStarList = wishesInfoObject[contentWithoutBlank].pool.four;
  const threeStarList = wishesInfoObject[contentWithoutBlank].pool.three;
  const pickUpOccur = wishesInfo[contentWithoutBlank].pity.occur;
  
  const oneTimeGachaExecution = function(): void {
    // always return gachaTimes - 1... I don't know why....
    setGachaTimes(gachaTimes + 1);

    let randomPick: string;
    let result: never[] = [];

    if(gachaTimes % pickUpOccur === (pickUpOccur - 1)) {
      if (!isGetFiveStar) pityFlag = true;
      if (isGetFiveStar && !isGetPickUp && ((pickUpGuaranteeCount - 1) === pityFlagCount)) pityFlag = true;
      pityFlagCount += 1;
    }

    if (pityFlag){
      if (!isGetPickUp && pityFlagCount === pickUpGuaranteeCount) {
        randomPick = fivePickUpList[Math.floor(Math.random() * fivePickUpList.length)];
      } else {
        if (!pickUpRate) {
          randomPick = fiveStarList[Math.floor(Math.random() * fiveStarList.length)];
        } else {
          if (probability(pickUpRate.five)) {
            randomPick = fivePickUpList[Math.floor(Math.random() * fivePickUpList.length)];
            isGetPickUp = true;
          } else {
            const nonPickUpList = fiveStarList.filter((v: string) => !fivePickUpList.includes(v));
            randomPick = nonPickUpList[Math.floor(Math.random() * nonPickUpList.length)];
          }
        }
      }
      isGetFiveStar = false;
      pityFlag = false;
      result.push(randomPick as never);
      setFiveStarCount(fiveStarCount + 1);

    } else {
      if (probability(fiveProbability)) {
        if (!pickUpRate) {
          randomPick = fiveStarList[Math.floor(Math.random() * fiveStarList.length)];
        } else {
          if (probability(pickUpRate.five)) {
            randomPick = fivePickUpList[Math.floor(Math.random() * fivePickUpList.length)];
            isGetPickUp = true;
          } else {
            const nonPickUpList = fiveStarList.filter((v: string) => !fivePickUpList.includes(v));
            randomPick = nonPickUpList[Math.floor(Math.random() * nonPickUpList.length)];
          }
        }
        isGetFiveStar = true;
        setFiveStarCount(fiveStarCount + 1);
        result.push(randomPick as never);

      } else if (probability(fourProbability)) {
        if (!pickUpRate) {
          randomPick = fourStarList[Math.floor(Math.random() * fourStarList.length)];
        } else {
          if (probability(pickUpRate.four)) {
            randomPick = fourPickUpList[Math.floor(Math.random() * fourPickUpList.length)];
            isGetPickUp = true;
          } else {
            const nonPickUpList = fourStarList.filter((v: string) => !fourPickUpList.includes(v));
            randomPick = nonPickUpList[Math.floor(Math.random() * nonPickUpList.length)];
          }
        }
        setFourStarCount(fourStarCount + 1);
        result.push(randomPick as never);

      } else {
        randomPick = threeStarList[Math.floor(Math.random() * threeStarList.length)];
        setThreeStarCount(threeStarCount + 1);
        result.push(randomPick as never);
      }
    }
    console.log(randomPick);
    setGachaExecutionResult([...result]);
    setAccGachaResult([...accGachaResult, ...result]);
  }

  const tenTimesGachaExecution = function(): void {
    if (gachaTimes % 90 === 89 && !isGetFiveStar && !isGetPickUp) {
      pityFlag = true;
    }

    if (pityFlag) {
      setFiveStarCount(fiveStarCount + 1);
      pityFlag = false;
      isGetFiveStar = false;
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

  console.log(gachaTimes)

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner contents={wishesInfoObject.pickupContents} onClick={onBannerClick}/>
          <GachaArrangeView result={gachaExecutionResult} />
          <TextCenterWrapper>
            <div style={{margin: "20px"}}>
              <RoundTextButton
                styles={{ buttonStyles: { display: "inline-block" }}}
                onClick={() => onResetClick()}
              >
                Reset
              </RoundTextButton>
              {(pickUpContent !== "Novice Wishes") &&     
              <RoundTextButton
                styles={{ buttonStyles: { display: "inline-block" }}}
                onClick={() => oneTimeGachaExecution()}
              >
                1 Time
              </RoundTextButton>}
              <RoundTextButton
                styles={{ buttonStyles: { display: "inline-block" }}}
                onClick={() => tenTimesGachaExecution()}
              >
                10 Time
              </RoundTextButton>
            </div>
          </TextCenterWrapper>
          <GachaResult times={gachaTimes} three={threeStarCount} four={fourStarCount} five={fiveStarCount} />
        </div>
      </ScreenInnerWrapper>
    </Container>
  );
}
