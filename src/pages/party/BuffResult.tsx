import React from 'react';
import styled from 'styled-components';

import { ArtifactName } from 'src/resources/data';
import { ArtifactResult } from './character/artifact/ArtifactResult';
import { ElementResult } from './element/ElementResult';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

interface Props {
  activeElements: Map<string, number>;
  activeArtifacts: Map<ArtifactName, number>;
}

export function BuffResult(props: Props) {
  return (
    <Container>
      <ElementResult activeElements={props.activeElements}></ElementResult>
      {/* <ArtifactResult activeArtifacts={props.activeArtifacts}></ArtifactResult> */}
    </Container>
  );
}
