import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../wrapper/FlexWrapper';

interface ContainerStyles {
  readonly width?: string;
  readonly height?: string;
  readonly margin?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly small?: {
    readonly width?: string;
    readonly height?: string;
    readonly fontSize?: string;
  };
}

interface ListStyles {
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly top?: string;
  readonly left?: string;
  readonly small?: {
    readonly width?: string;
    readonly top?: string;
    readonly left?: string;
  };
}

const Icon = styled.div({
  fontSize: '12px',
  transition: '0.2s',
  transform: 'rotate(180deg)'
});

const DropDown = styled.ul<ListStyles>((props: ListStyles) => {
  return {
    width: props.width || 'fit-content',
    backgroundColor: props.backgroundColor || 'transparent',
    top: props.top || '0',
    left: props.left || '0',
    zIndex: 5,
    position: 'absolute',
    borderRadius: '8px',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.1s',
    boxShadow: '6px 6px 3px rgba(0,0,0,0.6)',
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      top: props.small?.top || props.top || '0',
      left: props.small?.left || props.left || '0'
    }
  };
});

const HoverDiv = styled.div({});

const Container = styled.div<ContainerStyles>`
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || '30px'};
  font-size: ${(props) => props.fontSize || '16px'};
  padding: ${(props) => props.padding || '5px 10px'};
  margin: ${(props) => props.margin || '0 10px 0 0'};
  border: 1px solid #f1f2f3;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  &:hover {
    background-color: 'rgba(100, 100, 100, .7)';
  }
  &:hover ${Icon} {
    transform: rotate(0);
  }
  &:hover ${DropDown} {
    opacity: 1;
    visibility: visible;
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.small?.width || props.width || 'fit-content'};
    height: ${(props) => props.small?.height || props.height || 'auto'};
    font-size: ${(props) => props.small?.fontSize || props.fontSize || '16px'};
  }
`;

const List = styled.li({
  padding: '5px 10px',
  color: '#f1f2f3',
  backgroundColor: 'rgba(100, 100, 100, .8)',
  width: '100%',
  borderTop: '1px solid #212223',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#ccc'
  }
});

interface Props {
  hoverList: any;
  styles?: {
    containerStyles?: ContainerStyles;
    listStyles?: ListStyles;
  };
  onClick: Function;
  content: any;
}

export function HoverDropDown(props: Props) {
  const onListClick = (index: number): void => {
    props.onClick(index);
  };

  return (
    <Container {...props.styles?.containerStyles}>
      <FlexWrapper styles={{ justifyContent: 'space-between' }}>
        <>
          <HoverDiv>{props.content}</HoverDiv>
          <Icon>▲</Icon>
        </>
      </FlexWrapper>
      <DropDown {...props.styles?.listStyles}>
        {props.hoverList.map((content: string, index: number) => {
          return (
            <List key={index} onClick={() => onListClick(index)}>
              {content}
            </List>
          );
        })}
      </DropDown>
    </Container>
  );
}
