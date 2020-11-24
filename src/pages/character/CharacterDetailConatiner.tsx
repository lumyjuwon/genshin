import React from 'react';
import styled from 'styled-components';

import { FlexWrapper, ItemBadgeBox, RoundImage, TopButton } from 'src/components';
import { CharacterImages, ElementImages, TierImages } from 'src/resources/images';
import { characterInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { CharacterStat } from './details/CharacterStat';
import { CharacterAscensionMaterials } from './details/CharacterAscensionMaterials';
import { CharacterTalentMaterials } from './details/CharacterTalentMaterials';
import { CharactrerRecommendedParty } from './details/CharacterRecommendedParty';
import { CharactrerRecommendedEquip } from './details/CharacterRecommendedEquip';

interface Props {
  character: string;
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1000px',
  margin: '50px auto',
  '@media screen and (max-width: 1380px)': {
    width: '700px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%'
  }
});

const CharacterIntro = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: '0 auto'
});

const Name = styled.div({
  fontSize: '25px',
  fontWeight: 'bold',
  textAlign: 'left',
  '@media screen and (max-width: 768px)': {
    fontSize: '20px'
  }
});

const Description = styled.div({
  margin: '5px 0 0',
  fontSize: '16px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const Position = styled.div({
  fontSize: '16px',
  margin: '0 5px 0 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

export function CharacterDetailConatiner(props: Props) {
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
          <Name>{trans(Lang[props.character as KeyLang])}</Name>
          <FlexWrapper>
            <Description>{trans(Lang[characterInfo[props.character].region as KeyLang])}</Description>
            <Description>&nbsp;·&nbsp;</Description>
            <Description>{trans(Lang[characterInfo[props.character].weapon as KeyLang])}</Description>
          </FlexWrapper>
          <>
            {characterInfo[props.character].position.map((position) => {
              return (
                <FlexWrapper styles={{ margin: '3px 0 0' }}>
                  <Position>{trans(Lang[position as KeyLang])}</Position>
                  <RoundImage src={TierImages[characterInfo[props.character].tier[position]]} styles={{ width: '30px', height: '30px' }} />
                </FlexWrapper>
              );
            })}
          </>
        </FlexWrapper>
      </CharacterIntro>
      <FlexWrapper styles={{ width: '100%', alignItems: 'flex-start', flexDirection: 'column' }}>
        {/* Nav Button */}
        <CharacterStat character={props.character} />
        <CharacterAscensionMaterials character={props.character} />
        <CharacterTalentMaterials character={props.character} />
        {characterInfo[props.character].recommendedParty && <CharactrerRecommendedParty character={props.character} />}
        <CharactrerRecommendedEquip character={props.character} />
      </FlexWrapper>
      <TopButton />
    </Container>
  );
}
