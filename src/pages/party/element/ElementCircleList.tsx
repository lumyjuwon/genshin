import React from 'react';
import styled from 'styled-components';

import { ElementCircle } from './ElementCircle';

const ElementLayout = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  padding: '0 20vw 0',
  marginBottom: '5vh',
  '@media screen and (max-width: 1380px)': {
    padding: '0 5vw 0'
  },
  '@media screen and (max-width: 768px)': {
    padding: '0'
  }
});

const elements: { [key: string]: { resource: any; borderColor: string } } = {
  Anemo: {
    resource: require('../../../resources/images/elements/Anemo.png'),
    borderColor: 'rgb(74, 255, 227)'
  },
  Cryo: {
    resource: require('../../../resources/images/elements/Cryo.png'),
    borderColor: 'rgb(175, 255, 255)'
  },
  Dendro: {
    resource: require('../../../resources/images/elements/Dendro.png'),
    borderColor: 'rgb(177, 233, 41)'
  },
  Electro: {
    resource: require('../../../resources/images/elements/Electro.png'),
    borderColor: 'rgb(255, 172, 255)'
  },
  Geo: {
    resource: require('../../../resources/images/elements/Geo.png'),
    borderColor: 'rgb(255, 231, 4)'
  },
  Hydro: {
    resource: require('../../../resources/images/elements/Hydro.png'),
    borderColor: 'rgb(5, 255, 255)'
  },
  Pyro: {
    resource: require('../../../resources/images/elements/Pyro.png'),
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
