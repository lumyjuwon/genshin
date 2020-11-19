import React from 'react';

import { ContentWrapper } from 'src/components';
import { DailyItem } from './DailyItem';
import { FieldMonsterDropItem } from './FieldMonsterDropItem';
import { WeeklyRewardItem } from './WeeklyRewardItem';
import { LocalContainer } from './local_special/LocalContainer';

interface Props {}

export function ItemScreen(props: Props) {
  return (
    <ContentWrapper>
      <DailyItem />
      <WeeklyRewardItem />
      <FieldMonsterDropItem />
      <LocalContainer />
    </ContentWrapper>
  );
}
