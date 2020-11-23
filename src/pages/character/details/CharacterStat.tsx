import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { FlexWrapper } from 'src/components';
import { characterInfo, Level } from 'src/resources/data';

const Container = styled.div({
  width: '100%'
});

const LevelBox = styled.div({
  width: '80px',
  textAlign: 'center'
});

const StatBox = styled.div({
  width: '80px',
  textAlign: 'center'
});

const AdditionBox = styled.div({
  width: '200px',
  textAlign: 'center'
});

interface Props {
  character: string;
}

export function CharacterStat(props: Props) {
  const characterAscensionLevel = Object.keys(characterInfo[props.character].stats);

  return (
    <Layout title="Character Stat">
      <Container>
        <FlexWrapper styles={{ margin: '5px 0 0' }}>
          <LevelBox>Max Level</LevelBox>
          <LevelBox>Level</LevelBox>
          <StatBox>HP</StatBox>
          <StatBox>DEF</StatBox>
          <StatBox>ATK</StatBox>
          <AdditionBox>Additional</AdditionBox>
        </FlexWrapper>
        {characterAscensionLevel.map((level) => {
          return (
            <FlexWrapper key={level} styles={{ margin: '5px 0 0' }}>
              <LevelBox>{level}</LevelBox>
              <LevelBox>{characterInfo[props.character].stats[level as Level].Level}</LevelBox>
              <FlexWrapper>
                <StatBox>{characterInfo[props.character].stats[level as Level].HP}</StatBox>
                <StatBox>{characterInfo[props.character].stats[level as Level].DEF}</StatBox>
                <StatBox>{characterInfo[props.character].stats[level as Level].ATK}</StatBox>
                <AdditionBox>{characterInfo[props.character].stats[level as Level].Additional}</AdditionBox>
              </FlexWrapper>
            </FlexWrapper>
          );
        })}
      </Container>
    </Layout>
  );
}
