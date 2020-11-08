import React from 'react';
import styled from 'styled-components';

import { ImageSrc } from 'src/resources/images';

import { RoundImage } from '../image/RoundImage';
import { FlexWrapper } from '../wrapper/FlexWrapper';
import { Style as ImageStyle } from '../image/RoundImage';

interface CardStyle {
  readonly width?: string;
  readonly height?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly backgroundColor?: string;
  readonly borderRadius?: string;
  readonly medium?: {
    readonly width?: string;
    readonly height?: string;
    readonly padding?: string;
    readonly margin?: string;
  };
  readonly small?: {
    readonly width?: string;
    readonly height?: string;
    readonly padding?: string;
    readonly margin?: string;
  };
}

interface TitleStyle {
  fontSize?: string;
  color?: string;
  medium?: {
    fontSize: string;
  };
  small?: {
    fontSize: string;
  };
}

interface DescStyle {
  fontSize?: string;
  color?: string;
  medium?: {
    fontSize: string;
  };
  small?: {
    fontSize: string;
  };
}

const CardContainer = styled.div<CardStyle>((props: CardStyle) => {
  return {
    width: props.width || 'fit-content',
    height: props.height || 'auto',
    padding: props.padding || '10px',
    margin: props.margin || '30px',
    backgroundColor: props.backgroundColor || '#313233',
    borderRadius: props.borderRadius || '16px',
    boxShadow: '10px 10px 6px rgba(0,0,0,0.7)',
    transition: '.2s ease-out',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(38,38,38,0.5)'
    },
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || props.width || 'fit-content',
      height: props.medium?.height || props.height || 'auto',
      padding: props.medium?.padding || props.padding || '10px',
      margin: props.medium?.margin || props.margin || '30px'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      height: props.small?.height || props.height || 'auto',
      padding: props.small?.padding || props.padding || '10px',
      margin: props.small?.margin || props.margin || '30px'
    }
  };
});

const Title = styled.div<TitleStyle>((props: TitleStyle) => {
  return {
    fontSize: props.fontSize || '25px',
    color: props.color || 'inherit',
    marginTop: '20px',
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || props.fontSize || '25px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || props.fontSize || '25px'
    }
  };
});

const Description = styled.div<DescStyle>((props: DescStyle) => {
  return {
    fontSize: props.fontSize || '20px',
    color: props.color || 'inherit',
    fontWeight: 'lighter',
    textAlign: 'center',
    marginTop: '20px',
    wordBreak: 'keep-all',
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || props.fontSize || '20px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || props.fontSize || '20px'
    }
  };
});

interface Props {
  src: ImageSrc;
  title: string;
  desc?: string;
  styles?: {
    cardStyles?: CardStyle;
    titleStyles?: TitleStyle;
    descStyles?: DescStyle;
    imageStyles?: ImageStyle;
  };
  onClick?: Function;
}

export function ImageContentCard(props: Props) {
  return (
    <CardContainer {...props.styles?.cardStyles} onClick={() => props.onClick?.()}>
      <FlexWrapper
        styles={{
          flexDirection: 'column',
          medium: { flexDirection: 'column' },
          small: { flexDirection: 'column' }
        }}
      >
        <>
          <RoundImage src={props.src} styles={props.styles?.imageStyles} />
          <Title {...props.styles?.titleStyles}>{props.title}</Title>
          <Description {...props.styles?.descStyles}>{props.desc}</Description>
        </>
      </FlexWrapper>
    </CardContainer>
  );
}
