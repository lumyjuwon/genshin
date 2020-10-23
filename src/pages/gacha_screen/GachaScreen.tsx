import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { GachaResult } from "./GachaResult";
import { characterInfo, weaponInfo, gachaInfo } from 'src/resources/data';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaBanner } from "./GachaBanner";
import { GachaController, GachaContent, GachaData } from "./Gacha";
import { GachaInventory } from "./GachaInventory";
import { ScreenInnerWrapper, RoundTextButton, TextCenterWrapper, SquareImage, FlexWrapper, RoundButton } from "src/components";

// styled-component
const Container = styled.div({});

export function GachaScreen() {
  
  const [ totalCount, setTotalCount ] = useState(0);
  const [ fiveStarCount, setFiveStarCount ] = useState(0);
  const [ fourStarCount, setFourStarCount ] = useState(0);
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
    setFourStarCount(0);
    setFiveStarCount(0);
    setGachaExecutionResult([]);
    setGachaInventoryList([]);
    setNextPity(contentData.maxPityCount);
    
    gachaMap.current.clear();
  };
  
  const afterGachaCurrentChange = () => {
    gacha.current && setTotalCount(gacha.current.totalCount);
    gacha.current && setNextPity(gacha.current.nextPity);
  }

  const onBannerClick = (content: string): void => {
    setGachaContent(content);
    setGachaExecutionResult([]);
    
    // Due to useState is asyncronous, gacha.current is prev state.
    setTimeout(afterGachaCurrentChange);
    // gacha.current && setTotalCount(gacha.current.totalCount);
    // gacha.current && setNextPity(gacha.current.nextPity);
  }

  const onGachaExecution = (tries: number): void => {
    setGachaExecutionResult(gacha.current?.start(tries) as never[]);
    gacha.current && setTotalCount(gacha.current.totalCount);
    gacha.current && setNextPity(contentData.maxPityCount - gacha.current.pityCount);
    gacha.current && setGachaInventoryList([...gachaInventoryList, ...gacha.current.gachaResult as never[]]);
    gacha.current && setStarCount(gacha.current.gachaResult);
  }

  const setStarCount = (result: Array<string>) => {
    let fiveCount: number = fiveStarCount;
    let fourCount: number = fourStarCount;

    result.map((item: string) => {

      if(characterInfo[item]) {
        if(characterInfo[item].rank === 5) fiveCount += 1;
        if(characterInfo[item].rank === 4) fourCount += 1;
      }
      else {
        if(weaponInfo[item].rank === 5) fiveCount += 1;
        if(weaponInfo[item].rank === 4) fourCount += 1;
      }

    });

    setFiveStarCount(fiveCount);
    setFourStarCount(fourCount);
  }

  let payedFateCount: number = 10;
  if(gachaContent === "Novice Wishes") {
    payedFateCount = 8;
  }

  let stopBeginnerWishes: boolean = (gachaContent === "Novice Wishes" && totalCount === 20);

  return (
    <Container>
      <ScreenInnerWrapper>
        <div style={{margin: "30px"}}>
          <GachaBanner content={gachaContent} onClick={onBannerClick} pickUpList={Object.keys(gachaInfo)}/>
          <GachaArrangeView result={gachaExecutionResult} />
          <div style={{margin: "30px 0 20px"}}>
          <FlexWrapper>
            <>
            <RoundTextButton
              styles={{
                buttonStyles: { display: "inline-block", backgroundColor: "#cc0000", margin: "10px", padding: "12px" },
                textStyles: { fontSize: "20px" }
              }}
              onClick={() => onResetClick()}
            >
              Reset
            </RoundTextButton>
            {
            stopBeginnerWishes ? 
              <RoundButton
                styles={{ border: "2px solid #f1f2f3", width: "200px", display: "inline-block", pointerEvents: "none" }}
                onClick={() => onGachaExecution(10)}
              >
                <FlexWrapper styles={{flexDirection: "column", width: "100%"}}>
                  <>
                    <div style={{fontSize: "14px"}}>Wish × 10</div>
                    <FlexWrapper>
                      <>
                        <SquareImage
                          styles={{width: "25px", height: "25px" }}
                          src={require("../../resources/images/items/gem/Acquaint Fate.png")}
                        />
                        <span style={{fontSize: "14px"}}>&nbsp;× {payedFateCount}</span>
                      </>
                    </FlexWrapper>
                  </>
                </FlexWrapper>
              </RoundButton> :
              <RoundButton
                styles={{ border: "2px solid #f1f2f3", width: "150px", display: "inline-block" }}
                onClick={() => onGachaExecution(10)}
              >
              <FlexWrapper styles={{flexDirection: "column", width: "100%"}}>
                <>
                  <div style={{fontSize: "14px"}}>Wish × 10</div>
                  <FlexWrapper>
                    <>
                      <SquareImage
                        styles={{width: "25px", height: "25px" }}
                        src={require("../../resources/images/items/gem/Acquaint Fate.png")}
                      />
                      <span style={{fontSize: "14px"}}>&nbsp;× {payedFateCount}</span>
                    </>
                  </FlexWrapper>
                </>
                </FlexWrapper>
              </RoundButton>
            }
            </>
          </FlexWrapper>
          </div>
          {stopBeginnerWishes ? 
            <TextCenterWrapper styles={{width: "800px", margin: "0 auto 20px"}}>
              Novice Wishes finished. Choose another Wish or click Reset Button
            </TextCenterWrapper> :
            null
          }
          {(gachaContent === "Novice Wishes") ? 
            <GachaResult
              times={totalCount}
              four={fourStarCount}
              five={fiveStarCount}
              pity={0}
              result={gachaInventoryList}
            /> :
            <GachaResult
              times={totalCount}
              four={fourStarCount}
              five={fiveStarCount}
              pity={nextPity}
              result={gachaInventoryList}
            />
          }
          <div style={{margin: "50px auto 30px"}}>
            <hr />
            <GachaInventory inventoryList={gachaInventoryList} />
          </div>
        </div>
      </ScreenInnerWrapper>
    </Container>
  );
}
