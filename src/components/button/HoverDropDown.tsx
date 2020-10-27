import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from '../wrapper/FlexWrapper';

interface ContainerStyles {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
}

interface ListStyles {
  width?: string;
  backgroundColor?: string;
  top: string;
  left: string;
}

interface Styles {
  containerStyles?: ContainerStyles;
  listStyles?: ListStyles
}

const Icon = styled.div({
  transition: "0.2s",
  transform: "rotate(180deg)"
})

const DropDown = styled.ul<Styles>((props: Styles) => {
  return {
    width: props.listStyles?.width || "interit",
    backgroundColor: props.listStyles?.backgroundColor || "transparent",
    zIndex: 1,
    position: "absolute",
    borderRadius: "8px",
    top: props.listStyles?.top || "0",
    left: props.listStyles?.left || "0",
    opacity: "0",
    visibility: "hidden",
    transition: "all 0.1s",
    boxShadow: "6px 6px 3px rgba(0,0,0,0.6)",
  };
})

const HoverDiv = styled.div({

})

const Container = styled.div<Styles>`
  width: ${props => props.containerStyles?.width || "120px"};
  height: ${props => props.containerStyles?.height || "30px"};
  font-size: ${props => props.containerStyles?.fontSize || "16px"};
  padding: ${props => props.containerStyles?.padding || "5px 10px"};
  margin: ${props => props.containerStyles?.margin || "0 10px 0 0"};
  border: 1px solid #f1f2f3;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  &:hover {
    color: #212223;
    background-color: #f1f2f3;
  };
  &:hover ${Icon} {
    transform: rotate(0);
  };
  &:hover ${DropDown} {
    opacity: 1;
    visibility: visible;
  };
`

const List = styled.li({
  padding: "5px 10px",
  backgroundColor: "#f1f2f3",
  width: "100%",
  borderTop: "1px solid #212223",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "#ccc",
  }
});

interface Props {
  defauitValue: Element | string;
  hoverList: Array<string>;
  onClick: Function;
  styles?: Styles;
}

export function HoverDropDown(props: Props){
  return (
    <Container {...props.styles?.containerStyles}>
      <FlexWrapper styles={{justifyContent: "space-between"}}>
        <>
        <HoverDiv>
          {props.defauitValue}
        </HoverDiv>
        <Icon>▲</Icon>
        </>
      </FlexWrapper>
      <DropDown {...props.styles?.listStyles}>
        {props.hoverList.map((content: string, i: number) => {
          return (
            <List
              key={i}
              value={content}
              onClick={() => props.onClick?.()}
            >
              {content}
            </List>
          );
        })}
      </DropDown>
    </Container>
  );
}