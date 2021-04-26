import React from 'react';
import styled from 'styled-components';

import { Layout } from './Layout';
import { CharacterImages, ElementImages } from 'src/resources/images';
import { FlexWrapper, ItemBadgeBox, RoundImage, FlexGridWrapper, ContentBackgroundBox } from 'src/components';
import { characterInfo } from 'src/resources/data';
import { trans, Lang } from 'src/resources/languages';
import { Link } from 'react-router-dom';

const PartyName = styled.div({
  width: '100%',
  fontSize: '20px',
  textAlign: 'left',
  marginBottom: '15px',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px'
  }
});

const AlterText = styled.div({
  width: '100%',
  fontSize: '16px',
  textAlign: 'center',
  margin: '15px 0 5px',
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
});

interface PartyInfo {
  party: Array<string>;
  alter?: {
    [name: string]: Array<string>;
  };
}

interface Props {
  character: string;
}

const INDEX_BEAUTIFY = 1;

export function CharactrerRecommendedParty(props: Props) {
  const recommendedParties = characterInfo[props.character].recommendedParty;

  function goToScrollTop() {
    window.scroll(0, 0);
  }

  if (recommendedParties) {
    return (
      <Layout id="recommended-party" title={trans(Lang.Recommended_Party)}>
        <FlexWrapper styles={{ width: '100%', flexDirection: 'column' }}>
          {Object.keys(recommendedParties).map((partyName: string, index: number) => {
            const alterCharacter = recommendedParties[partyName].alter;
            return (
              <FlexWrapper key={partyName} styles={{ flexDirection: 'column', margin: '30px 0 0' }}>
                <PartyName>
                  {trans(Lang.Recommended_Party)} #{index + INDEX_BEAUTIFY}
                </PartyName>
                <ContentBackgroundBox>
                  <FlexGridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
                    {recommendedParties[partyName].party.map((character) => {
                      const path = character.replace(/\s\(|\)|/g, '');
                      return (
                        <Link key={character} to={`/character/${path}`}>
                          <ItemBadgeBox
                            badge={
                              <RoundImage
                                src={ElementImages[characterInfo[character].element]}
                                styles={{
                                  width: '25px',
                                  height: '25px',
                                  small: {
                                    width: '25px',
                                    height: '25px'
                                  }
                                }}
                              />
                            }
                            child={<RoundImage src={CharacterImages[character]} styles={{ width: '80px', height: '80px' }} />}
                            onClick={() => goToScrollTop()}
                            styles={{
                              boxStyles: { margin: '10px' },
                              tooltipStyles: { bottom: '0', fontSize: '13px' }
                            }}
                            hoverInnerColor={'#f1f2f3'}
                            tooltip={character}
                            isActive={true}
                            isHoverdToolTip={true}
                            isToolTipVisible={true}
                            isRankVisible={false}
                            isBadgeVisible={true}
                          />
                        </Link>
                      );
                    })}
                  </FlexGridWrapper>
                  <>
                    {alterCharacter && (
                      <>
                        <AlterText>{trans(Lang.Alternative)}</AlterText>
                        <FlexWrapper styles={{ flexDirection: 'column' }}>
                          {Object.keys(alterCharacter).map((character) => {
                            return (
                              <FlexWrapper key={character} styles={{ margin: '0 0 10px' }}>
                                <>
                                  <RoundImage src={CharacterImages[character]} styles={{ width: '50px', height: '50px' }} />
                                  &nbsp;→&nbsp;
                                  {alterCharacter[character].map((altCharacter) => {
                                    return (
                                      <RoundImage
                                        key={altCharacter}
                                        src={CharacterImages[altCharacter]}
                                        styles={{ width: '50px', height: '50px' }}
                                      />
                                    );
                                  })}
                                </>
                              </FlexWrapper>
                            );
                          })}
                        </FlexWrapper>
                      </>
                    )}
                  </>
                </ContentBackgroundBox>
              </FlexWrapper>
            );
          })}
        </FlexWrapper>
      </Layout>
    );
  } else return null;
}
