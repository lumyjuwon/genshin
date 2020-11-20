import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { characterInfo } from 'src/resources/data';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { FlexWrapper, SquareImage, BoxModelWrapper, ItemBadgeBox, RoundImage, GridWrapper } from 'src/components';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1000px',
  minHeight: '80vh',
  margin: '0 auto',
  flexFlow: 'wrap'
});

export function CharacterList() {
  const characters = Object.keys(characterInfo);

  return (
    <Container>
      <GridWrapper styles={{ width: '100%' }}>
        {characters.map((name) => {
          return (
            <Link to={`/character/${name}`}>
              <ItemBadgeBox
                badge={
                  <RoundImage
                    src={ElementImages[characterInfo[name].element]}
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
                child={<RoundImage src={CharacterImages[name]} />}
                styles={{
                  boxStyles: { margin: '10px' },
                  badgePosition: { right: '-3px' },
                  tooltipStyles: { bottom: '0' }
                }}
                hoverInnerColor={'#f1f2f3'}
                tooltip={name}
                isActive={true}
                isHoverdToolTip={true}
                isToolTipVisible={true}
                isRankVisible={false}
                isBadgeVisible={true}
              />
            </Link>
          );
        })}
      </GridWrapper>
    </Container>
  );
}
