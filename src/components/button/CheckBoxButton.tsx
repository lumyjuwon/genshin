import React from 'react';
import styled from 'styled-components';

interface LabelStyles {
  readonly width?: string;
  readonly height?: string;
  readonly small?: {
    readonly fontSize?: string;
  }
}

interface InputStyles {
  readonly width?: string;
  readonly height?: string;
}

interface StyleProps {
  readonly labelStyles?: LabelStyles;
  readonly inputStyles?: InputStyles;
}

const CheckboxLabel = styled.label<LabelStyles>((props: LabelStyles) => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    WebkitTouchCallout: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
    MozUserSelect: "none",
		userSelect: "none",
    width: props.width || "auto",
    height: props.height || "auto",
    "@media screen and (max-width: 768px)": {
      fontSize: props.small?.fontSize || "inherit"
    }
  }
});

const CheckboxInput = styled.input<InputStyles>((props: InputStyles) => {
  return {
    width: props.width || "16px",
    height: props.height || "16px"
  }
})

interface Props {
  readonly onClick?: Function;
  readonly children?: JSX.Element | string;
  readonly styles?: StyleProps;
  readonly refProp?: React.RefObject<HTMLInputElement>
}

export function CheckBoxButton(props: Props) {
  return (
    <CheckboxLabel {...props.styles?.labelStyles} onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
      props.onClick?.();
    }}>
      {props.children}
      <CheckboxInput ref={props.refProp} {...props.styles?.inputStyles} type="checkbox"/>
    </CheckboxLabel>
  );
}