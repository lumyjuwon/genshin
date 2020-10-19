import React, { useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { wishesInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper } from "src/components";
import { Gacha, GachaData } from "./Gacha";

export function GachaScreen() {

  const data = {
    WIN_TARGET: wishesInfo.CharacterEventWish.pickUp.five,
    WIN_ITEMS: wishesInfo.CharacterEventWish.pool.five,
    FOUR_PICK_UP_LIST: wishesInfo.CharacterEventWish.pickUp.four,
    FOUR_ITEMS: wishesInfo.CharacterEventWish.pool.four,
    THREE_ITEMS: wishesInfo.CharacterEventWish.pool.three,
    FIVE_PICK_UP_PERCENT: wishesInfo.CharacterEventWish.pickUpRate.five,
    FOUR_PICK_UP_PERCENT: wishesInfo.CharacterEventWish.pickUpRate.four,
    FIVE_PERCENT: wishesInfo.CharacterEventWish.rate.five,
    FOUR_PERCENT: wishesInfo.CharacterEventWish.rate.four,
    MAX_PITY_COUNT: wishesInfo.CharacterEventWish.pity.occur,
    MAX_FAVORITE_COUNT: wishesInfo.CharacterEventWish.pity.guarantee,
  }

  const gachaData = new GachaData(data);
  const gachaExeecutor = new Gacha(gachaData);

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

  const oneTimeGachaExecution = function(): void {
    setGachaExecutionResult(gachaExeecutor.start(1) as never[]);
    setGachaTimes(gachaTimes + gachaExeecutor.getGachaCount());
  }

  const tenTimesGachaExecution = function(): void {
    setGachaExecutionResult(gachaExeecutor.start(10) as never[]);
    setGachaTimes(gachaTimes + gachaExeecutor.getGachaCount());
  }

  // styled-component
  const Container = styled.div({});

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner contents={wishesInfo.pickupContents} onClick={onBannerClick}/>
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
