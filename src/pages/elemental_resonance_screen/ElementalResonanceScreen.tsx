import React from "react";
import styled from "styled-components";

import { RoundImage, RoundImageButton, SquareImage, SquareImageButton } from "src/components";
import { ElementCircle } from "./ElementCircle";
import { CharacterImageButton } from "./CharacterImageButton"

const SelectedCharacterList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingLeft: "30vw",
  paddingRight: "30vw",
  marginBottom: "10vh"
})

const CharacterList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  paddingLeft: "25vw",
  paddingRight: "25vw"
});

export function ElementalResonanceScreen() {
  return <div>
    <SelectedCharacterList>
    <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
    <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
    <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
    <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
    </SelectedCharacterList>
    <CharacterList>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
      <CharacterImageButton onClick={() => {}} src={require("../../resources/characters/images/Amber.png")}></CharacterImageButton>
    </CharacterList>
  </div>;
}
