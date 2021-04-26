import React from 'react';
import styled from 'styled-components';

interface LabelStyles {
  readonly width?: string;
  readonly height?: string;
  readonly small?: {
    readonly fontSize?: string;
  };
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
    width: props.width || 'auto',
    height: props.height || 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    WebkitTouchCallout: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    MozUserSelect: 'none',
    userSelect: 'none',
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || 'inherit'
    }
  };
});

const CheckboxInput = styled.input<InputStyles>((props: InputStyles) => {
  return {
    width: props.width || '16px',
    height: props.height || '16px'
  };
});

interface Props {
  readonly onClick?: Function;
  readonly children?: JSX.Element | string;
  readonly styles?: StyleProps;
}

export const CheckBoxButton = React.forwardRef<HTMLInputElement, Props>((props, forwardedRef) => {
  return (
    <CheckboxLabel
      {...props.styles?.labelStyles}
      onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        props.onClick?.();
      }}
    >
      {props.children}
      <CheckboxInput ref={forwardedRef} {...props.styles?.inputStyles} type="checkbox" />
    </CheckboxLabel>
  );
});
