import React from 'react';
import styled from 'styled-components';

import { ContentWrapper } from 'src/components';
import { CharacterAscesion } from './CharacterAscesion';
import { CharacterTalent } from './CharacterTalent';

interface Props {}

export function CharacterScreen(props: Props) {
  return (
    <ContentWrapper>
      <CharacterTalent />
      <CharacterAscesion />
    </ContentWrapper>
  );
}
