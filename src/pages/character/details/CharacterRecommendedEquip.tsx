import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { CharacterImages, ElementImages, ArtifactSetImages, ItemImages } from 'src/resources/images';
import { BoxModelWrapper, FlexWrapper, RoundImage } from 'src/components';
import { characterInfo, artifactSetInfo, weaponInfo } from 'src/resources/data';
import { KeyLang, trans, Lang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';

const FlexBox = styled.div({
  display: 'flex',
  flex: '1 1',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px',
  '@media screen and (max-width: 768px)': {
    width: '100%'
  }
});

const ListName = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'left',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const Name = styled.div({
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const Line = styled.hr({
  width: '100%'
});

const BuffText = styled.div({
  margin: '3px 0 0',
  textAlign: 'center',
  wordBreak: 'keep-all'
});

const StarEmoji = styled.span({
  display: 'inline-block',
  margin: '0 0 0 -5px',
  letterSpacing: '-10px',
  fontSize: '16px',
  width: '100%',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    margin: '0 0 0 -10px',
    letterSpacing: '-10px',
    fontSize: '14px'
  }
});

interface Props {
  character: string;
}

export function CharactrerRecommendedEquip(props: Props) {
  const recommendedEquipInfo = characterInfo[props.character].recommendedEquip;
  const TWO_PIECE = '_TwoPieceSet';
  const FOUR_PIECE = '_FourPieceSet';

  function pushArtifactSetBuff(name: string, count: number, list: Array<string>) {
    if (count >= 2) {
      list.push(trans(Lang[name.concat(TWO_PIECE) as KeyLang]));
    }
    if (count >= 4) {
      list.push(trans(Lang[name.concat(FOUR_PIECE) as KeyLang]));
    }
  }

  return (
    <Layout title={trans(Lang.Recommended_Equip)}>
      <FlexWrapper styles={{ width: '100%', small: { width: '100%', flexDirection: 'column' } }}>
        <FlexBox>
          {Object.keys(recommendedEquipInfo.artifact).map((info, index) => {
            const artifactBuff: Array<string> = [];
            return (
              <FlexWrapper styles={{ flexDirection: 'column', margin: '20px 0 0', width: '100%' }}>
                <ListName>
                  {trans(Lang.Recommended_Artifact)} #{index + 1}
                </ListName>
                <Line />
                <>
                  {recommendedEquipInfo.artifact[info].name.map((set) => {
                    const replacedName = set.replace(/\s/g, '').replace(/'s/g, 'Of');
                    pushArtifactSetBuff(replacedName, recommendedEquipInfo.artifact[info].set, artifactBuff);
                    return (
                      <>
                        <RoundImage src={ArtifactSetImages[replacedName]} styles={{ width: '70px', height: '70px' }} />
                        <Name>{trans(Lang[set.replace(/'s/g, 'Of').replace(/\s/g, '') as KeyLang])}</Name>
                        <div>Set: {recommendedEquipInfo.artifact[info].set}</div>
                      </>
                    );
                  })}
                </>
                <FlexWrapper styles={{ flexDirection: 'column', margin: '5px 0 0' }}>
                  <div>{trans(Lang.Artifact_Effect)}</div>
                  <>
                    {artifactBuff.map((buff) => {
                      return (
                        <BuffText>
                          <RegexColorText regex={/\d+%/g} color={'red'} isBold>
                            {buff}
                          </RegexColorText>
                        </BuffText>
                      );
                    })}
                  </>
                </FlexWrapper>
              </FlexWrapper>
            );
          })}
        </FlexBox>
        <FlexBox>
          {recommendedEquipInfo.weapon.map((item: string, index) => {
            return (
              <FlexWrapper styles={{ flexDirection: 'column', margin: '20px 0 0', width: '100%', small: { width: '100%' } }}>
                <ListName>
                  {trans(Lang.Recommended_Weapon)} #{index + 1}
                </ListName>
                <Line />
                <RoundImage src={ItemImages[item]} styles={{ width: '80px', height: '80px' }} />
                <StarEmoji role="img">{'⭐'.repeat(weaponInfo[item].rank)}</StarEmoji>
                <Name>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</Name>
              </FlexWrapper>
            );
          })}
        </FlexBox>
      </FlexWrapper>
    </Layout>
  );
}
