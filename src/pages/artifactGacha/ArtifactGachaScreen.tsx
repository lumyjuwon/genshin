import React from 'react';
import styled from 'styled-components';

import { PageHelmet } from 'src/components';
import { Lang } from 'src/resources/languages';
import { ArtifactCard } from './ArtifactCard';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center'
});

export function ArtifactGachaScreen() {
  return (
    <Container>
      <PageHelmet title={Lang.Artifact} description={Lang.ArtifactDesc} />
      {/* <ArtifactCard /> */}
    </Container>
  );
}
