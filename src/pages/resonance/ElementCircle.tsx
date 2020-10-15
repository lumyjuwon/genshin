import React from "react";
import { RoundImage } from "src/components";
import styled from "styled-components";

interface Props {
  isActive?: boolean;
}

export function ElementCircle(props: Props) {
  return (
    <RoundImage
      src={require("../../resources/elements/images/Element_Dendro.png")}
    />
  );
}
