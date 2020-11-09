import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { SavedPartyList } from './SavedPartyList';
import { partyDispatch } from 'src/redux';
import { RootState } from 'src/redux/rootReducer';
import { PartyData } from 'src/redux/party/types';
import { SquareTextButton, ForwardedInputText, FlexWrapper, BoxModelWrapper } from 'src/components';
import { Lang, trans } from 'src/resources/languages';
import html2canvas from 'html2canvas';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
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
  const InputRef = useRef<HTMLInputElement>(null);
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

  function saveCurrentParty() {
    const partyName = InputRef.current?.value;
    partyDispatch.SaveParty({ [`${partyName}`]: characters });
    InputRef.current && (InputRef.current.value = '');
  }

  return (
    <Container>
      <>
        <FlexWrapper>
          <>
            <ForwardedInputText
              ref={InputRef}
              placeholder={trans(Lang.Party_Save_Text_Placeholder)}
              styles={{
                InputStyle: {
                  height: '39px',
                  border: '1px solid #f1f2f3',
                  borderRadius: '12px 0 0 12px'
                }
              }}
            />
            <BoxModelWrapper styles={{ margin: '0 0 0 -1px' }}>
              <SquareTextButton
                styles={{
                  buttonStyles: {
                    display: 'inline-block',
                    height: '42px',
                    padding: '6px'
                  }
                }}
                onClick={() => saveCurrentParty()}
              >
                {trans(Lang.Party_Save_Text)}
              </SquareTextButton>
            </BoxModelWrapper>
            <BoxModelWrapper styles={{ margin: '0 0 0 -1px' }}>
              <SquareTextButton
                styles={{
                  buttonStyles: {
                    display: 'inline-block',
                    height: '42px',
                    padding: '6px'
                  }
                }}
                onClick={async () => {
                  const partyContent = document.getElementById('party-content');
                  if (partyContent) {
                    const canvans = await html2canvas(partyContent, { backgroundColor: '#212223' });

                    const link = document.createElement('a');
                    link.href = canvans.toDataURL();
                    link.download = InputRef.current !== null ? `${InputRef.current.value}.png` : 'Party.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                }}
              >
                {trans(Lang.Save_Party_Cotnent)}
              </SquareTextButton>
            </BoxModelWrapper>
          </>
        </FlexWrapper>
        <SavedPartyList />
      </>
    </Container>
  );
}
