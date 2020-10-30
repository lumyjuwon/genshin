import React from 'react';
import styled from 'styled-components';

import { SquareTextButton, UnderlineInputText } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '8vw',
  marginBottom: '64px',
  '@media screen and (max-width: 768px)': {
    paddingRight: '0',
    justifyContent: 'center'
  }
});

interface Props {}

export function Menu(props: Props) {
  return (
    <Container>
      <UnderlineInputText
        placeholder={trans(Lang.Party_Save_Text_Placeholder)}
        styles={{
          InputStyle: {
            height: '42px'
          }
        }}
      />
      <SquareTextButton
        styles={{
          buttonStyles: {
            display: 'inline-block',
            height: '42px',
            padding: '6px'
          }
        }}
        onClick={() => {}}
      >
        {trans(Lang.Party_Save_Text)}
      </SquareTextButton>
    </Container>
  );
}
