import React from 'react';
import { RoundButton } from './RoundButton';

export interface Props {
  onClick: Function;
  children: JSX.Element;
}

export function CircleButton(props: Props) {
  return (
    <RoundButton onClick={props.onClick} styles={{ margin: '0px', border: '0px', borderRadius: '50%' }}>
      {props.children}
    </RoundButton>
  );
}
