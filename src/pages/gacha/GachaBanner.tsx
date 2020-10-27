import React, { useRef } from 'react';
import styled from 'styled-components';

import { FlexWrapper, HoverDropDown } from 'src/components';
import { GachaDetails } from './GachaDetails';

// const Icon = styled.div({
//   transition: "0.2s",
//   transform: "rotate(180deg)"
// })

// const DropDown = styled.ul({
//   width: "300px",
//   zIndex: 5,
//   backgroundColor: "transparent",
//   position: "absolute",
//   borderRadius: "8px",
//   top: "39px",
//   left: "-1px",
//   opacity: "0",
//   visibility: "hidden",
//   transition: "all 0.1s",
//   boxShadow: "6px 6px 3px rgba(0,0,0,0.6)",
//   "@media screen and (max-width: 768px)": {
//     width: "220px",
//     top: "34px"
//   }
// })

// const StyledDiv = styled.div`
//   width: 300px;
//   height: 40px;
//   border: 1px solid #f1f2f3;
//   margin-bottom: 20px;
//   font-size: 18px;
//   padding: 5px 10px;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: all 0.2s;
//   position: relative;
//   &:hover {
//     color: #212223;
//     background-color: #f1f2f3;
//   };
//   &:hover ${Icon} {
//     transform: rotate(0);
//   };
//   &:hover ${DropDown} {
//     opacity: 1;
//     visibility: visible;
//   };
//   @media screen and (max-width: 768px) {
//     width: 220px;
//     font-size: 16px;
//     height: 35px;
//   }
// `
// const HoverDiv = styled.div({

// })

// const List = styled.li({
//   padding: "5px 10px",
//   backgroundColor: "#f1f2f3",
//   width: "100%",
//   borderTop: "1px solid #212223",
//   borderRadius: "8px",
//   "&:hover": {
//     backgroundColor: "#ccc",
//   }
// });

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
}

export function GachaBanner(props: Props) {
  
  let selectedPickUp: string = props.content;

  return (
    <FlexWrapper styles={{justifyContent: "space-between"}}>
      <>
      {/* <StyledDiv>
        <FlexWrapper styles={{justifyContent: "space-between"}}>
          <>
          <HoverDiv>
            {selectedPickUp}
          </HoverDiv>
          <Icon>▲</Icon>
          </>
        </FlexWrapper>
        <DropDown id="content">
          {props.pickUpList.map((content: string, i: number) => {
            return (
              <List
                key={i}
                value={content}
                onClick={(e) => onListClick(e.currentTarget.textContent)}
              >
                {content}
              </List>
            );
          })}
        </DropDown>
      </StyledDiv> */}
      <HoverDropDown
        hoverList={props.pickUpList}
        styles={{
          containerStyles: { width: "300px", height: "40px", fontSize: "20px" },
          listStyles: {width: "300px", top: "39px", left: "-1px"}
        }}
        onClick={props.onClick}
        content={props.content}
      />
      <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  )
}