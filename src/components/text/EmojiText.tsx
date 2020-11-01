import React from 'react';

interface Props {
  symbol: string;
  label: string;
}

export function EmojiText(props: Props) {
  return (
    <span role="img" aria-label={props.label}>
      {props.symbol}
    </span>
  );
}
