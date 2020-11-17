import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';
import { CharacterAscesion } from './CharacterAscesion';
import { CharacterTalent } from './CharacterTalent';
import { CharacterAscensionDetailModal } from './modal/CharacterAscensionDetailModal';

interface Props {}

export function CharacterScreen(props: Props) {
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [characterName, setCharacterName] = useState('');

  function onCharacterClick(character: string) {
    callbackSetName(character);
    setDetailModalVisible(true);
  }

  function callbackSetName(character: string) {
    setCharacterName(character);
  }

  function onCancelClick() {
    setDetailModalVisible(false);
  }

  return (
    <ContentWrapper>
      <CharacterTalent onClick={onCharacterClick} />
      <CharacterAscesion onClick={onCharacterClick} />
      <>
        {characterName && (
          <CharacterAscensionDetailModal visible={detailModalVisible} cancel={() => onCancelClick()} character={characterName} />
        )}
      </>
    </ContentWrapper>
  );
}
