import React from 'react';
import styled from 'styled-components';

interface Style {
  gridTemplateColumns: string;
  rowGap?: string;
  columnGap?: string;
  placeContent?: string;
  margin?: string;
  medium?: {
    gridTemplateColumns: string;
    rowGap?: string;
    columnGap?: string;
  };
  small?: {
    gridTemplateColumns: string;
    rowGap?: string;
    columnGap?: string;
  };
}

const GridContainer = styled.div<Style>((props) => {
  return {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: props.gridTemplateColumns || 'repeat(auto-fit, 300px)',
    rowGap: props.rowGap || '10px',
    columnGap: props.columnGap || '10px',
    margin: props.margin || '20px 0 0',
    justifyItems: 'center',
    placeContent: props.placeContent || 'center',
    '@media screen and (max-width: 1380px)': {
      gridTemplateColumns: props.medium?.gridTemplateColumns || 'repeat(auto-fit, 300px)',
      rowGap: props.medium?.rowGap || '10px',
      columnGap: props.medium?.columnGap || '10px'
    },
    '@media screen and (max-width: 768px)': {
      gridTemplateColumns: props.small?.gridTemplateColumns || 'repeat(auto-fit, 300px)',
      rowGap: props.small?.rowGap || '10px',
      columnGap: props.small?.columnGap || '10px'
    }
  };
});

interface Props {
  styles: Style;
  children: JSX.Element | JSX.Element[];
}

export function CSSGridWrapper(props: Props) {
  return <GridContainer {...props.styles}>{props.children}</GridContainer>;
}
