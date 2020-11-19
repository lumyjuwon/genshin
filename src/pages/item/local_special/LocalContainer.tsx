import React, { useState } from 'react';
import styled from 'styled-components';

import { LocalSpecialityItem } from './LocalSpecialityItem';
import { FlexWrapper } from 'src/components';
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

enum ButtonText {
  open = 'Viewer_Open',
  close = 'Viewer_Close'
}

export function LocalContainer() {
  const [isViewerVisible, setIsViewerVisible] = useState(false);
  const [buttonText, setButtonText] = useState(ButtonText.open);
  const region = ['Mondstadt', 'Liyue'];

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
        <Title>{trans(Lang.Local_Speciality_Items)}</Title>
        <Button onClick={() => toggleViewer()}>{trans(Lang[buttonText])}</Button>
      </Header>
      <Line />
      {isViewerVisible && region.map((local) => <LocalSpecialityItem local={local} />)}
    </Container>
  );
}
