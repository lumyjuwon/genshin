import React from "react";

import { SquareButton } from "./SquareButton";
import { SquareImage } from "../image/SquareImage";

interface Props {
  onClick: Function;
  image: any;
  width?: number;
  height?: number;
}

export function SquareImageButton(props: Props) {
  return (
    <SquareButton
      onClick={() => {
        props.onClick();
      }}
    >
      <SquareImage
        src={props.image}
        width={props.width}
        height={props.height}
      />
    </SquareButton>
  );
}
