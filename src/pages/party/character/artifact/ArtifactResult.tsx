import React from 'react';

import { ArtifactBuffText } from './ArtifactBuffText';
import { ArtifactName } from 'src/resources/data';

interface Artifacts {
  Flower?: ArtifactName;
  Feather?: ArtifactName;
  HourGlass?: ArtifactName;
  HolyGrail?: ArtifactName;
  Crown?: ArtifactName;
}

interface Props {
  activeArtifacts: Artifacts;
}

export function ArtifactResult(props: Props) {
  return (
    <>
      <ArtifactBuffText activeArtifacts={props.activeArtifacts} />
    </>
  );
}
