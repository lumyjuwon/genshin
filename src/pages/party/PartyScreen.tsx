import React, { useEffect, useState } from 'react';

import { ContentWrapper, GridWrapper, Modal } from 'src/components';
import { characterInfo } from 'src/resources/data';

import { Menu } from './Menu';
import { SelectButton } from './SelectButton';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { ElementResult } from './element/ElementResult';

type CharacterName = string;
type CharacterSrc = string | null;
type ElementName = string;
type ElementCount = number;

const MAX_SELECTED_CHARACTER = 4;

const selectedCharacters = new Map<CharacterName, CharacterSrc>(new Map());
const emptyCharacters = new Map<CharacterName, CharacterSrc>([
  ['0', null],
  ['1', null],
  ['2', null],
  ['3', null]
]);

export function PartyScreen() {
  const [allCharacters, setAllCharacters] = useState<Array<[CharacterName, CharacterSrc]>>([]);
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());
  const [isVisibleCharacterModal, setIsVisibleCharacterModal] = useState<boolean>(false);

  useEffect(() => {
    setAllCharacters([...selectedCharacters, ...emptyCharacters]);
    fillEmptyCharacters(selectedCharacters.size);
    changeActiveElements(selectedCharacters);
  }, []);

  function fillEmptyCharacters(filledCharacterSize: number) {
    emptyCharacters.clear();

    let emptyCharacterCount = 0;
    while (emptyCharacterCount !== MAX_SELECTED_CHARACTER - filledCharacterSize) {
      emptyCharacters.set(emptyCharacterCount.toString(), null);
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
    <ContentWrapper>
      <>
        <Menu />
        <CharacterSimulator
          characters={allCharacters}
          onClick={() => {
            setIsVisibleCharacterModal(true);
          }}
        />
        <ElementResult activeElements={activeElements} />
      </>
      <Modal
        cancel={() => {
          setIsVisibleCharacterModal(false);
        }}
        visible={isVisibleCharacterModal}
      >
        <GridWrapper>
          {Object.keys(characterInfo).map((name: string) => {
            return (
              <SelectButton
                key={name}
                fillFloatBackground={false}
                floatImagePath={require(`../../resources/images/elements/${characterInfo[name].element}.png`)}
                item={name}
                src={require(`../../resources/images/characters/${name}.png`)}
                onClick={() => {
                  selectCharacter(name, require(`../../resources/images/characters/${name}.png`));
                }}
                isActive={selectedCharacters.has(name)}
                starVisible={true}
                styles={{
                  boxStyles: {},
                  absoluteStyles: {},
                  starStyles: {},
                  roundImageButtonStyles: {
                    buttonStyles: {
                      // backgroundColor: props.isActive ? '#f1f2f3' : 'transparent',
                      margin: '0px'
                    },
                    imageStyles: {
                      width: '80px',
                      height: '80px',
                      borderRadius: '35%',
                      small: { width: '60px', height: '60px' }
                    }
                  },
                  tooltipStyles: {
                    fontSize: '14px',
                    bottom: '0px',
                    small: { fontSize: '12px' }
                  }
                }}
              />
            );
          })}
        </GridWrapper>
      </Modal>
    </ContentWrapper>
  );
}
