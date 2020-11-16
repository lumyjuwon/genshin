import React from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, characterInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, ItemBadgeBox, TooltipText } from 'src/components';
import { DailySetImages, CharacterImages, ElementImages } from 'src/resources/images';
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
  fontSize: '20px',
  fontWeight: 'bold'
});

const DayText = styled.p({
  fontSize: '14px'
});

const RelativeBox = styled.div({
  position: 'relative'
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
      <GridTable>
        <div>Item</div>
        <div>Day</div>
        <div>Characters</div>
        {talentSet.map((set) => {
          return (
            <React.Fragment key={set}>
              <RelativeBox>
                <RoundImage src={DailySetImages[set]} styles={{ width: '60px', height: '60px' }} />
                <TooltipText styles={{ bottom: '0', fontSize: '12px' }}>{trans(Lang[set as KeyLang])}</TooltipText>
              </RelativeBox>
              <DayText>{characterTalentItemInfo[set].day.join(', ')}</DayText>
              <GridWrapper styles={{ width: '100%' }}>
                {characters.map((character) => {
                  if (characterInfo[character].talent.item === set) {
                    return (
                      <ItemBadgeBox
                        badge={
                          <RoundImage src={ElementImages[characterInfo[character].element]} styles={{ width: '20px', height: '20px' }} />
                        }
                        child={<RoundImage src={CharacterImages[character]} styles={{ width: '60px', height: '60px' }} />}
                        styles={{
                          boxStyles: { margin: '3px' }
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
            </React.Fragment>
          );
        })}
      </GridTable>
    </Container>
  );
}
