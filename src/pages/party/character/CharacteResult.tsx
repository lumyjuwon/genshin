import React from 'react';

import { WeaponResult } from './weapon/WeaponResult';
import { ArtifactResult } from './artifact/ArtifactResult';
import { ArtifactName, CharacterName, WeaponName } from 'src/resources/data';
import { FlexWrapper } from 'src/components';

type ArtifactCount = number;

interface Props {
  activeWeapon: WeaponName;
  activeArtifacts: Map<ArtifactName, ArtifactCount>;
  selectedCharacter: CharacterName;
}

export function CharacterResult(props: Props) {
  return (
    <FlexWrapper styles={{ alignItems: 'flex-start', small: { flexDirection: 'column' } }}>
      <>
        <WeaponResult activeWeapon={props.activeWeapon} selectedCharacter={props.selectedCharacter} />
        <ArtifactResult activeArtifacts={props.activeArtifacts} />
      </>
    </FlexWrapper>
  );
}
