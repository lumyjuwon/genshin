import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, characterInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, ItemBadgeBox, TooltipText, FlexWrapper } from 'src/components';
import { DailySetImages, CharacterImages, ElementImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const ImageWrapper = styled.div({
  display: 'flex',
  width: '70px',
  justifyContent: 'center',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px',
  fontWeight: 'bold'
});

const DayText = styled.div({
  width: '220px',
  fontSize: '14px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px',
    width: '180px'
  }
});

const RelativeBox = styled.div({
  position: 'relative'
});

const DisplayNone = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    display: 'none'
  }
});

interface Props {
  onClick: Function;
}

export function CharacterTalent(props: Props) {
  const talentSet = Object.keys(characterTalentItemInfo);
  const characters = Object.keys(characterInfo);

  return (
    <Container>
      <Title>Character Talent</Title>
      <FlexWrapper styles={{ flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0 0' }}>
        <>
          <FlexWrapper>
            <DisplayNone>
              <FlexWrapper styles={{ width: '70px' }}>{trans(Lang.Character_Item)}</FlexWrapper>
              <FlexWrapper styles={{ width: '220px' }}>{trans(Lang.Character_Day)}</FlexWrapper>
              <FlexWrapper styles={{ width: '500px', medium: { width: '400px' } }}>{trans(Lang.Character)}</FlexWrapper>
            </DisplayNone>
          </FlexWrapper>
          {talentSet.map((set) => {
            return (
              <FlexWrapper styles={{ margin: '10px 0 0', width: '100%', small: { flexDirection: 'column' } }} key={set}>
                <>
                  <FlexWrapper>
                    <ImageWrapper>
                      <RelativeBox>
                        <RoundImage src={DailySetImages[set]} styles={{ width: '60px', height: '60px' }} />
                        <TooltipText styles={{ bottom: '0', fontSize: '12px' }}>{trans(Lang[set as KeyLang])}</TooltipText>
                      </RelativeBox>
                    </ImageWrapper>
                    <DayText>{characterTalentItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</DayText>
                  </FlexWrapper>
                  <GridWrapper styles={{ width: '500px', medium: { width: '400px' } }}>
                    {characters.map((character) => {
                      if (characterInfo[character].talent.book === set) {
                        return (
                          <ItemBadgeBox
                            key={character.concat('_talent')}
                            badge={
                              <RoundImage
                                src={ElementImages[characterInfo[character].element]}
                                styles={{ width: '20px', height: '20px' }}
                              />
                            }
                            child={
                              <RoundImage
                                src={CharacterImages[character]}
                                styles={{
                                  width: '60px',
                                  height: '60px',
                                  medium: { width: '50px', height: '50px' },
                                  small: { width: '50px', height: '50px' }
                                }}
                              />
                            }
                            styles={{
                              boxStyles: { margin: '3px', small: { margin: '6px 3px 3px' } }
                            }}
                            isActive={true}
                            onClick={() => props.onClick(character)}
                            hoverInnerColor="#f1f2f3"
                            isToolTipVisible={false}
                            isRankVisible={false}
                          />
                        );
                      } else return null;
                    })}
                  </GridWrapper>
                </>
              </FlexWrapper>
            );
          })}
        </>
      </FlexWrapper>
    </Container>
  );
}
