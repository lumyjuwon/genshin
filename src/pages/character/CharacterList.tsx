import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { characterInfo } from 'src/resources/data';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { ItemBadgeBox, RoundImage, FlexGridWrapper } from 'src/components';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1000px',
  minHeight: '80vh',
  margin: '0 auto',
  flexFlow: 'wrap',
  '@media screen and (max-width: 1380px)': {
    width: '700px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%'
  }
});

export function CharacterList() {
  const characters = Object.keys(characterInfo);

  function goToScrollTop() {
    window.scroll(0, 0);
  }

  return (
    <Container>
      <FlexGridWrapper styles={{ width: '100%' }}>
        {characters.map((name) => {
          const path = name.replace(/\s\(|\)|/g, '');
          return (
            <Link key={name} to={`/character/${path}`}>
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
                child={
                  <RoundImage
                    src={CharacterImages[name]}
                    styles={{ medium: { width: '90px', height: '90px' }, small: { width: '80px', height: '80px' } }}
                  />
                }
                onClick={() => goToScrollTop()}
                styles={{
                  boxStyles: { margin: '10px', small: { margin: '10px' } },
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
      </FlexGridWrapper>
    </Container>
  );
}
