import React from 'react';

import { WeaponResult } from './weapon/WeaponResult';
import { ArtifactResult } from './artifact/ArtifactResult';
import { ArtifactName, CharacterName, WeaponName } from 'src/resources/data';
import { FlexWrapper } from 'src/components';

interface Artifacts {
  Flower?: ArtifactName;
  Feather?: ArtifactName;
  HourGlass?: ArtifactName;
  HolyGrail?: ArtifactName;
  Crown?: ArtifactName;
}

interface Props {
  activeWeapon?: WeaponName;
  activeArtifacts: Artifacts;
  selectedCharacter: CharacterName;
}

export function CharacterResult(props: Props) {
  return (
    <FlexWrapper styles={{ alignItems: 'flex-start', medium: { width: '670px' }, small: { flexDirection: 'column' } }}>
      <>
        <WeaponResult activeWeapon={props.activeWeapon} selectedCharacter={props.selectedCharacter} />
        <ArtifactResult activeArtifacts={props.activeArtifacts} />
      </>
    </FlexWrapper>
  );
}
