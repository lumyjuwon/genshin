import React from "react";
import Styled from "styled-components";

interface Props {
  image: any;
  width?: number;
  height?: number;
}

export function RoundImage(props: Props) {
  const defaultProps: Props = {
    image: undefined,
    width: 100,
    height: 100,
  };

  const combinedProps: Props = Object.assign({}, defaultProps, props);

  const Image = Styled.img({
    width: `${combinedProps.width}`,
    height: `${combinedProps.height}`,
    border: "5px solid #e1cf1e",
    borderRadius: "25%",
  });

  return <Image src={combinedProps.image} />;
}
