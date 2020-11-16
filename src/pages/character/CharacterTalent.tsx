import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, characterInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, RoundImageBox } from 'src/components';
import { DailySetImages, CharacterImages } from 'src/resources/images';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const GridTable = styled.div({
  display: 'grid',
  gridTemplateColumns: '65px 220px 500px',
  gridTemplateRows: 'repeat(auto-fit)',
  rowGap: '10px',
  margin: '20px 0 30px',
  justifyItems: 'center',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px'
});

const DayText = styled.div({
  fontSize: '14px'
});

interface Props {}

export function CharacterTalent(props: Props) {
  const talentSet = Object.keys(characterTalentItemInfo);
  const characters = Object.keys(characterInfo);

  return (
    <Container>
      <Title>Character Talent</Title>
      <GridTable>
        <div>Item</div>
        <div>Day</div>
        <div>Characters</div>
        {talentSet.map((set) => {
          return (
            <>
              <RoundImage src={DailySetImages[set]} styles={{ width: '60px', height: '60px' }} />
              <DayText>{characterTalentItemInfo[set].day.join(', ')}</DayText>
              <GridWrapper styles={{ width: '100%' }}>
                {characters.map((character) => {
                  if (characterInfo[character].Talent.item === set) {
                    return (
                      <a href={`#${character}`}>
                        <RoundImageBox
                          src={CharacterImages[character]}
                          styles={{ boxStyle: { margin: '0', border: 'none' }, imageStyle: { width: '60px', height: '60px' } }}
                        />
                      </a>
                    );
                  } else return null;
                })}
              </GridWrapper>
            </>
          );
        })}
        {/* {days.map((day) => {
          let talentBook: string[] = [];
          return (
            <>
              <div>{day}</div>
              <div>
                {talentSet.map((set) => {
                  if (characterTalentItemInfo[set].day.includes(day)) {
                    talentBook.push(set);
                    return <RoundImage src={DailySetImages[set]} />;
                  } else {
                    return null;
                  }
                })}
              </div>
              <div>
                {characters.map((character) => {
                  if (talentBook.includes(characterInfo[character].Talent.item)) {
                    return <RoundImage src={CharacterImages[character]} />;
                  } else return null;
                })}
              </div>
            </>
          );
        })} */}
      </GridTable>
    </Container>
  );
}
