import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';
import { CharacterAscesion } from './CharacterAscesion';
import { DailyItem } from './DailyItem';
import { CharacterDetailModal } from './modal/CharacterDetailModal';
import { WeeklyBossItem } from './WeeklyBossItem';

interface Props {}

export function ItemScreen(props: Props) {
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
      <DailyItem onClick={onCharacterClick} />
      <WeeklyBossItem onClick={onCharacterClick} />
      <CharacterAscesion onClick={onCharacterClick} />
      {/* <>{characterName && <CharacterDetailModal visible={detailModalVisible} cancel={() => onCancelClick()} character={characterName} />}</> */}
    </ContentWrapper>
  );
}
