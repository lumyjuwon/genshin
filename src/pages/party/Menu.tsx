import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { partyDispatch } from 'src/redux';
import { RootState } from 'src/redux/rootReducer';
import { PartyData, PartyPreset } from 'src/redux/party/types';
import { FocusWrapper, SquareTextButton, ForwardedInputText, FlexWrapper, BoxModelWrapper, YesOrNo, RoundTextButton } from 'src/components';
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
  '@media screen and (max-width: 1380px)': {},
  '@media screen and (max-width: 768px)': {
    flexDirection: 'column'
  }
});

const PartyList = styled.div({
  position: 'absolute',
  top: '50px',
  right: '0',
  borderRadius: '16px',
  boxShadow: '4px 4px 3px #111',
  backgroundColor: 'rgba(0, 0, 0, .9)',
  zIndex: 3,
  display: 'block',
  '@media screen and (max-width: 768px)': {
    top: '142px'
  }
});

interface Props {}

export function Menu(props: Props) {
  const [isResetModalVisible, setIsResetModalVisible] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [isPartyListVisible, setIsPartyVisible] = useState(false);
  const InputRef = useRef<HTMLInputElement>(null);
  const partyListRef = useRef<HTMLDivElement>(null);
  const characters: PartyData = useSelector<RootState, any>((state) => state.party.partyData);
  const parties: PartyPreset = useSelector<RootState, any>((state) => state.party.partyPreset);

  function saveCurrentParty() {
    const partyName = InputRef.current?.value;
    if (!partyName) {
      InputRef.current?.focus();
      return alert(trans(Lang.Party_Name_Blank));
    }
    if (Object.keys(parties).includes(partyName)) {
      return alert(trans(Lang.Party_Name_Overlap));
    }
    if (!Object.keys(characters).length) {
      return alert(trans(Lang.Party_Blank_Space));
    }
    partyDispatch.SaveParty({ [`${partyName}`]: characters });
    InputRef.current && (InputRef.current.value = '');
  }

  function setVisible(bool: boolean) {
    setIsPartyVisible(bool);
  }

  function resetCurrentParty() {
    setIsResetModalVisible(false);
    partyDispatch.SetParty({});
  }

  function toggleShowPartyButton() {
    if (!isPartyListVisible) {
      setIsPartyVisible(true);
    } else {
      setIsPartyVisible(false);
    }
  }

  async function downloadImage() {
    setIsImageModalVisible(false);
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
  }

  return (
    <Container>
      <FlexWrapper styles={{ small: { flexDirection: 'column' } }}>
        <>
          <ForwardedInputText
            ref={InputRef}
            placeholder={trans(Lang.Party_Save_Text_Placeholder)}
            styles={{
              InputStyle: {
                height: '42px',
                border: '1px solid #f1f2f3',
                borderRadius: '12px 0 0 12px',
                medium: {
                  width: '140px',
                  borderRadius: '12px 0 0 12px'
                },
                small: {
                  width: '250px',
                  height: '36px',
                  borderRadius: '12px',
                  fontSize: '14px'
                }
              }
            }}
          />
          <FlexWrapper styles={{ small: { width: '100%', margin: '5px 0 0' } }}>
            <>
              <BoxModelWrapper styles={{ margin: '0 0 0 -1px' }}>
                <SquareTextButton
                  styles={{
                    buttonStyles: {
                      display: 'inline-block',
                      height: '42px',
                      padding: '6px',
                      border: '2px solid #f1f2f3',
                      medium: { height: '42px' },
                      small: { width: '100%' }
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
              <BoxModelWrapper styles={{ margin: '0 0 0 -2px', medium: { margin: '0 0 0 -2px' } }}>
                <SquareTextButton
                  styles={{
                    buttonStyles: {
                      display: 'inline-block',
                      height: '42px',
                      padding: '6px',
                      border: '2px solid #f1f2f3',
                      medium: { height: '42px' },
                      small: { width: '100%' }
                    }
                  }}
                  onClick={() => {
                    setIsImageModalVisible(true);
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
        </>
      </FlexWrapper>
      <FlexWrapper styles={{ alignItems: 'center', small: { margin: '10px 0 0' } }}>
        <>
          <RoundTextButton
            onClick={() => setIsResetModalVisible(true)}
            styles={{
              buttonStyles: {
                width: '100px',
                height: '42px',
                padding: '6px',
                margin: '0',
                borderRadius: '12px 0 0 12px',
                backgroundColor: '#cc0000'
              }
            }}
          >
            <>
              {trans(Lang.Reset_Party)}
              <Ripple />
            </>
          </RoundTextButton>
          <FlexWrapper styles={{ flexDirection: 'column' }}>
            <>
              <BoxModelWrapper styles={{ margin: '0 0 0 -2px', small: { margin: '0 0 0 -2px' } }}>
                <RoundTextButton
                  onClick={() => toggleShowPartyButton()}
                  styles={{
                    buttonStyles: {
                      padding: '6px',
                      width: '150px',
                      height: '42px',
                      margin: '0',
                      borderRadius: '0 12px 12px 0',
                      medium: { width: '120px' },
                      small: { width: '120px' }
                    }
                  }}
                >
                  <>
                    Party List
                    <Ripple />
                  </>
                </RoundTextButton>
              </BoxModelWrapper>
              {isPartyListVisible && (
                <FocusWrapper ref={partyListRef} visible={isPartyListVisible} setVisible={() => setVisible(false)}>
                  <PartyList>
                    <BoxModelWrapper styles={{ padding: '20px 10px' }}>
                      <SavedPartyList parties={parties} toggle={() => toggleShowPartyButton()} />
                    </BoxModelWrapper>
                  </PartyList>
                </FocusWrapper>
              )}
            </>
          </FlexWrapper>
        </>
      </FlexWrapper>
      <YesOrNo
        isVisible={isResetModalVisible}
        question={trans(Lang.Party_Reset_Question)}
        yesButtonClick={resetCurrentParty}
        noButtonClick={() => setIsResetModalVisible(false)}
      />
      <YesOrNo
        isVisible={isImageModalVisible}
        question={trans(Lang.Image_Save_Question)}
        yesButtonClick={downloadImage}
        noButtonClick={() => setIsImageModalVisible(false)}
      />
    </Container>
  );
}
