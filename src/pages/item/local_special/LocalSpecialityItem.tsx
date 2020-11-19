import React, { useState } from 'react';
import styled from 'styled-components';

import { FlexWrapper, GridWrapper, RoundImage } from 'src/components';
import { localSpecialityItemInfo } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { LocalSpecialityItemImages } from 'src/resources/images';

const Container = styled.div({
  width: '800px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '50px auto 0'
});

const Line = styled.hr({
  width: '800px',
  height: '1px'
});

const Button = styled.div({
  fontSize: '14px',
  fontWeight: 'normal',
  padding: '3px'
});

const Header = styled.div({
  width: '800px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const Title = styled.div({
  fontSize: '18px',
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
  local: string;
}

export function LocalSpecialityItem(props: Props) {
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
        <Title>{trans(Lang[props.local as KeyLang])}</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && (
        <GridWrapper styles={{ width: '800px' }}>
          {Object.keys(localSpecialityItemInfo)
            .filter((item) => localSpecialityItemInfo[item].region === props.local)
            .map((item) => {
              return (
                <FlexWrapper styles={{ flexDirection: 'column', margin: '15px 0 0', width: '200px' }}>
                  <RoundImage src={LocalSpecialityItemImages[item]} styles={{ width: '70px', height: '70px' }} />
                  <Name>{trans(Lang[item.replace(/\s/g, '_') as KeyLang])}</Name>
                  <Description>{trans(Lang.Character_Ascension_Material)}</Description>
                </FlexWrapper>
              );
            })}
        </GridWrapper>
      )}
    </Container>
  );
}
