import React from 'react';
import styled from 'styled-components';

import { gachaInfo } from '../../resources/data';
import { FlexWrapper, TextCenterWrapper, SquareImage } from 'src/components';

interface Styles {
  styles: {
    fontSize?: string;
    margin?: string;
  }
}

const Icon = styled.div({
  transition: "0.2s",
  transform: "rotate(180deg)"
})

const DropDown = styled.ul({
  width: "300px",
  zIndex: 5,
  backgroundColor: "transparent",
  position: "absolute",
  borderRadius: "8px",
  top: "39px",
  left: "-1px",
  opacity: "0",
  visibility: "hidden",
  transition: "all 0.1s",
  boxShadow: "6px 6px 3px rgba(0,0,0,0.6)",
  "@media screen and (max-width: 768px)": {
    width: "220px",
    top: "34px"
  }
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
  @media screen and (max-width: 768px) {
    width: 220px;
    font-size: 16px;
    height: 35px;
  }
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
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  backgroundColor: "rgba(0,0,0,0.9)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "scroll",
  zIndex: 10
})

const Help = styled.div({
  display: "flex",
  width: "40px",
  height: "40px",
  justifyContent: "center",
  alignItems: "center",
  padding: "7px",
  border: "1px solid #f1f2f3",
  cursor: "pointer",
  borderRadius: "50%",
  transition: "0.2s",
  margin: "0 0 20px",
  "&:hover": {
    backgroundColor: "#f1f2f3",
  }
});

const DetailsContainer = styled.div({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  width: "1140px",
  margin: "0 auto",
});

const ExitButton = styled.span({
  display: "inline-block",
  position: "absolute",
  top: "0",
  right: "0",
  fontSize: "35px",
  cursor: "pointer"
})

const TextAlignLeft = styled.div<Styles>(props => {
  return {
    width: "100%",
    fontSize: `${props.styles.fontSize || "16px"}`,
    textAlign: "left",
    margin: `${props.styles.margin || "20px 0"}`
  };
})

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

  const onExitClick = () => {
    const help = document.getElementById("help");
    help && (help.style.visibility = help.style.visibility === "hidden" ? "visible" : "hidden");
  }

  return (
    <FlexWrapper styles={{justifyContent: "space-between"}}>
      <>
      <StyledDiv>
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
      </StyledDiv>
      <div style={{position: "relative"}}>
        <Help role="img" onClick={() => onExitClick()}>❔</Help>
        <Details id="help" style={{ visibility: "hidden" }}>
          <DetailsContainer>
            <ExitButton role="img" onClick={() => onExitClick()}>❌</ExitButton>
            <TextCenterWrapper styles={{fontSize: "35px", margin: "0", padding: "0"}}>Information</TextCenterWrapper>
            <TextAlignLeft styles={{fontSize: "25px"}}>
              1. Rules
            </TextAlignLeft>
            <TextAlignLeft styles={{ fontSize: "20px", margin: "0" }}>
              <>
              &nbsp;&nbsp;&nbsp;&nbsp;Same as Genshin Wishes Rule
              <a href="https://genshin-impact.fandom.com/wiki/Wishes"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "16px" }}
              >
                &nbsp;(Go to Wiki<span role="img">&nbsp;👆</span>)
              </a>
              </>
            </TextAlignLeft>
            <TextAlignLeft styles={{ fontSize: "25px" }}>
              2. Items
            </TextAlignLeft>
            <TextAlignLeft styles={{fontSize: "20px", margin: "0 0 10px"}}>
              <>
              &nbsp;&nbsp;&nbsp;&nbsp;Selected Wish Content: {`${props.content}`}
              </>
            </TextAlignLeft>
            <FlexWrapper
              styles={{width: "100%", justifyContent: "flex-start"}}
            >
              <>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SquareImage
                src={require(`../../resources/images/gacha/${props.content}.jpg`)}
                styles={{width: "600px", height: "300px"}}
              />
              </>
            </FlexWrapper>
            <TextAlignLeft styles={{fontSize: "20px"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;5-star PickUp Items: {gachaInfo[props.content].pickUpTarget.join(", ") || "None"}
            </TextAlignLeft>
            <TextAlignLeft styles={{fontSize: "20px", margin: "0"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;4-star PickUp Items: {gachaInfo[props.content].fourStars.pickUpItems.join(", ") || "None"}
            </TextAlignLeft>
            <TextAlignLeft styles={{fontSize: "22px"}}>
              <span role="img">⚠</span>&nbsp;This is just for fun!
            </TextAlignLeft>
          </DetailsContainer>
        </Details>
      </div>
      </>
    </FlexWrapper>
  )
}