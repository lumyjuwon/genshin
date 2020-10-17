import React from "react";
import { RoundImage } from "src/components";
import styled from "styled-components";

interface Props {
  src: ImageData;
  isActive?: boolean;
  styles?: ContainerStyle;
}

interface ContainerStyle {
  opacity?: string;
  borderColor?: string;
}

const Container = styled.div((props: ContainerStyle) => {
  return {
    display: "flex",
    width: "fit-content",
    border: `4px solid ${props.borderColor || ""}`,
    borderRadius: "50%",
    padding: "12px",
    margin: "10px",
    opacity: props.opacity || "1",
  };
});

export function ElementCircle(props: Props) {
  return (
    <Container {...props.styles} opacity={props.isActive ? "1" : "0.3"}>
      <RoundImage
        src={props.src}
        styles={{
          width: "50px",
          height: "50px",
        }}
      />
    </Container>
  );
}
