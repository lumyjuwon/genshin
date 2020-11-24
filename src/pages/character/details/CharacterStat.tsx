import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { FlexWrapper } from 'src/components';
import { characterInfo, Level } from 'src/resources/data';

const Container = styled.div({
  width: '100%'
});

const Inner = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '5px 0 0',
  justifyContent: 'space-around',
  padding: '0 200px',
  '@media screen and (max-width: 1380px)': {
    padding: '0 100px'
  },
  '@media screen and (max-width: 768px)': {
    padding: '0 50px'
  },
  '@media screen and (max-width: 475px)': {
    justifyContent: 'space-between',
    padding: '0'
  }
});

const MaxLevelBox = styled.div({
  minWidth: '80px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px',
    minWidth: '75px'
  }
});

const LevelBox = styled.div({
  minWidth: '80px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px',
    minWidth: '60px'
  }
});

const StatBox = styled.div({
  minWidth: '100%',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

const AdditionBox = styled.div({
  minWidth: '200px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px',
    minWidth: '150px'
  }
});

const Line = styled.hr({
  width: '90%'
});

interface Props {
  character: string;
}

export function CharacterStat(props: Props) {
  const characterAscensionLevel = Object.keys(characterInfo[props.character].stats);

  return (
    <Layout title="Character Stat">
      <Container>
        <Inner>
          <MaxLevelBox>Max Level</MaxLevelBox>
          <LevelBox>Level</LevelBox>
          <AdditionBox>Stat</AdditionBox>
        </Inner>
        <Line />
        {characterAscensionLevel.map((level) => {
          return (
            <Inner key={level}>
              <MaxLevelBox>{level}</MaxLevelBox>
              <LevelBox>{characterInfo[props.character].stats[level as Level].Level}</LevelBox>
              <FlexWrapper styles={{ flexDirection: 'column' }}>
                <StatBox>HP: {characterInfo[props.character].stats[level as Level].HP}</StatBox>
                <StatBox>DEF: {characterInfo[props.character].stats[level as Level].DEF}</StatBox>
                <StatBox>ATK: {characterInfo[props.character].stats[level as Level].ATK}</StatBox>
                <AdditionBox>{characterInfo[props.character].stats[level as Level].Additional}</AdditionBox>
              </FlexWrapper>
            </Inner>
          );
        })}
      </Container>
    </Layout>
  );
}
