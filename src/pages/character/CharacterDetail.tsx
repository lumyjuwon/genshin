import React from 'react';

interface Props {
  character: string;
}

export function CharacterDetail(props: Props) {
  return <div>{props.character}</div>;
}
