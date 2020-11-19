import React, { useState } from 'react';
import styled from 'styled-components';

import { trans, Lang, KeyLang } from 'src/resources/languages';
import { FlexWrapper, GridWrapper, RoundImage, ItemBadgeBox } from 'src/components';
import { weeklyBossItemInfo, characterInfo } from 'src/resources/data';
import { WeeklyBossItemImages, ElementImages, CharacterImages } from 'src/resources/images';

const Container = styled.div({
  width: '900px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px auto 0'
});

const Header = styled.div({
  width: '900px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const ImageWrapper = styled.div({
  display: 'flex',
  width: '70px',
  justifyContent: 'center',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px',
  fontWeight: 'bold'
});

const Button = styled.div({
  fontSize: '16px',
  fontWeight: 'normal',
  padding: '3px'
});

const DisplayNone = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    display: 'none'
  }
});

const ItemName = styled.div({
  fontSize: '14px',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px'
  }
});

const Obtain = styled.div({
  width: '160px',
  fontSize: '14px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    margin: '5px 0 0',
    width: '130px',
    fontSize: '12px'
  }
});

const Line = styled.hr({
  width: '900px'
});

const Name = styled.div({
  width: '100%',
  textAlign: 'center',
  fontWeight: 'bold'
});

const Description = styled.div({
  width: '100%',
  textAlign: 'center',
  fontSize: '14px'
});

interface Props {
  onClick: Function;
}

enum ButtonText {
  open = 'Viewer_Open',
  close = 'Viewer_Close'
}

export function WeeklyRewardItem(props: Props) {
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [buttonText, setButtonText] = useState(ButtonText.open);

  function toggleViewer() {
    setIsViewerVisible(!isViewerVisible);
    if (buttonText === ButtonText.open) {
      setButtonText(ButtonText.close);
    } else {
      setButtonText(ButtonText.open);
    }
  }

  return (
    <Container>
      <Header>
        <Title>{trans(Lang.Weekly_Boss_Items)}</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && (
        <GridWrapper styles={{ width: '100%' }}>
          {Object.keys(weeklyBossItemInfo).map((item) => {
            return (
              <FlexWrapper styles={{ flexDirection: 'column', margin: '10px 0 0', width: '300px' }}>
                <FlexWrapper>
                  <RoundImage src={WeeklyBossItemImages[item]} styles={{ width: '70px', height: '70px' }} />
                </FlexWrapper>
                <Name>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</Name>
                <Description>
                  {weeklyBossItemInfo[item].obtain.map((location) => trans(Lang[location.replace(/\s/g, '_') as KeyLang])).join(', ')}
                </Description>
                <Description>{trans(Lang.Character_Talent_Material)}</Description>
              </FlexWrapper>
            );
          })}
        </GridWrapper>
      )}
    </Container>
  );
}
