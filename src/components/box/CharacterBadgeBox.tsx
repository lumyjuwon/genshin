import React from 'react';
import styled from 'styled-components';

import { Rank } from 'src/resources/data';
import { trans, Lang, KeyLang } from 'src/resources/languages';

import { TooltipText, TooltipStyle } from '../text/TooltipText';
import { changeItemNameToKeyLang } from 'src/utils';

interface BoxStyle {
  readonly margin?: string;
  readonly small?: {
    readonly margin?: string;
  };
}

interface BadgePosition {
  readonly top?: string;
  readonly left?: string;
}

interface NameStyle {
  margin?: string;
  fontSize?: string;
  medium?: {
    margin?: string;
    fontSize?: string;
  };
  small?: {
    margin?: string;
    fontSize?: string;
  };
}

const Relative = styled.div<BoxStyle>`
  position: relative;
  margin: ${(props) => props.margin || '6px'};
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin: ${(props) => props.small?.margin || '3px'};
  }
`;

const Inner = styled.div({
  display: 'flex',
  borderRadius: '8px'
});

const BadgeContainer = styled.div<BadgePosition>((props: BadgePosition) => {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: props.top || '2px',
    left: props.left || '2px',
    zIndex: 1
  };
});

const CharacterName = styled.div<NameStyle>((props) => {
  return {
    height: '45px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: '#0f1011',
    fontWeight: 'bold',
    borderRadius: '0 0 8px 8px',
    backgroundColor: '#f1f2f3',
    margin: props.margin || '-21px 0 0',
    fontSize: props.fontSize || '16px',
    '@media screen and (max-width: 1380px)': {
      margin: props.medium?.margin || '-21px 0 0',
      fontSize: props.medium?.fontSize || '16px'
    },
    '@media screen and (max-width: 768px)': {
      margin: props.small?.margin || '-21px 0 0',
      fontSize: props.small?.fontSize || '16px'
    }
  };
});

export interface Style {
  boxStyles?: BoxStyle;
  badgePosition?: BadgePosition;
  nameStyles?: NameStyle;
}

interface Props {
  badge: JSX.Element;
  child: JSX.Element;
  name: string;
  onClick?: Function;
  styles?: Style;
  isActive?: boolean;
  isBadgeVisible?: boolean;
}

export function CharacterBadgeBox(props: Props) {
  return (
    <Relative
      {...props.styles?.boxStyles}
      onClick={() => {
        if (props.isActive) {
          props.onClick?.();
        }
      }}
    >
      <Inner>
        {props.isBadgeVisible && <BadgeContainer {...props.styles?.badgePosition}>{props.badge}</BadgeContainer>}

        {props.child}
      </Inner>
      <CharacterName>{trans(Lang[changeItemNameToKeyLang(props.name)])}</CharacterName>
    </Relative>
  );
}
