import React from 'react';
import styled from 'styled-components';

import { ElementImages } from 'src/resources/images';
import { ElementCircle } from './ElementCircle';

const ElementLayout = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0',
  marginBottom: '5vh',
  '@media screen and (max-width: 1380px)': {
    width: '500px',
    margin: '0 auto 10px'
  },
  '@media screen and (max-width: 768px)': {
    width: '100%'
  }
});

const elements: { [key: string]: { resource: any; borderColor: string } } = {
  Anemo: {
    resource: ElementImages.Anemo,
    borderColor: 'rgb(74, 255, 227)'
  },
  Cryo: {
    resource: ElementImages.Cryo,
    borderColor: 'rgb(175, 255, 255)'
  },
  Dendro: {
    resource: ElementImages.Dendro,
    borderColor: 'rgb(177, 233, 41)'
  },
  Electro: {
    resource: ElementImages.Electro,
    borderColor: 'rgb(255, 172, 255)'
  },
  Geo: {
    resource: ElementImages.Geo,
    borderColor: 'rgb(255, 231, 4)'
  },
  Hydro: {
    resource: ElementImages.Hydro,
    borderColor: 'rgb(5, 255, 255)'
  },
  Pyro: {
    resource: ElementImages.Pyro,
    borderColor: 'rgb(255, 140, 90)'
  }
};

interface Props {
  activeElements: Map<string, number>;
}

export function ElementCircleList(props: Props) {
  return (
    <ElementLayout>
      {Object.keys(elements).map((element: string) => {
        return (
          <ElementCircle
            key={element}
            src={elements[element].resource}
            isActive={props.activeElements.has(element)}
            styles={{
              borderColor: elements[element].borderColor
            }}
          />
        );
      })}
    </ElementLayout>
  );
}
