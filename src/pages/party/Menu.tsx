import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { partyDispatch } from 'src/redux';
import { RootState } from 'src/redux/rootReducer';
import { PartyData } from 'src/redux/party/types';
import { SquareTextButton, ForwardedInputText, FlexWrapper, BoxModelWrapper, YesOrNo, useHandleClickOutside } from 'src/components';
import { Lang, trans } from 'src/resources/languages';
import html2canvas from 'html2canvas';
import { SavedPartyList } from './save_party/SavedPartyList';
import { Ripple } from 'src/components/effect';

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

const RightSidebar = styled.div({
  position: 'absolute',
  top: '50px',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, .9)',
  zIndex: 3,
  display: 'none',
  '&.show-party-list': {
    display: 'block'
  }
});

const Relative = styled.div({
  position: 'relative',
  margin: '0 0 0 -2px',
  overflow: 'hidden'
});

interface Props {}

export function Menu(props: Props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [partyToggleButtonText, setPartyToggleButtonText] = useState('Show Parties');
  const InputRef = useRef<HTMLInputElement>(null);
  const partyListRef = useRef<HTMLDivElement>(null);
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

  function toggleShowPartyButton() {
    if (partyListRef.current?.classList.contains('show-party-list')) {
      partyListRef.current.classList.remove('show-party-list');
      setPartyToggleButtonText('Show Parties');
    } else {
      partyListRef.current?.classList.add('show-party-list');
      setPartyToggleButtonText('Hide Parties');
    }
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
              <>
                {trans(Lang.Party_Save_Text)}
                <Ripple />
              </>
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
              <>
                {trans(Lang.Save_Party_Cotnent)}
                <Ripple />
              </>
            </SquareTextButton>
          </BoxModelWrapper>
        </>
      </FlexWrapper>
      <FlexWrapper>
        <>
          <SquareTextButton onClick={() => setIsModalVisible(true)} styles={{ buttonStyles: { height: '42px', padding: '6px' } }}>
            <>
              Reset Current Party
              <Ripple />
            </>
          </SquareTextButton>
          <BoxModelWrapper styles={{ margin: '0 0 0 -2px' }}>
            <SquareTextButton
              onClick={() => toggleShowPartyButton()}
              styles={{ buttonStyles: { padding: '6px', width: '150px', height: '42px' } }}
            >
              <>
                {partyToggleButtonText}
                <Ripple />
              </>
            </SquareTextButton>
          </BoxModelWrapper>
        </>
      </FlexWrapper>
      <YesOrNo
        isVisible={isModalVisible}
        question="Are you sure to reset current party?"
        yesButtonClick={resetCurrentParty}
        noButtonClick={() => setIsModalVisible(false)}
      />
      <RightSidebar ref={partyListRef}>
        <BoxModelWrapper styles={{ padding: '20px 10px' }}>
          <SavedPartyList toggle={() => toggleShowPartyButton()} />
        </BoxModelWrapper>
      </RightSidebar>
    </Container>
  );
}
