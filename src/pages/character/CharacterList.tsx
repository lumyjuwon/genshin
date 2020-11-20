import React, { useRef } from 'react';
import styled from 'styled-components';

import { characterInfo } from 'src/resources/data';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { FlexWrapper, SquareImage, BoxModelWrapper, ItemBadgeBox, RoundImage } from 'src/components';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

const Relative = styled.div({
  position: 'relative',
  display: 'flex',
  width: '1020px',
  height: '120px',
  margin: '0 auto',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const HorizontalScroll = styled.div({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  top: 0,
  left: 0,
  width: '120px',
  height: '900px',
  overflowY: 'auto',
  overflowX: 'hidden',
  transform: 'rotate(-90deg) translateY(-60px)',
  transformOrigin: 'right top',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  '&>*': {
    transform: 'rotate(90deg)'
  },
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  }
});

const ScrollButton = styled.div({
  width: '50px',
  padding: '10px',
  fontSize: '30px',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: '.2s',
  '&:hover': {
    backgroundColor: '#f1f2f3',
    color: '#222324'
  }
});

export function CharacterList() {
  const characters = Object.keys(characterInfo);
  const scrollableRef = useRef<HTMLDivElement>(null);

  function onScrollButtonClick(scrollGap: number) {
    scrollableRef.current?.scrollBy(0, scrollGap);
  }

  return (
    <Relative>
      <ScrollButton onClick={() => onScrollButtonClick(-300)}>
        <i className="fas fa-chevron-left"></i>
      </ScrollButton>
      <HorizontalScroll ref={scrollableRef}>
        {characters.map((character) => {
          return (
            <ItemBadgeBox
              badge={
                <RoundImage
                  src={ElementImages[characterInfo[character].element]}
                  styles={{
                    width: '30px',
                    height: '30px',
                    small: {
                      width: '25px',
                      height: '25px'
                    }
                  }}
                />
              }
              child={<RoundImage src={CharacterImages[character]} />}
              styles={{
                boxStyles: { margin: '10px' },
                badgePosition: { right: '-3px' },
                tooltipStyles: { bottom: '0' }
              }}
              hoverInnerColor={'#f1f2f3'}
              tooltip={character}
              onClick={() => alert(character)}
              isActive={true}
              isHoverdToolTip={false}
              isToolTipVisible={true}
              isRankVisible={false}
              isBadgeVisible={true}
            />
          );
        })}
      </HorizontalScroll>
      <ScrollButton onClick={() => onScrollButtonClick(300)}>
        <i className="fas fa-chevron-right"></i>
      </ScrollButton>
    </Relative>
  );
}
