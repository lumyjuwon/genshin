import React, { useState } from 'react';
import styled from 'styled-components';

import { RoundImageButton } from 'src/components';

interface EquipmentButtonProps {
  type: string;
  src: string | null;
  onClick: Function;
}

const EquipmentButton = (props: EquipmentButtonProps) => {
  const [equipment, setEquipment] = useState<string>('');

  return (
    <RoundImageButton
      src={props.src}
      onClick={() => {
        props.onClick();
      }}
      styles={{ buttonStyles: { width: '100px', height: '100px' }, imageStyles: { width: '100px', height: '100px' } }}
    />
  );
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
});

interface Props {
  characterSrc: string | null;
}

const arr = ['Weapon', 'Flower', 'Feather', 'Hourglass', 'HolyGrail', 'Crown'];

export function CharacterEquipment(props: Props) {
  return (
    <Container>
      {props.characterSrc !== null && (
        <>
          {arr.map((type: string) => {
            return <EquipmentButton key={type} type={type} src={null} onClick={() => {}} />;
          })}
        </>
      )}
    </Container>
  );
}
