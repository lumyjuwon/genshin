import React from 'react';
import styled from 'styled-components';

import { ArtifactResult } from './artifact/ArtifactResult';
import { ElementResult } from './element/ElementResult';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

interface Props {
  activeElements: Map<string, number>;
}

export function BuffResult(props: Props) {
  return (
    <Container>
      <ElementResult activeElements={props.activeElements}></ElementResult>
      <ArtifactResult></ArtifactResult>
    </Container>
  );
}
