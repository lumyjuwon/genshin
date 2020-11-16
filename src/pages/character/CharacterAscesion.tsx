import React from 'react';
import styled from 'styled-components';

import { characterAscensionItemInfo, characterInfo } from 'src/resources/data';
import { CharacterAscentionItemImages, ElementImages } from 'src/resources/images';
import { RoundImage, RoundImageBox, GridWrapper, ItemBadgeBox } from 'src/components';
import { CharacterImages } from 'src/resources/images';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px 0 0'
});

const GridTable = styled.div({
  display: 'grid',
  gridTemplateColumns: '70px 170px 100px 450px',
  gridTemplateRows: 'repeat(auto-fit)',
  width: 'max-content',
  rowGap: '10px',
  margin: '30px auto',
  justifyItems: 'center',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px',
  fontWeight: 'bold'
});

const RelativeBox = styled.div({
  position: 'relative'
});

const ItemName = styled.div({
  fontSize: '14px'
});

interface Props {}

export function CharacterAscesion(props: Props) {
  const ascensionItems = Object.keys(characterAscensionItemInfo);
  const characters = Object.keys(characterInfo);

  return (
    <Container>
      <Title>Character Ascension Items</Title>
      <GridTable>
        <div>Item</div>
        <div>Name</div>
        <div>Region</div>
        <div>Characters</div>
        {ascensionItems.map((item) => {
          return (
            <>
              <RelativeBox>
                <RoundImage src={CharacterAscentionItemImages[item]} styles={{ width: '60px', height: '60px' }} />
              </RelativeBox>
              <ItemName>{item}</ItemName>
              <div>{characterAscensionItemInfo[item].region}</div>
              <GridWrapper styles={{ width: '100%' }}>
                {characters.map((character) => {
                  if (characterInfo[character].ascension.items.includes(item)) {
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
                        onClick={() => {}}
                        hoverInnerColor="#f1f2f3"
                        isToolTipVisible={false}
                        isRankVisible={false}
                      />
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
