import React from 'react';
import { RegexColorText } from 'src/components/text/RegexColorText';
import { Lang, trans } from 'src/resources/languages';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '50px',
  '@media screen and (max-width: 1380px)': {
    width: '700px',
    margin: '0 auto 50px'
  },
  '@media screen and (max-width: 768px)': {
    width: '280px',
  }
});

const TextDesc = styled.p({
  fontSize: '20px',
  marginBottom: '16px',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '16px',
    marginBottom: '0'
  }
})

function getDescription(elements: Map<string, number>) {
  const descriptions: string[] = [];

  for (const element of elements) {
    const elementName = element[0];
    const elementCount = element[1];

    if (elementCount >= 2) {
      switch (elementName) {
        case 'Pyro':
          descriptions.push(trans(Lang.Fire_Of_Passion));
          break;
        case 'Hydro':
          descriptions.push(trans(Lang.Healing_Water));
          break;
        case 'Anemo':
          descriptions.push(trans(Lang.Swift_Wind));
          break;
        case 'Electro':
          descriptions.push(trans(Lang.Energetic_Lightning));
          break;
        case 'Dendro':
          break;
        case 'Cryo':
          descriptions.push(trans(Lang.Crushing_Ice));
          break;
        case 'Geo':
          descriptions.push(trans(Lang.Floating_Rock));
          break;
      }
    }
  }

  // 활성된 원소는 4개이지만 description이 없는 경우 임의의 다른 원소 4가지로 취급
  if (descriptions.length === 0 && elements.size === 4) {
    descriptions.push(trans(Lang.Tangled_Guardian));
  }

  return descriptions;
}

interface Props {
  activeElements: Map<string, number>;
}

export function ElementBuffText(props: Props) {
  const descriptions = getDescription(props.activeElements);

  return (
    <Container>
      <TextDesc>{trans(Lang.Active_Party_Buff)}</TextDesc>
      {descriptions.map((description: string) => {
        return (
          <RegexColorText key={description} regex={/\d+%/g} color={'red'} isBold={true}>
            {description}
          </RegexColorText>
        );
      })}
    </Container>
  );
}
