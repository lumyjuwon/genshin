import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { partyDispatch } from 'src/redux';
import { RootState } from 'src/redux/rootReducer';
import { PartyData } from 'src/redux/party/types';
import { SquareTextButton, ForwardedInputText, FlexWrapper, BoxModelWrapper, YesOrNo } from 'src/components';
import { Lang, trans } from 'src/resources/languages';
import html2canvas from 'html2canvas';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px',
  '@media screen and (max-width: 768px)': {
    paddingRight: '0',
    justifyContent: 'center'
  }
});

interface Props {}

export function Menu(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const InputRef = useRef<HTMLInputElement>(null);
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);

  function saveCurrentParty() {
    const partyName = InputRef.current?.value;
    if (!partyName) {
      InputRef.current?.focus();
      return alert('Write Text!');
    }
    partyDispatch.SaveParty({ [`${partyName}`]: characters });
    InputRef.current && (InputRef.current.value = '');
  }

  function resetCurrentParty() {
    setIsModalVisible(false);
    partyDispatch.SetParty({});
  }

  return (
    <Container>
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
          <BoxModelWrapper styles={{ margin: '0 0 0 -3px' }}>
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
      <SquareTextButton onClick={() => setIsModalVisible(true)} styles={{ buttonStyles: { height: '42px', padding: '6px' } }}>
        Reset Current Party
      </SquareTextButton>
      <YesOrNo
        isVisible={isModalVisible}
        question="Are you sure to reset current party?"
        yesButtonClick={resetCurrentParty}
        noButtonClick={() => setIsModalVisible(false)}
      />
    </Container>
  );
}
