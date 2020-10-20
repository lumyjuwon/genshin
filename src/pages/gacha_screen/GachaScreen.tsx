import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { wishesInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper, FlexWrapper } from "src/components";
import { Gacha, GachaData } from "./Gacha";
import { GachaInventory } from "./GachaInventory";

export function GachaScreen() {
  
  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0);
  const [ pickUpContent, setPickUpContent ] = useState("Character Event Wish");
  const [ gachaInventoryList, setGachaInventoryList ] = useState([]);
  const [ gachaExecutionResult, setGachaExecutionResult ] = useState([]);
  
  const refInitialValue = new Map<string, Gacha>();
  const gacha = useRef<Gacha>();
  const gachaMap = useRef<Map<string, Gacha>>(refInitialValue);

  const contentData = {
    favoriteTarget: wishesInfo[pickUpContent].favoriteTarget,
    maxPityCount: wishesInfo[pickUpContent].pityCount,
    maxFavoriteCount: wishesInfo[pickUpContent].favoriteCount,
    maxGuaranteeCount: wishesInfo[pickUpContent].guaranteeCount,
    guaranteeItem: wishesInfo[pickUpContent].guaranteeItem,
    fiveStars: wishesInfo[pickUpContent].fiveStars,
    fourStars: wishesInfo[pickUpContent].fourStars,
    threeStars: wishesInfo[pickUpContent].threeStars
  }

  useEffect(() => {
    if(!gachaMap.current?.has(pickUpContent)){
      const data = new GachaData(contentData);
      const executor = new Gacha(data);
      gachaMap.current?.set(pickUpContent, executor);
    }
    
    gacha.current = gachaMap.current?.get(pickUpContent);
  }, [pickUpContent, contentData]);
  
  const onResetClick = (): void => {
    setGachaTimes(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
    setGachaExecutionResult([]);
    setGachaInventoryList([]);
    
    gachaMap.current.clear();
    // 초보자뽑기 Noelle이 다시 나오도록 해야함
  };

  const onBannerClick = function(content: string): void {
    setPickUpContent(content);
  }

  const oneTimeGachaExecution = function(): void {
    setGachaExecutionResult(gacha.current?.start(1) as never[]);
    gacha.current && setGachaTimes(gacha.current.totalCount);
    gacha.current && setGachaInventoryList([...gacha.current.gachaResult] as never[]);
  }

  const tenTimesGachaExecution = function(): void {
    setGachaExecutionResult(gacha.current?.start(10) as never[]);
    gacha.current && setGachaTimes(gacha.current.totalCount);
    gacha.current && setGachaInventoryList([...gacha.current.gachaResult] as never[]);
  }

  // styled-component
  const Container = styled.div({});

  let noviceWishesFlag: boolean = true;

  if(pickUpContent === "NoviceWishes" && gachaTimes === 20) {
    noviceWishesFlag = false;
  }

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
              {noviceWishesFlag ? 
                <RoundTextButton
                  styles={{ buttonStyles: { display: "inline-block" }}}
                  onClick={() => tenTimesGachaExecution()}
                >
                  10 Time
                </RoundTextButton> :
                <TextCenterWrapper>
                  Novive Wishes finished. Choose another Wish or click Reset Button
                </TextCenterWrapper>
              }
            </div>
          </TextCenterWrapper>
          <FlexWrapper>
            <>
              <div style={{flex: "1"}}>
                <GachaResult
                  times={gachaTimes}
                  five={fiveStarCount}
                  four={fourStarCount}
                  three={threeStarCount}
                />
              </div>
              <div style={{flex: "1"}}>
                <GachaInventory inventoryList={gachaInventoryList} />
              </div>
            </>
          </FlexWrapper>
        </div>
      </ScreenInnerWrapper>
    </Container>
  );
}
