import React from 'react';
import styled from 'styled-components';

import { RoundImage } from 'src/components';
import { ImageSrc } from 'src/resources/images';

interface Props {
  src: ImageSrc;
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
  justifyContent: 'center'
});

export function SelectedCharacterImage(props: Props) {
  return (
    <Container>
      <RoundImage
        src={props.src}
        styles={{
          width: '100px',
          height: '100px',
          borderRadius: '35%'
        }}
      />
    </Container>
  );
}
