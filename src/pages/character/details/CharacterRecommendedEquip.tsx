import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { CharacterImages, ElementImages, ArtifactSetImages, ItemImages } from 'src/resources/images';
import { FlexWrapper, RoundImage } from 'src/components';
import { characterInfo, artifactSetInfo, weaponInfo } from 'src/resources/data';
import { KeyLang, trans, Lang } from 'src/resources/languages';

const FlexBox = styled.div({
  display: 'flex',
  flex: '1 1',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 20px'
});

const ListName = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'left'
});

const Name = styled.div({
  fontSize: '18px',
  fontWeight: 'bold'
});

const BuffText = styled.div({
  margin: '3px 0 0',
  textAlign: 'center'
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

  function pushArtifactSetBuff(name: string, count: number, list: Array<string>) {
    if (count >= 2) {
      list.push(trans(Lang[name.concat('_TwoPieceSet') as KeyLang]));
    }
    if (count >= 4) {
      list.push(trans(Lang[name.concat('_FourPieceSet') as KeyLang]));
    }
  }

  return (
    <Layout title="Recommended Equipments">
      <FlexWrapper styles={{ width: '100%', small: { width: '100%', flexDirection: 'column' } }}>
        <FlexBox>
          {Object.keys(recommendedEquipInfo.artifact).map((info, index) => {
            const artifactBuff: Array<string> = [];
            return (
              <FlexWrapper styles={{ flexDirection: 'column', margin: '20px 0 0', width: '100%' }}>
                <ListName>Recommended Aritfact #{index + 1}</ListName>
                <>
                  {recommendedEquipInfo.artifact[info].name.map((set) => {
                    const replacedName = set.replace(/\s/g, '').replace(/'s/g, 'Of');
                    pushArtifactSetBuff(replacedName, recommendedEquipInfo.artifact[info].set, artifactBuff);
                    return (
                      <>
                        <RoundImage src={ArtifactSetImages[replacedName]} styles={{ width: '70px', height: '70px' }} />
                        <Name>{set}</Name>
                        <div>Set: {recommendedEquipInfo.artifact[info].set}</div>
                      </>
                    );
                  })}
                </>
                <FlexWrapper styles={{ flexDirection: 'column', margin: '5px 0 0' }}>
                  <div>Effect</div>
                  <>
                    {artifactBuff.map((buff) => {
                      return <BuffText>{buff}</BuffText>;
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
              <FlexWrapper styles={{ flexDirection: 'column', margin: '20px 0 0', width: '100%' }}>
                <ListName>Recommended Weapon #{index + 1}</ListName>
                <RoundImage src={ItemImages[item]} styles={{ width: '80px', height: '80px' }} />
                <StarEmoji role="img">{'⭐'.repeat(weaponInfo[item].rank)}</StarEmoji>
                <Name>{item}</Name>
              </FlexWrapper>
            );
          })}
        </FlexBox>
      </FlexWrapper>
    </Layout>
  );
}
