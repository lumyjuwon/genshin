import React, { useState } from 'react';
import styled from 'styled-components';

import { fieldMonsterDropItemInfo } from 'src/resources/data';
import { GridWrapper, FlexWrapper, RoundImage } from 'src/components';
import { FieldMonsterDropItemImages } from 'src/resources/images';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const Container = styled.div({
  width: '900px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px auto 0'
});

const Line = styled.hr({
  width: '900px'
});

const Button = styled.div({
  fontSize: '16px',
  fontWeight: 'normal',
  padding: '3px'
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

export function FieldMonsterDropItem() {
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
        <Title>{trans(Lang.Field_Monster_Drop_Item)}</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && (
        <GridWrapper styles={{ width: '900px' }}>
          {Object.keys(fieldMonsterDropItemInfo).map((item) => {
            return (
              <FlexWrapper styles={{ width: '200px', flexDirection: 'column', margin: '15px 0 0' }}>
                <RoundImage src={FieldMonsterDropItemImages[item]} styles={{ width: '70px', height: '70px' }} />
                <Name>{trans(Lang[item.replace(/\s/g, '_').replace(/'/g, '') as KeyLang])}</Name>
                <Description>
                  {'Drop: '}
                  {fieldMonsterDropItemInfo[item].monster.map((monster) => trans(Lang[monster.replace(/\s/g, '_') as KeyLang])).join(', ')}
                </Description>
                <Description>{trans(Lang.Character_Ascension_Material)}</Description>
              </FlexWrapper>
            );
          })}
        </GridWrapper>
      )}
    </Container>
  );
}
