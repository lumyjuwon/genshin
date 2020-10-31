import React from 'react';

import { RoundImage } from 'src/components';
import { ItemBadgeBox } from 'src/components';
import { Style } from '../../components/box/ItemBadgeBox';

interface Props {
  floatImagePath: string | null;
  fillFloatBackground: boolean;
  src: string | null;
  onClick: Function;
  item: string;
  isActive?: boolean;
  styles?: Style;
  starVisible: boolean;
}

export function ItemButton(props: Props) {
  return (
    <ItemBadgeBox onClick={props.onClick} item={props.item} starVisible={props.starVisible} src={props.src} styles={props.styles}>
      <RoundImage
        src={props.floatImagePath}
        styles={{
          width: '30px',
          height: '30px',
          backgroundColor: `${props.fillFloatBackground ? '#f1f2f3' : 'transparent'}`,
          small: {
            width: '25px',
            height: '25px'
          }
        }}
      />
    </ItemBadgeBox>
  );
}
