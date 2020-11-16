import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, characterInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, RoundImageBox, TooltipText } from 'src/components';
import { DailySetImages, CharacterImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const GridTable = styled.div({
  display: 'grid',
  gridTemplateColumns: '70px 220px 500px',
  gridTemplateRows: 'repeat(auto-fit)',
  rowGap: '10px',
  margin: '20px 0 30px',
  justifyItems: 'center',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px'
});

const DayText = styled.p({
  fontSize: '14px'
});

const RelativeBox = styled.div({
  position: 'relative'
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
              <RelativeBox>
                <RoundImage src={DailySetImages[set]} styles={{ width: '60px', height: '60px' }} />
                <TooltipText styles={{ bottom: '0', fontSize: '12px' }}>{trans(Lang[set as KeyLang])}</TooltipText>
              </RelativeBox>
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
      </GridTable>
    </Container>
  );
}
