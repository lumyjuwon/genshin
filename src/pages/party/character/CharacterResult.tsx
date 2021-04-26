import React from 'react';

// import { WeaponResult } from './weapon/WeaponResult';
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
    <FlexWrapper
      styles={{ width: '855px', alignItems: 'flex-start', medium: { width: '655px' }, small: { width: '100%', flexDirection: 'column' } }}
    >
      {/* <WeaponResult activeWeapon={props.activeWeapon} selectedCharacter={props.selectedCharacter} /> */}
      <ArtifactResult activeArtifacts={props.activeArtifacts} />
    </FlexWrapper>
  );
}
