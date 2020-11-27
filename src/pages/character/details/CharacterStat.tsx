import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { FlexWrapper, CharacterStatRegexText, TableWrapper } from 'src/components';
import { characterInfo, Level } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '100%'
});

const Inner = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  '@media screen and (max-width: 1380px)': {},
  '@media screen and (max-width: 768px)': {},
  '@media screen and (max-width: 475px)': {
    justifyContent: 'space-between'
  }
});

const MaxLevelBox = styled.div({
  minWidth: '80px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '13px',
    minWidth: '70px'
  }
});

const LevelBox = styled.div({
  minWidth: '80px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '13px',
    minWidth: '40px'
  }
});

const StatBox = styled.div({
  minWidth: '100px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '13px'
  }
});

const AdditionBox = styled.div({
  minWidth: '200px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '13px',
    minWidth: '130px'
  }
});

interface Props {
  character: string;
}

export function CharacterStat(props: Props) {
  const characterAscensionLevel = Object.keys(characterInfo[props.character].stats);

  return (
    <Layout title={trans(Lang.Character_Stat)}>
      <Container>
        <TableWrapper
          header={
            <Inner>
              <MaxLevelBox>{trans(Lang.Max_Level)}</MaxLevelBox>
              <LevelBox>{trans(Lang.Level)}</LevelBox>
              <StatBox>{trans(Lang.HP)}</StatBox>
              <StatBox>{trans(Lang.DEF)}</StatBox>
              <StatBox>{trans(Lang.ATK)}</StatBox>
              <AdditionBox>{trans(Lang.Character_Additional)}</AdditionBox>
            </Inner>
          }
          body={characterAscensionLevel.map((level) => {
            return (
              <Inner key={level}>
                <MaxLevelBox>{trans(Lang[level as KeyLang])}</MaxLevelBox>
                <LevelBox>{characterInfo[props.character].stats[level as Level].Level}</LevelBox>
                <StatBox>{characterInfo[props.character].stats[level as Level].HP}</StatBox>
                <StatBox>{characterInfo[props.character].stats[level as Level].DEF}</StatBox>
                <StatBox>{characterInfo[props.character].stats[level as Level].ATK}</StatBox>
                <AdditionBox>
                  <CharacterStatRegexText>{characterInfo[props.character].stats[level as Level].Additional}</CharacterStatRegexText>
                </AdditionBox>
              </Inner>
            );
          })}
        />
        {/* <Inner>
          <MaxLevelBox>{trans(Lang.Max_Level)}</MaxLevelBox>
          <LevelBox>{trans(Lang.Level)}</LevelBox>
          <FlexWrapper styles={{ padding: '5px' }}>
            <AdditionBox>{trans(Lang.Stat)}</AdditionBox>
          </FlexWrapper>
        </Inner>
        {characterAscensionLevel.map((level) => {
          return (
            <Inner key={level}>
              <MaxLevelBox>{trans(Lang[level as KeyLang])}</MaxLevelBox>
              <LevelBox>{characterInfo[props.character].stats[level as Level].Level}</LevelBox>
              <FlexWrapper styles={{ flexDirection: 'column', padding: '5px' }}>
                <StatBox>
                  {trans(Lang.HP)}: {characterInfo[props.character].stats[level as Level].HP}
                </StatBox>
                <StatBox>
                  {trans(Lang.DEF)}: {characterInfo[props.character].stats[level as Level].DEF}
                </StatBox>
                <StatBox>
                  {trans(Lang.ATK)}: {characterInfo[props.character].stats[level as Level].ATK}
                </StatBox>
                <AdditionBox>
                  <CharacterStatRegexText>{characterInfo[props.character].stats[level as Level].Additional}</CharacterStatRegexText>
                </AdditionBox>
              </FlexWrapper>
            </Inner>
          );
        })} */}
      </Container>
    </Layout>
  );
}
