import React from 'react';

export function renderNewLine(text: any) {
  return text.split('\n').map((line: string) => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });
}
