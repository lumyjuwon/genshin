import React from 'react';
import styled from 'styled-components';

import { characterInfo } from 'src/resources/data';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { FlexWrapper, SquareImage, BoxModelWrapper, ItemBadgeBox, RoundImage } from 'src/components';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

const Relative = styled.div({
  position: 'relative',
  width: '900px',
  margin: '0 auto'
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
  transform: 'rotate(-90deg) translateY(-100px)',
  transformOrigin: 'right top',
  scrollbarWidth: 'none',
  '&>*': {
    transform: 'rotate(90deg)'
  },
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  }
});

export function CharacterList() {
  const characters = Object.keys(characterInfo);

  return (
    <Relative>
      <HorizontalScroll>
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
                boxStyles: { hoverInnerColor: '#f1f2f3' }
              }}
              onClick={() => alert(character)}
              isActive={true}
              isHoverdToolTip={false}
              isToolTipVisible={false}
              isRankVisible={false}
              isBadgeVisible={true}
            />
          );
        })}
      </HorizontalScroll>
    </Relative>
  );
}
