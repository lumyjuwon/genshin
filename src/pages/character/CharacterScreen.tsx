import React from 'react';

import { ContentWrapper } from 'src/components';
import { PageHelmet } from 'src/components';
import { CharacterList } from './CharacterList';

export function CharacterScreen() {
  return (
    <ContentWrapper>
      <PageHelmet title={'Character'} description={'Desc'} />
      <CharacterList />
    </ContentWrapper>
  );
}
