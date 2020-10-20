import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { wishesInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper, FlexWrapper } from "src/components";
import { Gacha, GachaData } from "./Gacha";
import { GachaInventory } from "./GachaInventory";

// styled-component
const Container = styled.div({});

export function GachaScreen() {
  
  const [ gachaTimes, setGachaTimes ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0);
  const [ pickUpContent, setPickUpContent ] = useState(Object.keys(wishesInfo)[0]);
  const [ gachaInventoryList, setGachaInventoryList ] = useState([]);
  const [ gachaExecutionResult, setGachaExecutionResult ] = useState([]);
  const [ nextPity, setNextPity ] = useState(0);
  
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
    setNextPity(contentData.maxPityCount);
    
    gachaMap.current.clear();
  };

  const onBannerClick = function(content: string): void {
    setPickUpContent(content);
    gacha.current && setGachaTimes(gacha.current.totalCount);
    gacha.current && setNextPity(gacha.current.pityCount)
  }

  const oneTimeGachaExecution = function(): void {
    setGachaExecutionResult(gacha.current?.start(1) as never[]);
    gacha.current && setGachaTimes(gacha.current.totalCount);
    gacha.current && setNextPity(contentData.maxPityCount - gacha.current.pityCount);
    gacha.current && setGachaInventoryList([...gachaInventoryList, ...gacha.current.gachaResult as never[]]);
  }
  
  const tenTimesGachaExecution = function(): void {
    setGachaExecutionResult(gacha.current?.start(10) as never[]);
    gacha.current && setGachaTimes(gacha.current.totalCount);
    gacha.current && setNextPity(contentData.maxPityCount - gacha.current.pityCount);
    gacha.current && setGachaInventoryList([...gachaInventoryList, ...gacha.current.gachaResult as never[]]);
  }

  let noviceWishesFlag: boolean = true;

  if(pickUpContent === "Novice Wishes" && gachaTimes === 20) {
    noviceWishesFlag = false;
  }

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner content={pickUpContent} onClick={onBannerClick} pickUpList={Object.keys(wishesInfo)}/>
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
                  Novice Wishes finished. Choose another Wish or click Reset Button
                </TextCenterWrapper>
              }
            </div>
          </TextCenterWrapper>
          <FlexWrapper>
            <>
              <div style={{flex: "1"}}>
                {(pickUpContent === "Novice Wishes") ? 
                  <GachaResult
                    times={gachaTimes}
                    five={fiveStarCount}
                    pity={0}
                    four={fourStarCount}
                    three={threeStarCount}
                  /> :
                  <GachaResult
                    times={gachaTimes}
                    pity={nextPity}
                    five={fiveStarCount}
                    four={fourStarCount}
                    three={threeStarCount}
                  />
                }
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
