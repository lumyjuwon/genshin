import React from 'react';
import styled from 'styled-components';

import { Rank } from 'src/resources/data';
import { trans, Lang } from 'src/resources/languages';

import { TooltipText, TooltipStyle } from '../text/TooltipText';

interface BoxStyle {
  hoverInnerColor?: string;
  margin?: string;
  small?: {
    margin?: string;
  };
}

interface BadgePosition {
  top?: string;
  right?: string;
}

interface RankStyle {
  margin?: string;
  letterSpacing?: string;
  fontSize?: string;
  small?: {
    fontSize: string;
    margin?: string;
    letterSpacing?: string;
  };
}

interface HoverVisibleElementStyle {
  visibillity: 'hidden' | 'inherit' | 'initial' | '-moz-initial' | 'revert' | 'unset' | 'collapse' | 'visible' | undefined;
}

const HoverVisibleElement = styled.div<HoverVisibleElementStyle>((props: HoverVisibleElementStyle) => {
  return {
    visibility: props.visibillity
  };
});

const HoverInner = styled.div({
  display: 'flex',
  borderRadius: '8px'
});

const Relative = styled.div<BoxStyle>`
  position: relative;
  margin: ${(props) => props.margin || '6px'};
  cursor: pointer;
  &:hover ${HoverInner} {
    background-color: ${(props) => props.hoverInnerColor};
  }
  &:hover ${HoverVisibleElement} {
    visibility: visible;
  }
  @media screen and (max-width: 768px) {
    margin: ${(props) => props.small?.margin || '3px'};
  }
`;

const BadgeContainer = styled.div<BadgePosition>((props: BadgePosition) => {
  return {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: props.top || '2px',
    right: props.right || '2px',
    zIndex: 1
  };
});

const StarEmoji = styled.span<RankStyle>((props: RankStyle) => {
  return {
    display: 'inline-block',
    margin: props.margin || '0 0 0 -5px',
    letterSpacing: props.letterSpacing || '-10px',
    fontSize: props.fontSize || '16px',
    width: '100%',
    textAlign: 'center',
    '@media screen and (max-width: 768px)': {
      margin: props.small?.margin || props.margin || '-5px',
      letterSpacing: props.small?.letterSpacing || props.letterSpacing || '-10px',
      fontSize: props.small?.fontSize || props.fontSize || '14px'
    }
  };
});

export interface Style {
  boxStyles?: BoxStyle;
  badgePosition?: BadgePosition;
  rankStyles?: RankStyle;
  tooltipStyles?: TooltipStyle;
}

interface Props {
  badge: JSX.Element;
  child: JSX.Element;
  onClick?: Function;
  tooltip?: string;
  rank?: Rank;
  hoverInnerColor?: string;
  styles?: Style;
  isActive?: boolean;
  isHoverdToolTip?: boolean;
  isToolTipVisible?: boolean;
  isRankVisible?: boolean;
  isBadgeVisible?: boolean;
}

export function ItemBadgeBox(props: Props) {
  return (
    <Relative
      {...props.styles?.boxStyles}
      onClick={() => {
        props.onClick?.();
      }}
      hoverInnerColor={props.hoverInnerColor}
    >
      <HoverInner>
        {props.isBadgeVisible && <BadgeContainer {...props.styles?.badgePosition}>{props.badge}</BadgeContainer>}

        {props.child}
      </HoverInner>

      {props.isToolTipVisible && props.tooltip && (
        <HoverVisibleElement visibillity={props.isHoverdToolTip ? 'hidden' : undefined}>
          <TooltipText styles={props.styles?.tooltipStyles}>
            {trans(Lang[props.tooltip.replace(/\s|-/g, '_').replace(/'/g, '') as Lang])}
          </TooltipText>
        </HoverVisibleElement>
      )}

      {props.isRankVisible && props.rank && (
        <StarEmoji role='img' {...props.styles?.rankStyles}>
          {'⭐'.repeat(props.rank)}
        </StarEmoji>
      )}
    </Relative>
  );
}

ItemBadgeBox.defaultProps = {
  hoverInnerColor: '',
  isHoverdToolTip: true,
  isToolTipVisible: true,
  isRankVisible: true,
  isBadgeVisible: true
};
