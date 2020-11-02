import React from 'react';

import { ArtifactBuffText } from './ArtifactBuffText';
import { ArtifactName } from 'src/resources/data';

interface Props {
  activeArtifacts: Map<ArtifactName, number>;
}

export function ArtifactResult(props: Props) {
  return (
    <>
      <ArtifactBuffText activeArtifacts={props.activeArtifacts} />
    </>
  );
}
