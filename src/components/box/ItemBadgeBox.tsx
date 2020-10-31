import React from 'react';
import styled from 'styled-components';

import { characterInfo, weaponInfo, artifactInfo } from 'src/resources/data';
import { TooltipText, TooltipStyle } from '../text/TooltipText';
import { ButtonStyle } from '../button/RoundButton';
import { RoundImage, Style as RoundImageStyle } from '../image/RoundImage';
import { RoundImageButton } from '../button/RoundImageButton';

interface BoxStyle {
  margin?: string;
  small?: {
    margin?: string;
  };
}

interface AbsoluteStyle {
  top?: string;
  right?: string;
}

interface StarStyle {
  marginLeft?: string;
  letterSpacing?: string;
  fontSize?: string;
  small?: {
    fontSize: string;
    marginLeft?: string;
    letterSpacing?: string;
  };
}

const HoverVisibleElement = styled.div({
  visibility: 'hidden'
});

const Relative = styled.div<BoxStyle>`
  position: relative;
  margin: ${(props) => props.margin || '6px'};
  &:hover ${HoverVisibleElement} {
    visibility: visible;
  }
  @media screen and (max-width: 768px) {
    margin: ${(props) => props.small?.margin || '3px'};
  }
`;

const Element = styled.div<AbsoluteStyle>((props: AbsoluteStyle) => {
  return {
    position: 'absolute',
    top: props.top || '2px',
    right: props.right || '2px',
    zIndex: 1
  };
});

const StarEmoji = styled.span<StarStyle>((props: StarStyle) => {
  return {
    marginLeft: props.marginLeft || '-5px',
    display: 'inline-block',
    letterSpacing: props.letterSpacing || '-10px',
    fontSize: props.fontSize || '16px',
    width: '100%',
    textAlign: 'center',
    '@media screen and (max-width: 768px)': {
      marginLeft: props.small?.marginLeft || props.marginLeft || '-5px',
      letterSpacing: props.small?.letterSpacing || props.letterSpacing || '-10px',
      fontSize: props.small?.fontSize || props.fontSize || '14px'
    }
  };
});

export interface Style {
  boxStyles?: BoxStyle;
  absoluteStyles?: AbsoluteStyle;
  starStyles?: StarStyle;
  roundImageButtonStyles?: {
    buttonStyles?: ButtonStyle;
    imageStyles?: RoundImageStyle;
  };
  roundImageStyles?: RoundImageStyle;
  tooltipStyles?: TooltipStyle;
}

interface ItemInfo {
  rank: number;
  name: string;
}

interface Props {
  children?: JSX.Element;
  src: string | null;
  onClick?: Function;
  item: string;
  isActive?: boolean;
  styles?: Style;
  starVisible: boolean;
}

export function ItemBadgeBox(props: Props) {
  const whatKindsOfItem = (item: string): ItemInfo => {
    let info: ItemInfo = { rank: NaN, name: '' };
    if (characterInfo[item]) {
      info.rank = characterInfo[item].rank;
      info.name = item;
    } else if (weaponInfo[item]) {
      info.rank = weaponInfo[item].rank;
      info.name = item;
    } else if (artifactInfo[item]) {
      info.rank = artifactInfo[item].rank;
      info.name = artifactInfo[item].set;
    }
    return info;
  };

  console.log(whatKindsOfItem(props.item));

  return (
    <Relative {...props.styles?.boxStyles}>
      <>
        <Element {...props.styles?.absoluteStyles}>{props.children}</Element>
        {props.onClick ? (
          <RoundImageButton onClick={props.onClick} src={props.src} styles={props.styles?.roundImageButtonStyles} />
        ) : (
          <RoundImage src={props.src} styles={props.styles?.roundImageStyles} />
        )}

        <HoverVisibleElement>
          <TooltipText styles={props.styles?.tooltipStyles}>{whatKindsOfItem(props.item).name}</TooltipText>
        </HoverVisibleElement>
      </>
      {props.starVisible ? (
        <StarEmoji role="img" {...props.styles?.starStyles}>
          {'⭐'.repeat(whatKindsOfItem(props.item).rank)}
        </StarEmoji>
      ) : null}
    </Relative>
  );
}
