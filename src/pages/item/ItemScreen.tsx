import React, { useState } from 'react';

import { ContentWrapper } from 'src/components';
import { DailyItem } from './DailyItem';
import { FieldMonsterDropItem } from './FieldMonsterDropItem';
import { CharacterDetailModal } from './modal/CharacterDetailModal';
import { WeeklyRewardItem } from './WeeklyRewardItem';
import { LocalContainer } from './local_special/LocalContainer';

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
      <FieldMonsterDropItem />
      <LocalContainer />
    </ContentWrapper>
  );
}
