import React, { useEffect, useRef, useState } from 'react';

import { trans, Lang } from 'src/resources/languages';
import { GachaResult } from './GachaResult';
import { GachaBanner } from './GachaBanner';
import { Ripple } from 'src/components/effect';
import { GachaInventory } from './GachaInventory';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaController, GachaContent, GachaData } from './Gacha';
import { characterInfo, weaponInfo, gachaInfo } from 'src/resources/data';
import { GemImages } from 'src/resources/images';
import {
  ScreenInnerWrapper,
  RoundTextButton,
  TextCenterWrapper,
  SquareImage,
  FlexWrapper,
  RoundButton,
  ContentWrapper,
  BoxModelWrapper,
  PageHelmet
} from 'src/components';

const itemsInfo = Object.assign({}, weaponInfo, characterInfo);

export function GachaScreen() {
  const [totalCount, setTotalCount] = useState(0);
  const [fiveStarCount, setFiveStarCount] = useState(0);
  const [fourStarCount, setFourStarCount] = useState(0);
  const [gachaContent, setGachaContent] = useState(Object.keys(gachaInfo)[0]);
  const [gachaInventoryList, setGachaInventoryList] = useState([]);
  const [gachaExecutionResult, setGachaExecutionResult] = useState([]);
  const [nextPity, setNextPity] = useState(0);
  const [usedPrimoGem, setUsedPrimoGem] = useState(0);

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
  };

  useEffect(() => {
    if (!gachaMap.current?.has(gachaContent)) {
      const data = new GachaContent(contentData);
      const executor = new GachaController(data);
      gachaMap.current?.set(gachaContent, executor);
    }

    gacha.current = gachaMap.current?.get(gachaContent);
    if (gacha.current) {
      setTotalCount(gacha.current.totalCount);
      setNextPity(gacha.current.nextPity);
    }
  }, [gachaContent, contentData]);

  let contentList = Object.keys(gachaInfo);
  let payedFateCount: number = 10;
  let gemImage: string = 'Acquaint';
  if (gachaContent === contentList[0] || gachaContent === contentList[1]) {
    gemImage = 'Intertwined';
  }
  if (gachaContent === contentList[3]) {
    payedFateCount = 8;
  }

  let stopBeginnerWishes: boolean = gachaContent === contentList[3] && totalCount === 20;

  const onResetClick = (): void => {
    setTotalCount(0);
    setFourStarCount(0);
    setFiveStarCount(0);
    setGachaExecutionResult([]);
    setGachaInventoryList([]);
    setUsedPrimoGem(0);
    setNextPity(0);

    gachaMap.current.clear();
  };

  const onBannerClick = (index: number): void => {
    const wishContentNames = Object.keys(gachaInfo);
    setGachaContent(wishContentNames[index]);
    setGachaExecutionResult([]);
  };

  const onGachaExecution = (tries: number): void => {
    setGachaExecutionResult(gacha.current?.start(tries) as never[]);
    if (gacha.current) {
      setTotalCount(gacha.current.totalCount);
      setNextPity(contentData.maxPityCount - gacha.current.pityCount);
      setGachaInventoryList([...gachaInventoryList, ...(gacha.current.gachaResult as never[])]);
      setStarCount(gacha.current.gachaResult);
    }
    setUsedPrimoGem(usedPrimoGem + payedFateCount * 160);
  };

  const setItemRankCount = (item: string) => {
    if (itemsInfo[item].rank === 5) {
      setFiveStarCount(fiveStarCount + 1);
    } else if (itemsInfo[item].rank === 4) {
      setFourStarCount(fourStarCount + 1);
    }
  };

  const setStarCount = (result: Array<string>) => {
    result.map((item: string) => setItemRankCount(item));
  };

  return (
    <ContentWrapper>
      <PageHelmet title={trans(Lang.Gacha)} description={trans(Lang.Main_Wish_Desc)} />
      <ScreenInnerWrapper>
        <>
          <GachaBanner content={gachaContent} onClick={onBannerClick} pickUpList={Object.keys(gachaInfo)} />
          <GachaArrangeView result={gachaExecutionResult} />
          {gachaContent === contentList[3] ? (
            <GachaResult times={totalCount} gem={usedPrimoGem} pity={0} result={gachaInventoryList} />
          ) : (
            <GachaResult times={totalCount} gem={usedPrimoGem} pity={nextPity} result={gachaInventoryList} />
          )}
          <FlexWrapper>
            <>
              <RoundTextButton
                styles={{
                  buttonStyles: { display: 'inline-block', backgroundColor: '#cc0000', margin: '10px', padding: '12px' },
                  textStyles: { fontSize: '20px' }
                }}
                onClick={() => onResetClick()}
              >
                <>
                  {trans(Lang.Reset)}
                  <Ripple />
                </>
              </RoundTextButton>
              {stopBeginnerWishes ? (
                <RoundButton
                  styles={{ border: '2px solid #f1f2f3', width: '150px', display: 'inline-block', pointerEvents: 'none' }}
                  onClick={() => onGachaExecution(10)}
                >
                  <FlexWrapper
                    styles={{
                      flexDirection: 'column',
                      width: '100%',
                      medium: { flexDirection: 'column' },
                      small: { flexDirection: 'column' }
                    }}
                  >
                    <>
                      <div style={{ fontSize: '14px' }}>{trans(Lang.Start)}</div>
                      <FlexWrapper>
                        <>
                          <SquareImage styles={{ width: '25px', height: '25px' }} src={GemImages[gemImage]} />
                          <span style={{ fontSize: '14px' }}>&nbsp;× {payedFateCount}</span>
                        </>
                      </FlexWrapper>
                    </>
                  </FlexWrapper>
                </RoundButton>
              ) : (
                <RoundButton
                  styles={{ border: '2px solid #f1f2f3', width: '150px', display: 'inline-block' }}
                  onClick={() => onGachaExecution(10)}
                >
                  <>
                    <FlexWrapper styles={{ flexDirection: 'column', width: '100%' }}>
                      <>
                        <div style={{ fontSize: '14px' }}>{trans(Lang.Start)}</div>
                        <FlexWrapper>
                          <>
                            <SquareImage styles={{ width: '25px', height: '25px' }} src={GemImages[gemImage]} />
                            <span style={{ fontSize: '14px' }}>&nbsp;× {payedFateCount}</span>
                          </>
                        </FlexWrapper>
                      </>
                    </FlexWrapper>
                    <Ripple />
                  </>
                </RoundButton>
              )}
            </>
          </FlexWrapper>
          {stopBeginnerWishes && (
            <TextCenterWrapper styles={{ width: '800px', margin: '0 auto 20px', medium: { width: '700px' }, small: { width: '100%' } }}>
              {trans(Lang.Novice_Finish)}
            </TextCenterWrapper>
          )}
          <BoxModelWrapper styles={{ margin: '50px auto 30px' }}>
            <>
              <hr />
              <GachaInventory inventoryList={gachaInventoryList} four={fourStarCount} five={fiveStarCount} />
            </>
          </BoxModelWrapper>
        </>
      </ScreenInnerWrapper>
    </ContentWrapper>
  );
}
