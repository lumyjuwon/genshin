import React, { useEffect, useState } from 'react';

import { ContentWrapper, GridWrapper, ItemBadgeBox, Modal, RoundImage, RoundImageBox } from 'src/components';
import { ArtifactName, characterInfo, CharacterName, artifactInfo } from 'src/resources/data';
import { CharacterImages, ElementImages, ImageSrc } from 'src/resources/images';

import { Menu } from './Menu';
import { CharacterSimulator } from './simulator/CharacterSimulator';
import { BuffResult } from './BuffResult';

type ElementName = string;
type ElementCount = number;
type ArtifactCount = number;

const MAX_SELECTED_CHARACTER = 4;

// const selectedArtifacts = new Map<ArtifactName, ImageSrc>(new Map());
const selectedCharacters = new Map<CharacterName, ImageSrc>(new Map());
const selectedArtifacts = new Map<ArtifactName, ImageSrc>(new Map());
const emptyCharacters = new Map<CharacterName, ImageSrc>([
  ['0', undefined],
  ['1', undefined],
  ['2', undefined],
  ['3', undefined]
]);

export function PartyScreen() {
  const [allCharacters, setAllCharacters] = useState<Array<[CharacterName, ImageSrc]>>([]);
  const [activeElements, setActiveElements] = useState<Map<ElementName, ElementCount>>(new Map());
  const [activeArtifacts, setActiveArtifacts] = useState<Map<ArtifactName, ArtifactCount>>(new Map());
  const [isVisibleCharacterModal, setIsVisibleCharacterModal] = useState<boolean>(false);

  useEffect(() => {
    setAllCharacters([...selectedCharacters, ...emptyCharacters]);
    fillEmptyCharacters(selectedCharacters.size);
    changeActiveElements(selectedCharacters);
    changeActiveArtifacts(selectedArtifacts);
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

    setActiveElements(activeElems);
  }

  function changeActiveArtifacts(artifacts: Map<ArtifactName, ImageSrc>) {
    const activeElems: Map<ArtifactName, ArtifactCount> = new Map();

    artifacts.forEach((value: any, name: string) => {
      if (artifactInfo[name].set !== undefined) {
        const set: string = artifactInfo[name].set;
        if (activeElems.has(set)) {
          //@ts-ignore Check Has
          activeElems.set(set, activeElems.get(set) + 1);
        } else {
          activeElems.set(set, 1);
        }
      }
    });

    setActiveArtifacts(activeElems);
  }

  function selectCharacter(name: CharacterName, resource: ImageSrc) {
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
          activeArtifacts={activeArtifacts}
          characters={allCharacters}
          onClick={() => {
            setIsVisibleCharacterModal(true);
          }}
        />
        <BuffResult activeArtifacts={activeArtifacts} activeElements={activeElements} />
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
              <ItemBadgeBox
                key={name}
                rank={characterInfo[name].rank}
                tooltip={name}
                hoverInnerColor={'#f1f2f3'}
                onClick={() => {
                  selectCharacter(name, CharacterImages[name]);
                }}
                badge={
                  <RoundImage
                    src={ElementImages[characterInfo[name].element]}
                    styles={{
                      width: '30px',
                      height: '30px',
                      small: {
                        width: '25px',
                        height: '25px'
                      }
                    }}
                  />
                }
                child={
                  <RoundImageBox
                    src={CharacterImages[name]}
                    styles={{
                      boxStyle: {
                        width: '100px',
                        height: '100px',
                        backgroundColor: selectedCharacters.has(name) ? '#f1f2f3' : 'transparent',
                        margin: '0px'
                      },
                      imageStyle: {
                        width: '80px',
                        height: '80px',
                        borderRadius: '35%',
                        small: { width: '60px', height: '60px' }
                      }
                    }}
                  />
                }
                styles={{
                  tooltipStyles: { bottom: '0' }
                }}
              />
            );
          })}
        </GridWrapper>
      </Modal>
    </ContentWrapper>
  );
}
