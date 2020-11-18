import React, { useState } from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, characterInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, ItemBadgeBox, TooltipText, FlexWrapper } from 'src/components';
import { DailySetImages, CharacterImages, ElementImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const Viewer = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const Line = styled.hr({
  width: '900px'
});

const Button = styled.div({
  fontSize: '16px',
  fontWeight: 'normal',
  padding: '3px'
});

const ImageWrapper = styled.div({
  display: 'flex',
  width: '70px',
  justifyContent: 'center',
  alignItems: 'center'
});

const Header = styled.div({
  width: '900px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '20px',
  fontWeight: 'bold'
});

const DayText = styled.div({
  width: '220px',
  fontSize: '14px',
  textAlign: 'center',
  '@media screen and (max-width: 768px)': {
    fontSize: '12px',
    width: '180px'
  }
});

const RelativeBox = styled.div({
  position: 'relative'
});

const DisplayNone = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media screen and (max-width: 768px)': {
    display: 'none'
  }
});

enum ButtonText {
  open = 'Viewer_Open',
  close = 'Viewer_Close'
}

interface Props {
  onClick: Function;
}

export function DailyItem(props: Props) {
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [buttonText, setButtonText] = useState(ButtonText.open);
  const talentSet = Object.keys(characterTalentItemInfo);

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
        <Title>Daily Abyssal Items</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && (
        <Viewer>
          <FlexWrapper styles={{ flexDirection: 'column', alignItems: 'flex-start', margin: '20px 0 0' }}>
            <>
              <FlexWrapper>
                <DisplayNone>
                  <FlexWrapper styles={{ width: '70px' }}>{trans(Lang.Character_Item)}</FlexWrapper>
                  <FlexWrapper styles={{ width: '220px' }}>{trans(Lang.Character_Day)}</FlexWrapper>
                  <FlexWrapper styles={{ width: '200px' }}>Region</FlexWrapper>
                  <FlexWrapper styles={{ width: '150px' }}>Usage</FlexWrapper>
                </DisplayNone>
              </FlexWrapper>
              {talentSet.map((set) => {
                return (
                  <FlexWrapper styles={{ margin: '10px 0 0', width: '100%', small: { flexDirection: 'column' } }} key={set}>
                    <>
                      <FlexWrapper>
                        <ImageWrapper>
                          <RelativeBox>
                            <RoundImage src={DailySetImages[set]} styles={{ width: '60px', height: '60px' }} />
                            <TooltipText styles={{ bottom: '0', fontSize: '12px' }}>{trans(Lang[set as KeyLang])}</TooltipText>
                          </RelativeBox>
                        </ImageWrapper>
                        <DayText>{characterTalentItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</DayText>
                      </FlexWrapper>
                      <FlexWrapper styles={{ width: '200px' }}>Region</FlexWrapper>
                      <FlexWrapper styles={{ width: '150px' }}>Usage</FlexWrapper>
                    </>
                  </FlexWrapper>
                );
              })}
            </>
          </FlexWrapper>
        </Viewer>
      )}
    </Container>
  );
}
