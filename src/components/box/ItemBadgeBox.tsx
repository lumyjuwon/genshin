import React from 'react';
import styled from 'styled-components';

import { Rank } from 'src/resources/data';
import { trans, Lang } from 'src/resources/languages';

import { TooltipText, TooltipStyle } from '../text/TooltipText';

interface BoxStyle {
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

const BadgeContainer = styled.div<BadgePosition>((props: BadgePosition) => {
  return {
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
  badgePosition?: BadgePosition;
  boxStyles?: BoxStyle;
  rankStyles?: RankStyle;
  tooltipStyles?: TooltipStyle;
}

interface Props {
  badge: JSX.Element;
  image: JSX.Element;
  tooltip?: string;
  rank?: Rank;
  styles?: Style;
  onClick?: Function;
  isActive?: boolean;
  isToolTipVisible?: boolean;
  isRankVisible?: boolean;
  isBadgeVisible?: boolean;
}

export function ItemBadgeBox(props: Props) {
  return (
    <Relative {...props.styles?.boxStyles}>
      <>
        {props.isBadgeVisible && <BadgeContainer {...props.styles?.badgePosition}>{props.badge}</BadgeContainer>}

        {props.image}

        {props.isToolTipVisible && props.tooltip && (
          <HoverVisibleElement>
            <TooltipText styles={props.styles?.tooltipStyles}>
              {trans(Lang[props.tooltip.replace(/\s|-/g, '_').replace(/'/g, '') as Lang])}
            </TooltipText>
          </HoverVisibleElement>
        )}
      </>
      {props.isRankVisible && props.rank && (
        <StarEmoji role='img' {...props.styles?.rankStyles}>
          {'⭐'.repeat(props.rank)}
        </StarEmoji>
      )}
    </Relative>
  );
}

ItemBadgeBox.defaultProps = {
  isToolTipVisible: true,
  isRankVisible: true,
  isBadgeVisible: true
};
