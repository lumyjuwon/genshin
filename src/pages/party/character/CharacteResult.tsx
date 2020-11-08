import React from 'react';

import { WeaponResult } from './weapon/WeaponResult';
import { ArtifactResult } from './artifact/ArtifactResult';
import { ArtifactName, WeaponName } from 'src/resources/data';
import { FlexWrapper } from 'src/components';

type ArtifactCount = number;

interface Props {
  activeWeapon: WeaponName;
  activeArtifacts: Map<ArtifactName, ArtifactCount>;
}

export function CharacterResult(props: Props) {
  return (
    <FlexWrapper styles={{ small: { flexDirection: 'column' } }}>
      <>
        <WeaponResult activeWeapon={props.activeWeapon} />
        <ArtifactResult activeArtifacts={props.activeArtifacts} />
      </>
    </FlexWrapper>
  );
}
