import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { ArtifactSetImages, ItemImages } from 'src/resources/images';
import { FlexWrapper, ItemContentBox, RoundImage, CSSGridWrapper } from 'src/components';
import { characterInfo, weaponInfo } from 'src/resources/data';
import { KeyLang, trans, Lang } from 'src/resources/languages';
import { RegexColorText } from 'src/components/text/RegexColorText';

const ListName = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'left',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const BuffText = styled.div({
  margin: '10px 0 0',
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

const Set = styled.div({
  fontSize: '14px',
  textAlign: 'center',
  margin: '5px 0 0',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px'
  }
});

const GridItem = styled.div({
  alignSelf: 'stretch',
  display: 'grid',
  gridTemplateColumns: '100%',
  gridTemplateRows: 'min-content',
  width: '100%'
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
      <CSSGridWrapper
        styles={{
          gridTemplateColumns: 'repeat(2, 450px)',
          columnGap: '20px',
          rowGap: '30px',
          medium: { gridTemplateColumns: 'repeat(2, 300px)', columnGap: '20px', rowGap: '30px' },
          small: { gridTemplateColumns: 'repeat(auto-fit, 240px)', columnGap: '20px', rowGap: '30px' }
        }}
      >
        <>
          {Object.keys(recommendedEquipInfo.artifact).map((info, index) => {
            return (
              <GridItem key={info}>
                <ListName>
                  {trans(Lang.Recommended_Artifact)} #{index + 1}
                </ListName>
                <>
                  {recommendedEquipInfo.artifact[info].name.map((set) => {
                    const artifactBuff: Array<string> = [];
                    const replacedName = set.replace(/\s/g, '').replace(/'s/g, 'Of');
                    pushArtifactSetBuff(replacedName, recommendedEquipInfo.artifact[info].set, artifactBuff);
                    return (
                      <ItemContentBox
                        key={set}
                        image={<RoundImage src={ArtifactSetImages[replacedName]} styles={{ width: '70px', height: '70px' }} />}
                        name={trans(Lang[set.replace(/'s/g, 'Of').replace(/\s/g, '') as KeyLang])}
                        styles={{ containerStyle: { margin: '15px 0 0' } }}
                      >
                        <Set>Set: {recommendedEquipInfo.artifact[info].set}</Set>
                        <>
                          {artifactBuff.map((buff) => {
                            return (
                              <BuffText key={buff}>
                                <RegexColorText regex={/\d+%|\+\d/g} color={'red'} isBold styles={{ small: { fontSize: '12px' } }}>
                                  {buff}
                                </RegexColorText>
                              </BuffText>
                            );
                          })}
                        </>
                      </ItemContentBox>
                    );
                  })}
                </>
              </GridItem>
            );
          })}
          {recommendedEquipInfo.weapon.map((item: string, index) => {
            return (
              <GridItem key={item}>
                <ListName>
                  {trans(Lang.Recommended_Weapon)} #{index + 1}
                </ListName>
                <ItemContentBox
                  image={
                    <>
                      <RoundImage src={ItemImages[item]} styles={{ width: '80px', height: '80px' }} />
                      <StarEmoji role="img">{'⭐'.repeat(weaponInfo[item].rank)}</StarEmoji>
                    </>
                  }
                  name={trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}
                  styles={{ containerStyle: { margin: '15px 0 0' } }}
                />
              </GridItem>
            );
          })}
        </>
      </CSSGridWrapper>
    </Layout>
  );
}
