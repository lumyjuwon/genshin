import React from 'react';
import styled from 'styled-components';

import { trans, Lang, KeyLang } from 'src/resources/languages';
import { FlexWrapper, GridWrapper, RoundImage, ItemBadgeBox } from 'src/components';
import { weeklyBossItemInfo, characterInfo } from 'src/resources/data';
import { WeeklyBossItemImages, ElementImages, CharacterImages } from 'src/resources/images';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0 0'
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

const DisplayNone = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    display: 'none'
  }
});

const ItemName = styled.div({
  fontSize: '14px',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px'
  }
});

const Obtain = styled.div({
  width: '160px',
  fontSize: '14px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    margin: '5px 0 0',
    width: '130px',
    fontSize: '12px'
  }
});

interface Props {
  onClick: Function;
}

export function TalentWeeklyBoss(props: Props) {
  return (
    <Container>
      <Title>Weekly Boss Item</Title>
      <FlexWrapper styles={{ flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0 0' }}>
        <>
          <FlexWrapper>
            <DisplayNone>
              <FlexWrapper styles={{ width: '230px' }}>{trans(Lang.Character_Item)}</FlexWrapper>
              <FlexWrapper styles={{ width: '160px' }}>Obtain</FlexWrapper>
              <FlexWrapper styles={{ width: '400px', medium: { width: '350px' } }}>Character</FlexWrapper>
            </DisplayNone>
          </FlexWrapper>
          <FlexWrapper styles={{ flexDirection: 'column' }}>
            {Object.keys(weeklyBossItemInfo).map((item) => {
              return (
                <FlexWrapper styles={{ margin: '10px 0 0', small: { flexDirection: 'column' } }}>
                  <FlexWrapper styles={{ width: '230px', justifyContent: 'flex-start' }}>
                    <ImageWrapper>
                      <RoundImage src={WeeklyBossItemImages[item]} styles={{ width: '60px', height: '60px' }} />
                    </ImageWrapper>
                    <FlexWrapper styles={{ justifyContent: 'flex-start' }}>
                      <ItemName>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</ItemName>
                    </FlexWrapper>
                  </FlexWrapper>
                  <FlexWrapper styles={{ flexDirection: 'column', small: { flexDirection: 'row' } }}>
                    {weeklyBossItemInfo[item].obtain.map((location) => {
                      return <Obtain>{trans(Lang[location.replace(/\s/g, '_') as KeyLang])}</Obtain>;
                    })}
                  </FlexWrapper>
                  <GridWrapper styles={{ width: '400px', medium: { width: '350px' } }}>
                    {Object.keys(characterInfo).map((character) => {
                      if (characterInfo[character].talent.boss === item) {
                        return (
                          <ItemBadgeBox
                            key={character.concat('_ascension')}
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
                </FlexWrapper>
              );
            })}
          </FlexWrapper>
        </>
      </FlexWrapper>
    </Container>
  );
}
