import React from 'react';
import styled from 'styled-components';

import { characterInfo } from 'src/resources/data';
import { CharacterImages } from 'src/resources/images';
import { SquareImage } from 'src/components';

export function CharacterList() {
  const characters = Object.keys(characterInfo);

  return (
    <div>
      {characters.map((character) => {
        return <SquareImage src={CharacterImages[character]} />;
      })}
    </div>
  );
}
