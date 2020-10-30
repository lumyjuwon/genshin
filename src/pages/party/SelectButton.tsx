import React from 'react';
import styled from 'styled-components';

import { characterInfo, weaponInfo, artifactInfo } from 'src/resources/data';
import { RoundImage, RoundImageButton, TextCenterWrapper, TooltipText } from 'src/components';

const HoverVisibleElement = styled.div({
  visibility: "hidden"
});

const Relative = styled.div`
  position: relative;
  margin: 6px;
  &:hover ${HoverVisibleElement} {
    visibility: visible;
  }
  @media screen and (max-width: 768px) {
    margin: 3px;
  }
`;

const Element = styled.div({
  position: "absolute",
  top: '2px',
  right: '2px',
  zIndex: 1
})

const StarEmoji = styled.span({
  marginLeft: "-5px",
  display: "inline-block",
  letterSpacing: "-10px",
  width: "100%",
  textAlign: "center",
  '@media screen and (max-width: 768px)': {
    fontSize: '14px'
  }
})

interface ItemInfo {
  rank: number;
  name: string;
}

interface Props {
  src: string | null;
  onClick: Function;
  item: string;
  isActive?: boolean;
}

export function SelectButton(props: Props) {

  const whatKindsOfItem = (item: string): ItemInfo => {
    let info: ItemInfo = { rank: NaN, name: '' };
    if(characterInfo[item]) {
      info.rank = characterInfo[item].rank;
      info.name = item;
    }
    else if(weaponInfo[item]) {
      info.rank = weaponInfo[item].rank;
      info.name = item;
    }
    else if(artifactInfo[item]) {
      info.rank = artifactInfo[item].rank;
      info.name = artifactInfo[item].set;
    }
    return info;
  }

  return (
    <Relative>
      <>
      {(characterInfo[props.item]) && 
        <Element>
          <RoundImage
            src={require(`../../resources/images/elements/${characterInfo[props.item].element}.png`)}
            styles={{
              width: '30px', height: '30px'
            }}
          />
        </Element>
      }
      <RoundImageButton
        onClick={props.onClick}
        src={props.src}
        styles={{
          buttonStyles: {
            backgroundColor: props.isActive ? '#f1f2f3' : 'transparent',
            margin: '0px'
          },
          imageStyles: {
            width: '80px',
            height: '80px',
            borderRadius: '35%',
            small: { width: '60px', height: '60px'}
          }
        }}
      />
      <HoverVisibleElement>
        <TooltipText styles={{
          fontSize: '14px', bottom: "0px",
          small: { fontSize: '12px' }
        }}>
          {whatKindsOfItem(props.item).name}
        </TooltipText>
      </HoverVisibleElement>
      </>
      <StarEmoji role="img">
        {'⭐'.repeat(whatKindsOfItem(props.item).rank)}
      </StarEmoji>
    </Relative>
  );
}
