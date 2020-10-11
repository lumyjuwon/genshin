import React from "react";
import { RoundImage, RoundImageButton } from "src/components";
import styled from "styled-components";

interface Props {
  src: any;
  onClick: Function
  isActive?: boolean;
}

export function CharacterImageButton(props: Props) {
  return (
    <RoundImageButton
      src={props.src}
      onClick={props.onClick}
    />
  );
}
