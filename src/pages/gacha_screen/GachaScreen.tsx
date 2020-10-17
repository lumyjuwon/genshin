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
    console.log(content);
  }
  
  // After this, gacha logic
  const probability: Function = function(prob: number): boolean {
    return Math.random() < (prob / 100)
  }
  const fiveProbability = probability(0.6);
  const fourProbability = probability(5.7);

  interface PickUpRate {
    five: number;
    four: number;
  }
  
  let contentWithoutBlank: string = pickUpContent.split(" ").join("");
  let pityFlag: boolean = false;
  let getFiveStar: boolean = false;
  let getPickUp: boolean = false;
  const fivePickUpList = wishesInfoObject[contentWithoutBlank].pickUp.five;
  const fourPickUpList = wishesInfoObject[contentWithoutBlank].pickUp.four;
  const pickUpRate: PickUpRate | undefined = wishesInfoObject[contentWithoutBlank].pickupRate;
  const fiveStarList = wishesInfoObject[contentWithoutBlank].pool.five;
  const fourStarList = wishesInfoObject[contentWithoutBlank].pool.four;
  const threeStarList = wishesInfoObject[contentWithoutBlank].pool.three;
  const fiveStarListLength = wishesInfo[contentWithoutBlank].pool.five.length;
  const fourStarListLength = wishesInfo[contentWithoutBlank].pool.four.length;
  const threeStarListLength = wishesInfo[contentWithoutBlank].pool.three.length;
  
  const oneTimeGachaExecution = function(): void {
    let randomPick: string;
    let result: never[] = [];

    if (gachaTimes % 90 === 89 && (!getFiveStar || !getPickUp)) {
      pityFlag = true;
    }

    if(pityFlag) {
      randomPick = fivePickUpList[Math.floor(Math.random() * fivePickUpList.length)];
      setGachaExecutionResult([randomPick] as never);
      result.push(randomPick as never);
      setAccGachaResult([...accGachaResult, ...result])
      setFiveStarCount(fiveStarCount + 1);
      pityFlag = false;
      getFiveStar = false;
      
    } else {
      if (fiveProbability) {
        if (!pickUpRate) {
          randomPick = fiveStarList[Math.floor(Math.random() * fiveStarListLength)];
        } else {
          if (probability(pickUpRate.five)) {
            randomPick = fivePickUpList[Math.floor(Math.random() * fivePickUpList.length)];
          } else {
            const nonPickUpList = fiveStarList.filter((v: string) => !fivePickUpList.includes(v));
            randomPick = nonPickUpList[Math.floor(Math.random() * nonPickUpList.length)];
          }
        }
        setGachaExecutionResult([randomPick] as never);
        result.push(randomPick as never);
        setFiveStarCount(fiveStarCount + 1);
        setAccGachaResult([...accGachaResult, ...result]);
        getFiveStar = true;
        if (fivePickUpList.includes(randomPick)) getPickUp = true;

      } else if (fourProbability) {
        if (!pickUpRate) {
          randomPick = fourStarList[Math.floor(Math.random() * fourStarListLength)];
        } else {
          if (probability(pickUpRate.four)) {
            randomPick = fourPickUpList[Math.floor(Math.random() * fourPickUpList.length)];
          } else {
            const nonPickUpList = fourStarList.filter((v: string) => !fourPickUpList.includes(v));
            randomPick = nonPickUpList[Math.floor(Math.random() * nonPickUpList.length)];
          }
        }
        setGachaExecutionResult([randomPick] as never);
        result.push(randomPick as never);
        setFourStarCount(fourStarCount + 1);
        setAccGachaResult([...accGachaResult, ...result]);

      } else {
        randomPick = threeStarList[Math.floor(Math.random() * threeStarListLength)];
        setGachaExecutionResult([randomPick] as never);
        result.push(randomPick as never);
        setThreeStarCount(threeStarCount + 1);
        setAccGachaResult([...accGachaResult, ...result]);
      }
    }
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
