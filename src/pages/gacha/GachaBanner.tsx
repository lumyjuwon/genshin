import React, { useEffect, useRef, useState } from 'react';

import { BoxModelWrapper, DropDownButton, FlexWrapper, RoundImageButton } from 'src/components';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { WishClickImages } from 'src/resources/images';
import { GachaDetails } from './GachaDetails';

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
  video: boolean;
}

export function GachaBanner(props: Props) {
  const wishListRef = useRef<HTMLDivElement>(null);
  const [clickedWishIndex, setClickedWishIndex] = useState<number>(0);

  function onClickBannerImages(index: number) {
    props.onClick(index);
    setClickedWishIndex(index);
  }

  function getImagePath(content: string, index: number) {
    if (clickedWishIndex === index) {
      return WishClickImages[`${content}_Selected`];
    } else {
      return WishClickImages[content];
    }
  }

  return (
    <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 20px' }}>
      <>
        {props.video ? (
          <FlexWrapper styles={{ alignItems: 'flex-end' }}>
            {props.pickUpList.map((content, index) => {
              return (
                <BoxModelWrapper styles={{ margin: '0 20px 0 0', medium: { margin: '0 20px 0 0' } }}>
                  <RoundImageButton
                    src={getImagePath(content, index)}
                    onClick={() => onClickBannerImages(index)}
                    styles={{
                      imageStyles: { width: '130px', height: '65px' },
                      buttonStyles: { pointerEvents: 'none', border: 'none' }
                    }}
                  />
                </BoxModelWrapper>
              );
            })}
          </FlexWrapper>
        ) : (
          <FlexWrapper styles={{ alignItems: 'flex-end' }}>
            {props.pickUpList.map((content, index) => {
              return (
                <BoxModelWrapper styles={{ margin: '0 20px 0 0', medium: { margin: '0 20px 0 0' } }}>
                  <RoundImageButton
                    src={getImagePath(content, index)}
                    onClick={() => onClickBannerImages(index)}
                    styles={{ imageStyles: { width: '130px', height: '65px' }, buttonStyles: { border: 'none' } }}
                  />
                </BoxModelWrapper>
              );
            })}
          </FlexWrapper>
        )}
        <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  );
}
