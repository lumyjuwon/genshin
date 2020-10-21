import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { gachaInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper, FlexWrapper } from "src/components";
import { GachaController, GachaContent, GachaData } from "./Gacha";
import { GachaInventory } from "./GachaInventory";

// styled-component
const Container = styled.div({});

export function GachaScreen() {
  
  const [ totalCount, setTotalCount ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
  const [ threeStarCount, setThreeStarCount ] = useState(0);
  const [ gachaContent, setGachaContent ] = useState(Object.keys(gachaInfo)[0]);
  const [ gachaInventoryList, setGachaInventoryList ] = useState([]);
  const [ gachaExecutionResult, setGachaExecutionResult ] = useState([]);
  const [ nextPity, setNextPity ] = useState(0);
  
  const refInitialValue = new Map<string, GachaController>();
  const gacha = useRef<GachaController>();
  const gachaMap = useRef<Map<string, GachaController>>(refInitialValue);

  const contentData: GachaData = {
    pickUpTarget: gachaInfo[gachaContent].pickUpTarget,
    maxPityCount: gachaInfo[gachaContent].maxPityCount,
    maxPickUpCount: gachaInfo[gachaContent].maxPickUpCount,
    maxBonusCount: gachaInfo[gachaContent].maxBonusCount,
    guaranteeItem: gachaInfo[gachaContent].guaranteeItem,
    fiveStars: gachaInfo[gachaContent].fiveStars,
    fourStars: gachaInfo[gachaContent].fourStars,
    threeStars: gachaInfo[gachaContent].threeStars
  }

  useEffect(() => {
    if(!gachaMap.current?.has(gachaContent)){
      const data = new GachaContent(contentData);
      const executor = new GachaController(data);
      gachaMap.current?.set(gachaContent, executor);
    }
    
    gacha.current = gachaMap.current?.get(gachaContent);
  }, [gachaContent, contentData]);
  
  const onResetClick = (): void => {
    setTotalCount(0);
    setFiveStarCount(0);
    setFourStarCount(0);
    setThreeStarCount(0);
    setGachaExecutionResult([]);
    setGachaInventoryList([]);
    setNextPity(contentData.maxPityCount);
    
    gachaMap.current.clear();
  };

  const onBannerClick = (content: string): void => {
    setGachaContent(content);
    gacha.current && setTotalCount(gacha.current.totalCount);
    gacha.current && setNextPity(gacha.current.pityCount);
  }

  const onGachaExecution = (tries: number): void => {
    setGachaExecutionResult(gacha.current?.start(tries) as never[]);
    gacha.current && setTotalCount(gacha.current.totalCount);
    gacha.current && setNextPity(contentData.maxPityCount - gacha.current.pityCount);
    gacha.current && setGachaInventoryList([...gachaInventoryList, ...gacha.current.gachaResult as never[]]);
  }

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner content={gachaContent} onClick={onBannerClick} pickUpList={Object.keys(gachaInfo)}/>
          <GachaArrangeView result={gachaExecutionResult} />
          <TextCenterWrapper>
            <div style={{margin: "20px"}}>
              <RoundTextButton
                styles={{ buttonStyles: { display: "inline-block" }}}
                onClick={() => onResetClick()}
              >
                Reset
              </RoundTextButton>
              {(gachaContent !== "Novice Wishes") &&     
              <RoundTextButton
                styles={{ buttonStyles: { display: "inline-block" }}}
                onClick={() => onGachaExecution(1)}
              >
                1 Time
              </RoundTextButton>}
              {(gachaContent === "Novice Wishes" && totalCount === 20) ? 
                <TextCenterWrapper>
                  Novice Wishes finished. Choose another Wish or click Reset Button
                </TextCenterWrapper> :
                <RoundTextButton
                  styles={{ buttonStyles: { display: "inline-block" }}}
                  onClick={() => onGachaExecution(10)}
                >
                  10 Time
                </RoundTextButton>                
              }
            </div>
          </TextCenterWrapper>
          <FlexWrapper>
            <>
              <div style={{flex: "1", alignSelf: "flex-start"}}>
                {(gachaContent === "Novice Wishes") ? 
                  <GachaResult
                    times={totalCount}
                    five={fiveStarCount}
                    pity={0}
                    four={fourStarCount}
                    three={threeStarCount}
                  /> :
                  <GachaResult
                    times={totalCount}
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
