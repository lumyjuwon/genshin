import React from 'react';
import { RoundImageButton } from 'src/components';

interface Props {
  src: string | null;
  onClick: Function;
  isActive?: boolean;
}

export function SelectButton(props: Props) {
  return (
    <RoundImageButton
      src={props.src}
      onClick={props.onClick}
      styles={{
        buttonStyles: {
          backgroundColor: props.isActive ? '#f1f2f3' : 'transparent',
          small: { margin: '5px' }
        },
        imageStyles: {
          width: '80px',
          height: '80px',
          borderRadius: '35%',
          small: { width: '60px', height: '60px'}
        }
      }}
    />
  );
}
