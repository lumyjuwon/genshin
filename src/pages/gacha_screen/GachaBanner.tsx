import React from 'react';
import styled from 'styled-components';

import { FlexWrapper } from 'src/components';

const Icon = styled.div({
  transition: "0.2s",
  transform: "rotate(180deg)"
})

const DropDown = styled.ul({
  width: "300px",
  zIndex: 1,
  backgroundColor: "transparent",
  position: "absolute",
  borderRadius: "8px",
  top: "39px",
  left: "-1px",
  opacity: "0",
  visibility: "hidden",
  boxShadow: "6px 6px 3px rgba(0,0,0,0.6)",
})

const StyledDiv = styled.div`
  width: 300px;
  height: 40px;
  border: 1px solid #f1f2f3;
  margin-bottom: 20px;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
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
const HoverDiv = styled.div({

})

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

const Details = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#000",
  visibility: "hidden",
})

const Help = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 7px;
  border: 1px solid #f1f2f3;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;
  &:hover {
    background-color: #f1f2f3;
  };
  &:hover ${Details} {
    visibility: visible;
  };
`

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
}

export function GachaBanner(props: Props) {
  
  let selectedPickUp: string = props.content;
  
  const onListClick = (content: string | null): void => {
    if (content) selectedPickUp = content;
    if(content !== props.content) props.onClick(selectedPickUp);
  }

  return (
    <FlexWrapper styles={{justifyContent: "space-between"}}>
      <>
        <StyledDiv>
          <FlexWrapper styles={{justifyContent: "space-between"}}>
            <>
              <HoverDiv id="content">
                {selectedPickUp}
              </HoverDiv>
              <Icon>^</Icon>
            </>
          </FlexWrapper>
          <DropDown>
            {props.pickUpList.map((content: string, i: number) => {
              return <List key={i} value={content} onClick={(e) => onListClick(e.currentTarget.textContent)}>{content}</List>
            })}
          </DropDown>
        </StyledDiv>
        <div style={{position: "relative"}}>
          <Help role="img">❔</Help>
          <Details>Details</Details>
        </div>
      </>
    </FlexWrapper>
  )
}