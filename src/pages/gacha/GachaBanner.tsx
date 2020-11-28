import React, { useState } from 'react';

import { CSSGridWrapper, FlexWrapper, RoundImageButton } from 'src/components';
import { WishClickImages } from 'src/resources/images';
import { GachaDetails } from './GachaDetails';

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
  video: boolean;
}

export function GachaBanner(props: Props) {
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
    <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 20px', alignItems: 'flex-end' }}>
      <>
        {props.video ? (
          <CSSGridWrapper
            styles={{
              gridTemplateColumns: 'repeat(auto-fit, 130px)',
              placeContent: 'left center',
              columnGap: '20px',
              margin: '0',
              medium: { gridTemplateColumns: 'repeat(auto-fit, 130px)', columnGap: '20px' },
              small: { gridTemplateColumns: 'repeat(auto-fit, 100px)', columnGap: '12px', rowGap: '12px' }
            }}
          >
            {props.pickUpList.map((content, index) => {
              return (
                <RoundImageButton
                  src={getImagePath(content, index)}
                  onClick={() => onClickBannerImages(index)}
                  styles={{
                    imageStyles: { width: '130px', height: '65px', small: { width: '80px', height: '40px' } },
                    buttonStyles: { border: 'none', margin: '0', pointerEvents: 'none' }
                  }}
                />
              );
            })}
          </CSSGridWrapper>
        ) : (
          <CSSGridWrapper
            styles={{
              gridTemplateColumns: 'repeat(auto-fit, 130px)',
              placeContent: 'left center',
              columnGap: '20px',
              margin: '0',
              medium: { gridTemplateColumns: 'repeat(auto-fit, 130px)', columnGap: '20px' },
              small: { gridTemplateColumns: 'repeat(auto-fit, 100px)', columnGap: '12px', rowGap: '12px' }
            }}
          >
            {props.pickUpList.map((content, index) => {
              return (
                <RoundImageButton
                  src={getImagePath(content, index)}
                  onClick={() => onClickBannerImages(index)}
                  styles={{
                    imageStyles: { width: '130px', height: '65px', small: { width: '80px', height: '40px' } },
                    buttonStyles: { border: 'none', margin: '0' }
                  }}
                />
              );
            })}
          </CSSGridWrapper>
        )}
        <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  );
}
