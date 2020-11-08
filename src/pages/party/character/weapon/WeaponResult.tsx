import React from 'react';

import { WeaponBuffText } from './WeaponBuffText';
import { WeaponName } from 'src/resources/data';

interface Props {
  activeWeapon: WeaponName;
}

export function WeaponResult(props: Props) {
  return <WeaponBuffText activeWeapon={props.activeWeapon} />;
}
