import React from 'react';
import Styled from 'styled-components';

import { RoundTextButton, SquareTextButton, UnderlineInputText } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

const Container = Styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: '64px'
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
