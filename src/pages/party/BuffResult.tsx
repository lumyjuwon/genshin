import React from 'react';
import { ArtifactResult } from './artifact/ArtifactResult';

import { ElementResult } from './element/ElementResult';

interface Props {
  activeElements: Map<string, number>;
}

export function BuffResult(props: Props) {
  return (
    <>
      <ElementResult activeElements={props.activeElements}></ElementResult>
      <ArtifactResult></ArtifactResult>
    </>
  );
}
