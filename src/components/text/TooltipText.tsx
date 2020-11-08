import React from 'react';
import styled from 'styled-components';

export interface TooltipStyle {
  readonly fontSize?: string;
  readonly bottom?: string;
  readonly left?: string;
  readonly small?: {
    readonly fontSize?: string;
  };
}

const ItemTooltip = styled.div<TooltipStyle>((props: TooltipStyle) => {
  return {
    width: '100%',
    position: 'absolute',
    bottom: props.bottom || '16px',
    left: props.left || '0',
    backgroundColor: '#000',
    textAlign: 'center',
    borderRadius: '8px',
    opacity: '0.8',
    overflow: 'hidden',
    zIndex: 2,
    // not supported in Opera
    wordBreak: 'keep-all',
    fontSize: props.fontSize || '16px',
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || props.fontSize || '12px'
    }
  };
});

interface Props {
  children: JSX.Element | string;
  styles?: TooltipStyle;
}

export function TooltipText(props: Props) {
  return <ItemTooltip {...props.styles}>{props.children}</ItemTooltip>;
}
