import React, { useState } from 'react';
import styled from 'styled-components';

import { characterTalentItemInfo, weaponAscesionItemInfo } from 'src/resources/data';
import { RoundImage, GridWrapper, ItemBadgeBox, TooltipText, FlexWrapper } from 'src/components';
import { DailySetImages, CharacterImages, ElementImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '900px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto'
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
  // const talentSet = Object.keys(characterTalentItemInfo);

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
        <Title>{trans(Lang.Daily_Abyssal_Items)}</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && (
        <GridWrapper styles={{ width: '100%' }}>
          {Object.keys(characterTalentItemInfo).map((set) => {
            console.log(set);
            return (
              <FlexWrapper key={set} styles={{ flexDirection: 'column', width: '300px', margin: '10px 0 0' }}>
                <FlexWrapper>
                  {Object.keys(characterTalentItemInfo[set].items).map((item) => {
                    return (
                      <RoundImage
                        key={item}
                        src={require(`../../resources/images/items/character-talent/${item}.png`)}
                        styles={{ width: '70px', height: '70px' }}
                      />
                    );
                  })}
                </FlexWrapper>
                <Name>{trans(Lang[set as KeyLang])}</Name>
                <Description>{characterTalentItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
                <Description>{trans(Lang.Character_Talent_Material)}</Description>
              </FlexWrapper>
            );
          })}
          {Object.keys(weaponAscesionItemInfo).map((set) => {
            console.log(set);
            return (
              <FlexWrapper key={set} styles={{ flexDirection: 'column', width: '300px', margin: '10px 0 0' }}>
                <FlexWrapper>
                  {Object.keys(weaponAscesionItemInfo[set].items).map((item) => {
                    return (
                      <RoundImage
                        key={item}
                        src={require(`../../resources/images/items/weapon-ascension/${item}.png`)}
                        styles={{ width: '70px', height: '70px' }}
                      />
                    );
                  })}
                </FlexWrapper>
                <Name>{trans(Lang[set as KeyLang])}</Name>
                <Description>{weaponAscesionItemInfo[set].day.map((day) => trans(Lang[day as KeyLang])).join(', ')}</Description>
                <Description>{trans(Lang.Weapon_Ascension_Material)}</Description>
              </FlexWrapper>
            );
          })}
        </GridWrapper>
      )}
    </Container>
  );
}
