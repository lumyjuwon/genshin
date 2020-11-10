import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { partyDispatch } from 'src/redux';
import { CharacterImages } from 'src/resources/images';
import { EmojiText, RoundImage, Dialog } from 'src/components';
import { PartyPreset } from 'src/redux/party/types';
import { trans, Lang } from 'src/resources/languages';

const Container = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

const Party = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  cursor: 'pointer',
  textDecoration: 'underline',
  padding: '10px 0',
  '&:hover': {
    backgroundColor: '#333'
  }
});

const Name = styled.div({
  margin: '0 10px 0 0',
  width: '70px',
  wordBreak: 'break-all'
});

const DeleteButton = styled.div({
  margin: '0 0 0 5px',
  padding: '5px 5px',
  cursor: 'pointer',
  fontSize: '20px'
});

interface Props {
  partyName: string;
  parties: PartyPreset;
  toggle: Function;
}

export function SavedParty(props: Props) {
  const partyNameRef = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function setPartyData(name: string) {
    partyDispatch.SetParty(props.parties[name]['partyData']);
  }

  function deleletPartyData() {
    setIsModalVisible(false);
    const name = partyNameRef.current?.textContent;
    name && partyDispatch.DeleteParty({ [name]: props.parties[name] });
  }

  return (
    <Container>
      <Party
        onClick={() => {
          props.toggle();
          setPartyData(props.partyName);
        }}
      >
        <Name ref={partyNameRef}>{props.partyName}</Name>
        {Object.keys(props.parties[props.partyName]).map((character) => {
          return <RoundImage src={CharacterImages[character]} styles={{ width: '30px', height: '30px' }} />;
        })}
      </Party>
      <DeleteButton
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <EmojiText label='delete' symbol='🗑'></EmojiText>
      </DeleteButton>
      <Dialog
        isVisible={isModalVisible}
        title={`${trans(Lang.Party_Delete_Question)}'${partyNameRef.current?.textContent}'?`}
        confirm={() => {
          deleletPartyData();
          props.toggle();
        }}
        cancel={() => {
          setIsModalVisible(false);
          props.toggle();
        }}
      />
    </Container>
  );
}
