import React from 'react';

import { ArtifactBuffText } from './ArtifactBuffText';
import { ArtifactName } from 'src/resources/data';

type ArtifactCount = number;

interface Props {
  activeArtifacts: Map<ArtifactName, ArtifactCount>;
}

export function ArtifactResult(props: Props) {
  return (
    <>
      <ArtifactBuffText activeArtifacts={props.activeArtifacts} />
    </>
  );
}
