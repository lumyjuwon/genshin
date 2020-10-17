import React, { useState } from "react";
import styled from "styled-components";

import { characterInfo } from "src/resources/data";

import { CharacterImageButton } from "./SelectableCharacter";
import { SelectedCharacterImage } from "./SelectedCharacter";
import { ElementCircleList } from "./ElementCircleList";

const SelectedCharacterLayout = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingLeft: "25vw",
  paddingRight: "25vw",
  marginBottom: "10vh",
});

const CharacterLayout = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  paddingLeft: "25vw",
  paddingRight: "25vw",
});

export function ElementalResonanceScreen() {
  const MAX_SELECTED_CHARACTER = 4;

  const [selectedCharacters, setSelectedCharacters] = useState(
    new Map<string, any>()
  );
  const [unSelectedCharacters, setUnSelectedCharacters] = useState(
    new Map<string, null>([
      ["0", null],
      ["1", null],
      ["2", null],
      ["3", null],
    ])
  );
  const [activeElements, setActiveElements] = useState<Map<string, number>>(
    new Map()
  );

  function selectCharacter(name: string, resource: any) {
    const characters: Map<string, any> = new Map(selectedCharacters);
    const emptyCharacters: Map<string, null> = new Map();
    const activeElems: Map<string, number> = new Map();

    if (characters.has(name)) {
      characters.delete(name);
    } else {
      if (characters.size < MAX_SELECTED_CHARACTER) {
        characters.set(name, resource);
      }
    }

    let emptyCharacterCount = 0;
    while (emptyCharacterCount !== MAX_SELECTED_CHARACTER - characters.size) {
      emptyCharacters.set(emptyCharacterCount.toString(), null);
      emptyCharacterCount++;
    }

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

    setSelectedCharacters(characters);
    setUnSelectedCharacters(emptyCharacters);
    setActiveElements(activeElems);
  }

  return (
    <div>
      <SelectedCharacterLayout>
        {[...selectedCharacters].map((dic: any) => {
          return <SelectedCharacterImage key={dic[0]} src={dic[1]} />;
        })}
        {[...unSelectedCharacters].map((dic: any) => {
          return <SelectedCharacterImage key={dic[0]} src={dic[1]} />;
        })}
      </SelectedCharacterLayout>
      <ElementCircleList activeElements={activeElements} />
      <CharacterLayout>
        {Object.keys(characterInfo).map((name: string) => {
          return (
            <CharacterImageButton
              src={require(`../../resources/images/characters/${name}.png`)}
              onClick={() => {
                selectCharacter(
                  name,
                  require(`../../resources/images/characters/${name}.png`)
                );
              }}
              isActive={selectedCharacters.has(name)}
            />
          );
        })}
      </CharacterLayout>
    </div>
  );
}
