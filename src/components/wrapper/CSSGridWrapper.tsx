import React from 'react';
import styled from 'styled-components';

interface Style {
  gridTemplateColumns: string;
  rowGap?: string;
  columnGap?: string;
}

const GridContainer = styled.div<Style>((props) => {
  return {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: props.gridTemplateColumns || 'repeat(auto-fit, 300px)',
    rowGap: props.rowGap || '10px',
    columnGap: props.columnGap || '10px',
    margin: '20px 0 0',
    justifyItems: 'center',
    placeContent: 'center'
  };
});

interface Props {
  styles: Style;
  children: JSX.Element | JSX.Element[];
}

export function CSSGridWrapper(props: Props) {
  return <GridContainer {...props.styles}>{props.children}</GridContainer>;
}
