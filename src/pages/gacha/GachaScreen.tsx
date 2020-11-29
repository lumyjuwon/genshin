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

import { GachaState } from 'src/redux/gacha/types';
import { gachaDispatch } from 'src/redux/gacha/dispatch';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/rootReducer';

const itemsInfo = Object.assign({}, weaponInfo, characterInfo);

export function GachaScreen() {
  const gachaStore: GachaState = useSelector<RootState, any>((state) => state.gacha);

  const [gachaContent, setGachaContent] = useState(Object.keys(gachaInfo)[0]);
  const [gachaExecutionResult, setGachaExecutionResult] = useState([]);
  const [isWatchingVideo, setIsWatchingVideo] = useState(false);

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
    console.log('useEffecft');
    if (gacha.current) {
      gacha.current.totalCount = gachaStore.contents[gachaContent].totalCount;
      gacha.current.pityCount = gachaStore.contents[gachaContent].pityCount;
    }
  }, [gachaContent, contentData, gachaStore.contents]);

  let contentList = Object.keys(gachaInfo);
  let payedFateCount: number = 10;
  let gemImage: string = 'Acquaint';
  if (gachaContent === contentList[0] || gachaContent === contentList[1]) {
    gemImage = 'Intertwined';
  }
  if (gachaContent === contentList[3]) {
    payedFateCount = 8;
  }

  let stopBeginnerWishes: boolean = gachaContent === contentList[3] && gachaStore.contents[gachaContent].totalCount === 20;

  function onResetClick() {
    gachaMap.current.clear();

    const gachaData: GachaState = {
      contents: {
        Character_Event_Wish: {
          totalCount: 0,
          pityCount: 0,
          nextPity: 0
        },
        Weapon_Event_Wish: {
          totalCount: 0,
          pityCount: 0,
          nextPity: 0
        },
        Standard_Wish: {
          totalCount: 0,
          pityCount: 0,
          nextPity: 0
        },
        Novice_Wishes: {
          totalCount: 0,
          pityCount: 0,
          nextPity: 0
        }
      },
      fiveStarCount: 0,
      fourStarCount: 0,
      inventoryList: [],
      usedPrimoGem: 0
    };

    gachaDispatch.SetGacha(gachaData);
  }

  function onBannerClick(index: number) {
    const wishContentNames = Object.keys(gachaInfo);
    setGachaContent(wishContentNames[index]);
    setGachaExecutionResult([]);
  }
  console.log(gachaStore.contents);

  function onGachaExecution(tries: number) {
    turnOnWishVideo();
    const executeResult = gacha.current?.start(tries);
    setGachaExecutionResult(executeResult as never[]);

    let fourStarItemCount = 0;
    let fiveStarItemCount = 0;

    if (executeResult && gacha.current) {
      executeResult.forEach((item) => {
        if (itemsInfo[item].rank === 5) fiveStarItemCount += 1;
        else if (itemsInfo[item].rank === 4) fourStarItemCount += 1;
      });

      const gachaData: GachaState = {
        contents: {
          ...gachaStore.contents,
          [gachaContent]: {
            totalCount: gacha.current.totalCount,
            pityCount: gacha.current.pityCount,
            nextPity: contentData.maxPityCount - gacha.current.pityCount
          }
        },
        fiveStarCount: gachaStore.fiveStarCount + fiveStarItemCount,
        fourStarCount: gachaStore.fourStarCount + fourStarItemCount,
        inventoryList: [...gachaStore.inventoryList, ...executeResult],
        usedPrimoGem: gachaStore.usedPrimoGem + payedFateCount * 160
      };

      gachaDispatch.SetGacha(gachaData);
    }
  }

  function turnOnWishVideo() {
    setIsWatchingVideo(true);
  }

  function turnOffWishVideo() {
    setIsWatchingVideo(false);
  }

  return (
    <ContentWrapper>
      <PageHelmet title={trans(Lang.Gacha)} description={trans(Lang.Main_Wish_Desc)} />
      <ScreenInnerWrapper>
        <>
          <GachaBanner content={gachaContent} onClick={onBannerClick} pickUpList={Object.keys(gachaInfo)} video={isWatchingVideo} />
          <GachaArrangeView result={gachaExecutionResult} video={isWatchingVideo} turnOff={turnOffWishVideo} />
          {gachaContent === contentList[3] ? (
            <GachaResult
              gemImage={gemImage}
              times={gachaStore.contents[gachaContent].totalCount}
              gem={gachaStore.usedPrimoGem}
              pity={0}
              result={gachaStore.inventoryList}
            />
          ) : (
            <GachaResult
              gemImage={gemImage}
              times={gachaStore.contents[gachaContent].totalCount}
              gem={gachaStore.usedPrimoGem}
              pity={gachaStore.contents[gachaContent].nextPity}
              result={gachaStore.inventoryList}
            />
          )}
          <FlexWrapper>
            <>
              {isWatchingVideo ? (
                <RoundTextButton
                  styles={{
                    buttonStyles: {
                      display: 'inline-block',
                      backgroundColor: '#cc0000',
                      margin: '10px',
                      padding: '12px',
                      pointerEvents: 'none'
                    },
                    textStyles: { fontSize: '20px', small: { fontSize: '16px' } }
                  }}
                  onClick={() => onResetClick()}
                >
                  <>
                    {trans(Lang.Reset)}
                    <Ripple />
                  </>
                </RoundTextButton>
              ) : (
                <RoundTextButton
                  styles={{
                    buttonStyles: { display: 'inline-block', backgroundColor: '#cc0000', margin: '10px', padding: '12px' },
                    textStyles: { fontSize: '20px', small: { fontSize: '16px' } }
                  }}
                  onClick={() => onResetClick()}
                >
                  <>
                    {trans(Lang.Reset)}
                    <Ripple />
                  </>
                </RoundTextButton>
              )}
              {stopBeginnerWishes || isWatchingVideo ? (
                <RoundButton
                  styles={{ border: '2px solid #f1f2f3', width: '150px', display: 'inline-block' }}
                  onClick={() => turnOffWishVideo()}
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
              <GachaInventory
                inventoryList={gachaStore.inventoryList}
                four={gachaStore.fourStarCount}
                five={gachaStore.fiveStarCount}
                showVideo={isWatchingVideo}
              />
            </>
          </BoxModelWrapper>
        </>
      </ScreenInnerWrapper>
    </ContentWrapper>
  );
}
