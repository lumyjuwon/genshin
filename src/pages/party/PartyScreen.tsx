import React, { useEffect, useState } from 'react';

import { ContentWrapper } from 'src/components';
import { characterInfo, CharacterName } from 'src/resources/data';
import { ImageSrc } from 'src/resources/images';

import { Menu } from './Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

type ElementName = string;
type ElementCount = number;

const MAX_SELECTED_CHARACTER = 4;

// const selectedArtifacts = new Map<ArtifactName, ImageSrc>(new Map());
const selectedCharacters = new Map<CharacterName, ImageSrc>(new Map());
const emptyCharacters = new Map<CharacterName, ImageSrc>([
  ['0', undefined],
  ['1', undefined],
  ['2', undefined],
  ['3', undefined]
]);

export function PartyScreen() {
  const [allCharacters, setAllCharacters] = useState<Array<[CharacterName, ImageSrc]>>([]);
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());

  useEffect(() => {
    setAllCharacters([...selectedCharacters, ...emptyCharacters]);
    fillEmptyCharacters(selectedCharacters.size);
    changeActiveElements(selectedCharacters);
  }, []);

  function fillEmptyCharacters(filledCharacterSize: number) {
    emptyCharacters.clear();

    let emptyCharacterCount = 0;
    while (emptyCharacterCount !== MAX_SELECTED_CHARACTER - filledCharacterSize) {
      emptyCharacters.set(emptyCharacterCount.toString(), undefined);
      emptyCharacterCount++;
    }
  }

  function changeActiveElements(characters: Map<CharacterName, ImageSrc>) {
    const activeElems: Map<ElementName, ElementCount> = new Map();

    characters.forEach((value: any, name: string) => {
      if (characterInfo[name].element !== undefined) {
        const element: string = characterInfo[name].element;
        if (activeElems.has(element)) {
          //@ts-ignore Check Has
          activeElems.set(element, activeElems.get(element) + 1);
        } else {
          activeElems.set(element, 1);
        }
      }
    });

    const combinedCharacters = [...selectedCharacters].concat([...emptyCharacters]);
    setAllCharacters(combinedCharacters);
    setActiveElements(activeElems);
  }

  return (
    <ContentWrapper>
      <>
        <Menu />
        <CharacterSimulator
          // activeArtifacts={activeArtifacts}
          selectedCharacter={selectedCharacters}
          fillEmptyCharacters={fillEmptyCharacters}
          changeActiveElements={changeActiveElements}
          characters={allCharacters}
          emptyCharacters={emptyCharacters}
        />
        <ElementResult activeElements={activeElements} />
      </>
    </ContentWrapper>
  );
}
