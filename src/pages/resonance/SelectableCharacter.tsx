import React from "react";
import { RoundImageButton } from "src/components";

interface Props {
  src: any;
  onClick: Function;
  isActive?: boolean;
}

export function CharacterImageButton(props: Props) {
  return (
    <RoundImageButton
      src={props.src}
      onClick={props.onClick}
      styles={{
        buttonStyles: {
          backgroundColor: props.isActive ? "#f1f2f3" : "transparent",
        },
        imageStyles: {
          width: "80px",
          height: "80px",
          borderRadius: "35%",
        },
      }}
    />
  );
}
