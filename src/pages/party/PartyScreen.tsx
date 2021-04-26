import React from 'react';

import { ContentWrapper, PageHelmet } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

import { CharacterSimulator } from './simulator/CharacterSimulator';

export function PartyScreen() {
  return (
    <ContentWrapper>
      <PageHelmet title={trans(Lang.Party)} description={trans(Lang.Main_Party_Desc)} />
      <CharacterSimulator />
    </ContentWrapper>
  );
}
