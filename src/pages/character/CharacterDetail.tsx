import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, ItemBadgeBox, RoundImage } from 'src/components';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { characterInfo } from 'src/resources/data';
import {} from 'src/resources/languages';

interface Props {
  character: string;
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1000px',
  margin: '50px auto'
});

const CharacterIntro = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto'
});

const Name = styled.div({
  fontSize: '22px',
  fontWeight: 'bold',
  textAlign: 'left'
});

const Description = styled.div({
  margin: '5px 0 0',
  fontSize: '16px'
});

export function CharacterDetail(props: Props) {
  return (
    <Container>
      <CharacterIntro>
        <ItemBadgeBox
          badge={
            <RoundImage
              src={ElementImages[characterInfo[props.character].element]}
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
          child={<RoundImage src={CharacterImages[props.character]} />}
          styles={{
            boxStyles: { margin: '10px' },
            tooltipStyles: { bottom: '0' }
          }}
          isActive={false}
          isHoverdToolTip={false}
          isToolTipVisible={false}
          isRankVisible={false}
          isBadgeVisible={true}
        />
        <FlexWrapper styles={{ flexDirection: 'column', margin: '0 0 0 20px', alignItems: 'flex-start' }}>
          <Name>{props.character}</Name>
          {/* Region, Weapon */}
        </FlexWrapper>
      </CharacterIntro>
      <FlexWrapper styles={{ width: '100%', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Description>{characterInfo[props.character].position.join(', ')}</Description>
        {/* Nav Button */}
        {/* Stat */}
        {/* Talent */}
        {/* Passive Talent */}
        {/* Constellations */}
        {/* Ascension Items */}
        {/* Talent Level up items */}
      </FlexWrapper>
    </Container>
  );
}
