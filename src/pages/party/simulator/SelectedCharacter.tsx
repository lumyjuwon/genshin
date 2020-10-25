import React from 'react';
import { RoundImage } from 'src/components';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Container = styled.div({
  display: 'flex',
  border: '2px solid #f1f2f3',
  borderRadius: '8px',
  width: 'fit-content',
  padding: '5px 5px',
  margin: '10px',
  color: '#f1f2f3',
  transition: '0.2s',
  alignItmes: 'center',
  justifyContent: 'centre'
});

export function SelectedCharacterImage(props: Props) {
  return (
    <Container>
      <RoundImage
        src={props.src}
        styles={{
          width: '120px',
          height: '120px',
          borderRadius: '35%'
        }}
      />
    </Container>
  );
}
