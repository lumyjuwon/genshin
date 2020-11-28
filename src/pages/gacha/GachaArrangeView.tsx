import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { characterInfo, weaponInfo } from 'src/resources/data';
import { FlexWrapper, SquareImage, TextCenterWrapper, TooltipText } from 'src/components';
import { trans, Lang } from 'src/resources/languages';
import { changeItemNameToKeyLang } from 'src/utils';

const GridContainer = styled.div({
  backgroundColor: '#333',
  display: 'grid',
  width: '1300px',
  height: '400px',
  gridTemplateColumns: 'repeat(auto-fit, 110px)',
  columnGap: '12px',
  textAlign: 'center',
  padding: '0 15px',
  alignItems: 'center',
  justifyItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  '@media screen and (max-width: 1380px)': {
    width: '700px',
    gridTemplateColumns: 'repeat(5, 110px)',
    columnGap: '10px',
    gridTemplateRows: 'repeat(auto-fit, 220px)',
    rowGap: '20px',
    height: '500px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    gridTemplateColumns: 'repeat(3, 70px)',
    gridTemplateRows: 'repeat(auto-fit, 70px)',
    height: '450px'
  }
});

const HoverVisibleElement = styled.div({
  visibility: 'hidden'
});

const VideoBox = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%'
});

const Video = styled.video({
  width: '100%',
  height: '100%',
  objectFit: 'fill'
});

const ItemAnimation = keyframes`
  0% {
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HoverTransform = styled.div<{ delay: number }>`
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: ${ItemAnimation} 0.4s ${(props) => props.delay * 0.2}s forwards;
  &:hover ${HoverVisibleElement} {
    visibility: visible;
  }
`;

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1300px',
  height: '400px',
  backgroundColor: '#333',
  margin: '0 auto',
  '@media screen and (max-width: 1380px)': {
    width: '700px',
    height: '500px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%',
    height: '450px'
  }
});

const SkipButton = styled.div({
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '14px',
  backgroundColor: 'rgba(0, 0, 0, .4)',
  cursor: 'pointer',
  padding: '10px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }
});

interface Props {
  result: Array<string>;
  video: boolean;
  turnOff: Function;
}

const Items = Object.assign({}, characterInfo, weaponInfo);

export function GachaArrangeView(props: Props) {
  const shadowPal: { five: string; four: string } = {
    five: '0 0 8px 2px #a86d1f, 0px 10px 5px #a86d1f, 0px -10px 5px #a86d1f',
    four: '0 0 8px 2px #b182c4, 0px 10px 5px #b182c4, 0px -10px 5px #b182c4'
  };
  let videoPath = require('../../resources/video/gacha/4starwish.mp4');

  useEffect(() => {
    document.getElementById('gacha-video')?.addEventListener('ended', turnOff);

    return document.getElementById('gacha-video')?.addEventListener('ended', turnOff);
  });

  function turnOff() {
    props.turnOff();
  }

  props.result.forEach((result) => {
    if (Items[result].rank === 5) {
      videoPath = require('../../resources/video/gacha/5starwish.mp4');
    }
  });

  if (props.result.length) {
    return (
      <Container>
        {props.video ? (
          <VideoBox>
            <Video autoPlay id="gacha-video">
              <source src={videoPath} />
            </Video>
            <SkipButton onClick={() => turnOff()}>Skip</SkipButton>
          </VideoBox>
        ) : (
          <FlexWrapper>
            <GridContainer>
              {props.result.map((item: string, index: number) => {
                let shadow = '0 0 8px 2px #777, 0px 8px 5px #777, 0px -8px 5px #777';
                if (characterInfo[item]) {
                  if (characterInfo[item].rank === 5) shadow = shadowPal.five;
                  else if (characterInfo[item].rank === 4) shadow = shadowPal.four;
                } else {
                  if (weaponInfo[item].rank === 5) shadow = shadowPal.five;
                  else if (weaponInfo[item].rank === 4) shadow = shadowPal.four;
                }
                let imagePath = require(`../../resources/images/gacha/${item}.png`);
                if (window.innerWidth <= 768 && characterInfo[item]) imagePath = require(`../../resources/images/characters/${item}.png`);

                return (
                  <HoverTransform key={index} delay={index}>
                    <SquareImage
                      styles={{
                        width: '110px',
                        height: '300px',
                        boxShadow: `${shadow}`,
                        objectFit: 'none',
                        medium: { height: '220px' },
                        small: { width: '70px', height: '70px' }
                      }}
                      src={imagePath}
                    />
                    <HoverVisibleElement>
                      <TooltipText styles={{ small: { fontSize: '14px' } }}>{trans(Lang[changeItemNameToKeyLang(item)])}</TooltipText>
                    </HoverVisibleElement>
                  </HoverTransform>
                );
              })}
            </GridContainer>
          </FlexWrapper>
        )}
      </Container>
    );
  } else {
    return (
      <Container>
        <FlexWrapper
          styles={{
            small: { flexDirection: 'column' }
          }}
        >
          <>
            <SquareImage styles={{ width: '300x', height: '370px' }} src={require('../../resources/images/characters/Flying Paimon.gif')} />
            <TextCenterWrapper styles={{ fontSize: '25px', small: { fontSize: '18px' } }}>
              <>
                <span role="img" aria-label="comment">
                  💬&nbsp;
                </span>
                {trans(Lang.Blank_Arrange_View)}
              </>
            </TextCenterWrapper>
          </>
        </FlexWrapper>
      </Container>
    );
  }
}
