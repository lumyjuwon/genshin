import React, { useRef, useState } from "react";
import styled from "styled-components";

import { characterInfo } from "src/resources/data";

import { CharacterImageButton } from "./SelectableCharacter";
import { SelectedCharacterImage } from "./SelectedCharacter";
import { ElementCircleList } from "./ElementCircleList";
import { ElementEffectSummary } from "./ElementEffectSummary";

type CharacterName = string;
type CharacterSrc = string;
type ElementName = string;
type ElementCount = number;

const SelectedCharacterLayout = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingLeft: "25vw",
  paddingRight: "25vw",
  marginBottom: "5vh"
});

const CharacterLayout = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: "25vw",
  paddingRight: "25vw"
});

export function PartyScreen() {
  const MAX_SELECTED_CHARACTER = 4;

  const [selectedCharacters, setSelectedCharacters] = useState(new Map<CharacterName, CharacterSrc>());
  const [emptyCharacters, setEmptyCharacters] = useState(
    new Map<string, null>([
      ["0", null],
      ["1", null],
      ["2", null],
      ["3", null]
    ])
  );
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());

  function fillEmptyCharacters(filledCharacterSize: number) {
    const emptyCharacters: Map<string, null> = new Map();

    let emptyCharacterCount = 0;
    while (emptyCharacterCount !== MAX_SELECTED_CHARACTER - filledCharacterSize) {
      emptyCharacters.set(emptyCharacterCount.toString(), null);
      emptyCharacterCount++;
    }

    setEmptyCharacters(emptyCharacters);
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
    const characters: Map<CharacterName, CharacterSrc> = new Map(selectedCharacters);

    if (characters.has(name)) {
      characters.delete(name);
    } else {
      if (characters.size < MAX_SELECTED_CHARACTER) {
        characters.set(name, resource);
      }
    }

    fillEmptyCharacters(characters.size);
    changeActiveElements(characters);
    setSelectedCharacters(characters);
  }

  return (
    <div>
      <SelectedCharacterLayout>
        {[...selectedCharacters].map((dic: [CharacterName, CharacterSrc]) => {
          return <SelectedCharacterImage key={dic[0]} src={dic[1]} />;
        })}
        {[...emptyCharacters].map((dic: [string, any]) => {
          return <SelectedCharacterImage key={dic[0]} src={dic[1]} />;
        })}
      </SelectedCharacterLayout>
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
