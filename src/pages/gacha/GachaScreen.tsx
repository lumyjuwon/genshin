import React, { useEffect, useRef, useState } from 'react';

import { trans, Lang } from 'src/resources/languages';
import { GachaResult } from './GachaResult';
import { GachaBanner } from './GachaBanner';
import { Ripple } from 'src/components/effect';
import { GachaInventory } from './GachaInventory';
import { GachaArrangeView } from './GachaArrangeView';
import { GachaController, GachaContent, GachaData } from './Gacha';
import { characterInfo, weaponInfo, gachaInfo } from 'src/resources/data';
import { GemImages, ImageSrc } from 'src/resources/images';
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
  const gacha = useRef<GachaController>();
  const [gachaCategory, setGachaCategory] = useState(Object.keys(gachaInfo)[0]);
  const [gachaExecutionResult, setGachaExecutionResult] = useState([]);
  const [isWatchingVideo, setIsWatchingVideo] = useState(false);
  const [gemImage, setGemImage] = useState<ImageSrc>();
  const [usedFateCount, setUsedFateCount] = useState(10);

  const stopBeginnerWishes: boolean = gachaCategory === 'Novice_Wishes' && gachaStore.contents[gachaCategory].totalCount === 20;

  useEffect(() => {
    const contentData: GachaData = {
      pickUpTarget: gachaInfo[gachaCategory].pickUpTarget,
      maxPityCount: gachaInfo[gachaCategory].maxPityCount,
      maxPickUpCount: gachaInfo[gachaCategory].maxPickUpCount,
      maxBonusCount: gachaInfo[gachaCategory].maxBonusCount,
      guaranteeItem: gachaInfo[gachaCategory].guaranteeItem,
      executionInfo: gachaInfo[gachaCategory].executionInfo,
      stackPercentage: gachaInfo[gachaCategory].stackPercentage,
      fiveStars: gachaInfo[gachaCategory].fiveStars,
      fourStars: gachaInfo[gachaCategory].fourStars,
      threeStars: gachaInfo[gachaCategory].threeStars
    };

    const data = new GachaContent(contentData);
    gacha.current = new GachaController(data);

    const categoryInfo = gachaStore.contents[gachaCategory];

    gacha.current.setCount(categoryInfo.totalCount, categoryInfo.pityCount, categoryInfo.favoriteCount);

    setGemImage(GemImages[data.executionInfo.gemImageName]);
    setUsedFateCount(data.executionInfo.excution10ConsumeGem);
  }, [gachaCategory, gachaStore.contents]);

  useEffect(() => {
    if (gacha.current) {
      gacha.current.setCount(
        gachaStore.contents[gachaCategory].totalCount,
        gachaStore.contents[gachaCategory].pityCount,
        gachaStore.contents[gachaCategory].favoriteCount
      );
    }
  }, [gachaCategory, gachaStore.contents]);

  console.log(gacha.current?.pityCount);

  function onBannerClick(index: number) {
    const wishContentNames = Object.keys(gachaInfo);
    setGachaCategory(wishContentNames[index]);
    setGachaExecutionResult([]);
  }

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
          [gachaCategory]: {
            totalCount: gacha.current.totalCount,
            pityCount: gacha.current.pityCount,
            nextPity: gacha.current.data.maxPityCount - gacha.current.pityCount,
            usedFate: gachaStore.contents[gachaCategory].usedFate + usedFateCount,
            favoriteCount: gacha.current.favoriteCount
          }
        },
        fiveStarCount: gachaStore.fiveStarCount + fiveStarItemCount,
        fourStarCount: gachaStore.fourStarCount + fourStarItemCount,
        inventoryList: [...gachaStore.inventoryList, ...executeResult],
        usedPrimoGem: gachaStore.usedPrimoGem + gacha.current?.data.executionInfo.excution10ConsumeGem * 160
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

  function makeArrangeViewBlank() {
    setGachaExecutionResult([]);
  }

  return (
    <ContentWrapper>
      <PageHelmet title={trans(Lang.Gacha)} description={trans(Lang.Main_Wish_Desc)} />
      <ScreenInnerWrapper>
        <>
          <GachaBanner content={gachaCategory} onClick={onBannerClick} pickUpList={Object.keys(gachaInfo)} video={isWatchingVideo} />
          <GachaArrangeView result={gachaExecutionResult} video={isWatchingVideo} turnOff={turnOffWishVideo} />
          {gachaCategory === 'Novice_Wishes' ? (
            <GachaResult
              gemImage={gemImage}
              fate={gachaStore.contents[gachaCategory].usedFate}
              gem={(gachaStore.contents[gachaCategory].usedFate || 0) * 160}
              pity={0}
              result={gachaStore.inventoryList}
            />
          ) : (
            <GachaResult
              gemImage={gemImage}
              fate={gachaStore.contents[gachaCategory].usedFate}
              gem={(gachaStore.contents[gachaCategory].usedFate || 0) * 160}
              pity={gachaStore.contents[gachaCategory].nextPity}
              result={gachaStore.inventoryList}
            />
          )}
          <FlexWrapper>
            <>
              {stopBeginnerWishes || isWatchingVideo ? (
                <RoundButton
                  styles={{ border: '2px solid #f1f2f3', width: '150px', display: 'inline-block' }}
                  onClick={() => turnOffWishVideo()}
                >
                  <FlexWrapper styles={{ padding: '10px', small: { padding: '6px 0' } }}>
                    <>
                      <SquareImage styles={{ width: '30px', height: '30px' }} src={gemImage} />
                      <span style={{ fontSize: '20px' }}>&nbsp;× {gacha.current?.data.executionInfo.excution10ConsumeGem}</span>
                    </>
                  </FlexWrapper>
                </RoundButton>
              ) : (
                <RoundButton
                  styles={{ border: '2px solid #f1f2f3', width: '150px', display: 'inline-block' }}
                  onClick={() => onGachaExecution(10)}
                >
                  <>
                    <FlexWrapper styles={{ padding: '10px', small: { padding: '6px 0' } }}>
                      <>
                        <SquareImage styles={{ width: '30px', height: '30px' }} src={gemImage} />
                        <span style={{ fontSize: '20px' }}>&nbsp;× {gacha.current?.data.executionInfo.excution10ConsumeGem}</span>
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
                usedGem={gachaStore.usedPrimoGem}
                inventoryList={gachaStore.inventoryList}
                four={gachaStore.fourStarCount}
                five={gachaStore.fiveStarCount}
                showVideo={isWatchingVideo}
                blankView={makeArrangeViewBlank}
              />
            </>
          </BoxModelWrapper>
        </>
      </ScreenInnerWrapper>
    </ContentWrapper>
  );
}
