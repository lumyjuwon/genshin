import React from 'react';

import { WeaponBuffText } from './WeaponBuffText';
import { WeaponName, CharacterName } from 'src/resources/data';

interface Props {
  activeWeapon: WeaponName;
  selectedCharacter: CharacterName;
}

export function WeaponResult(props: Props) {
  return <WeaponBuffText activeWeapon={props.activeWeapon} selectedCharacter={props.selectedCharacter} />;
}
