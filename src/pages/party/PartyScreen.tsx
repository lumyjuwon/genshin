import React, { useState } from 'react';
import styled from 'styled-components';

import { characterInfo } from 'src/resources/data';

import { CharacterImageButton } from './simulator/SelectableCharacter';
import { ElementCircleList } from './element/ElementCircleList';
import { ElementEffectSummary } from './element/ElementEffectSummary';
import { Menu } from './Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';

type CharacterName = string;
type CharacterSrc = string;
type ElementName = string;
type ElementCount = number;

const CharacterLayout = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: '25vw',
  paddingRight: '25vw'
});

const MAX_SELECTED_CHARACTER = 4;
const selectedCharacters = new Map<CharacterName, CharacterSrc>(new Map());
const emptyCharacters = new Map<CharacterName, CharacterSrc>([
  ['0', ''],
  ['1', ''],
  ['2', ''],
  ['3', '']
]);

export function PartyScreen() {
  const [allCharacters, setAllCharacters] = useState<Array<[CharacterName, CharacterSrc]>>([...emptyCharacters]);
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());

  function fillEmptyCharacters(filledCharacterSize: number) {
    emptyCharacters.clear();

    let emptyCharacterCount = 0;
    while (emptyCharacterCount !== MAX_SELECTED_CHARACTER - filledCharacterSize) {
      emptyCharacters.set(emptyCharacterCount.toString(), '');
      emptyCharacterCount++;
    }
  }

  function changeActiveElements(characters: Map<CharacterName, CharacterSrc>) {
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

    setActiveElements(activeElems);
  }

  function selectCharacter(name: CharacterName, resource: CharacterSrc) {
    if (selectedCharacters.has(name)) {
      selectedCharacters.delete(name);
    } else {
      if (selectedCharacters.size < MAX_SELECTED_CHARACTER) {
        selectedCharacters.set(name, resource);
      }
    }

    fillEmptyCharacters(selectedCharacters.size);
    changeActiveElements(selectedCharacters);

    const combinedCharacters = [...selectedCharacters].concat([...emptyCharacters]);
    setAllCharacters(combinedCharacters);
  }

  return (
    <div>
      <Menu></Menu>
      <CharacterSimulator allCharacters={allCharacters} />
      <ElementCircleList activeElements={activeElements} />
      <ElementEffectSummary activeElements={activeElements} />
      <CharacterLayout>
        {Object.keys(characterInfo).map((name: string) => {
          return (
            <CharacterImageButton
              key={name}
              src={require(`../../resources/images/characters/${name}.png`)}
              onClick={() => {
                selectCharacter(name, require(`../../resources/images/characters/${name}.png`));
              }}
              isActive={selectedCharacters.has(name)}
            />
          );
        })}
      </CharacterLayout>
    </div>
  );
}
