import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../wrapper/FlexWrapper';

interface CardStyle {
  readonly width?: string;
  readonly height?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly backgroundColor?: string;
  readonly borderRadius?: string;
}

interface TitleStyle {
  fontSize?: string;
  color?: string;
}

interface DescStyle {
  fontSize?: string;
  color?: string;
}

const CardContainer = styled.div<CardStyle>((props: CardStyle) => {
  return {
    width: props.width || 'fit-content',
    height: props.height || 'auto',
    padding: props.padding || '10px',
    margin: props.margin || '10px',
    backgroundColor: props.backgroundColor || '#313233',
    borderRadius: props.borderRadius || '16px',
    boxShadow: '10px 10px 6px rgba(0,0,0,0.7)',
    transition: '.2s ease-out',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(38,38,38,0.5)'
    }
  };
});

const Title = styled.div<TitleStyle>((props: TitleStyle) => {
  return {
    fontSize: props.fontSize || '25px',
    color: props.color || 'inherit',
    marginTop: '20px'
  };
});

const Description = styled.div<DescStyle>((props: DescStyle) => {
  return {
    fontSize: props.fontSize || '20px',
    color: props.color || 'inherit',
    fontWeight: 'lighter',
    textAlign: 'center',
    marginTop: '20px'
  };
});

interface Props {
  desc?: string;
  title: string;
  styles?: {
    cardStyles?: CardStyle;
    titleStyles?: TitleStyle;
    descStyles?: DescStyle;
  };
  onClick?: Function;
}

export function TextContentCard(props: Props) {
  return (
    <CardContainer {...props.styles?.cardStyles} onClick={() => props.onClick?.()}>
      <FlexWrapper styles={{ flexDirection: 'column' }}>
        <>
          <Title {...props.styles?.titleStyles}>{props.title}</Title>
          <Description {...props.styles?.descStyles}>{props.desc}</Description>
        </>
      </FlexWrapper>
    </CardContainer>
  );
}
