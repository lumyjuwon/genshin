import React from 'react';
import styled from 'styled-components';

import { ArtifactType, ArtifactName } from 'src/resources/data';
import { trans, Lang } from 'src/resources/languages';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '50px',
  '@media screen and (max-width: 1380px)': {
    width: '700px',
    margin: '0 auto 50px'
  },
  '@media screen and (max-width: 768px)': {
    width: '280px'
  }
});

const TextDesc = styled.p({
  fontSize: '20px',
  marginBottom: '16px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '0'
  }
});

interface Props {
  activeArtifacts?: Map<ArtifactType, ArtifactName>;
}

export function ArtifactBuffText(props: Props) {
  return (
    <Container>
      <TextDesc>{trans(Lang.Active_Artifact_Buff)}</TextDesc>
      <p>{trans(Lang.Adventurer_TwoPieceSet)}</p>
    </Container>
  );
}
