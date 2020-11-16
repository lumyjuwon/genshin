import React from 'react';
import styled from 'styled-components';

const GridTable = styled.div({
  display: 'grid',
  gridTemplateColumns: '100px 200px 600px',
  gridTemplateRows: 'repeat(auto-fit, 100px)',
  width: 'max-content',
  margin: '30px auto'
});

interface Props {}

export function CharacterAscesion(props: Props) {
  return <GridTable>CharacterAscesion</GridTable>;
}
