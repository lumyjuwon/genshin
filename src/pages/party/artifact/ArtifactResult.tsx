import React from 'react';

import { ArtifactBuffText } from './ArtifactBuffText';

interface Props {
  activeArtifacts: Map<string, number>;
}

export function ArtifactResult(props: Props) {
  return (
    <>
      <ArtifactBuffText activeArtifacts={props.activeArtifacts} />
    </>
  );
}
