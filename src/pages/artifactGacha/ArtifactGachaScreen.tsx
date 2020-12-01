import React from 'react';
import { PageHelmet } from 'src/components';
import { Lang } from 'src/resources/languages';
import { ArtifactCard } from './ArtifactCard';

export function ArtifactGachaScreen() {
  return (
    <div>
      <PageHelmet title={Lang.Artifact} description={Lang.ArtifactDesc} />
      <ArtifactCard />
    </div>
  );
}
