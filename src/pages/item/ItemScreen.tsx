import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';
import { CharacterAscesion } from './CharacterAscesion';
import { DailyItem } from './DailyItem';
import { FieldMonsterDropItem } from './FieldMonsterDropItem';
import { CharacterDetailModal } from './modal/CharacterDetailModal';
import { WeeklyRewardItem } from './WeeklyRewardItem';
import { LocalSpecialityItem } from './local_special/LocalSpecialityItem';

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
      <WeeklyRewardItem onClick={onCharacterClick} />
      {/* <CharacterAscesion onClick={onCharacterClick} /> */}
      <FieldMonsterDropItem />
      <LocalSpecialityItem />
    </ContentWrapper>
  );
}
