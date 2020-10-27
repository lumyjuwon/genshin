import React from 'react';
import styled from 'styled-components';

import { gachaInfo } from '../../resources/data';
import { FlexWrapper, TextCenterWrapper, SquareImage } from 'src/components';

interface Styles {
  styles: {
    fontSize?: string;
    margin?: string;
    small?: {
      fontSize?: string;
    }
  }
}

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
  "@media screen and (max-width: 1380px)": {
    width: "700px"
  },
  "@media screen and (max-width: 768px)": {
    width: "90%"
  }
});

const ExitButton = styled.span({
  display: "inline-block",
  position: "absolute",
  top: "0",
  right: "0",
  fontSize: "35px",
  cursor: "pointer",
  "@media screen and (max-width: 768px)": {
    fontSize: "25px"
  }
})

const TextAlignLeft = styled.div<Styles>(props => {
  return {
    width: "100%",
    fontSize: props.styles.fontSize || "16px",
    textAlign: "left",
    margin: props.styles.margin || "20px 0", 
    "@media screen and (max-width: 768px)": {
      fontSize: props.styles.small?.fontSize || (props.styles.fontSize || "16px")
    }
  };
});

interface Props {
  content: string;
}

export function GachaDetails(props: Props) {

  const onExitClick = () => {
    const help = document.getElementById("help");
    help && (help.style.visibility = help.style.visibility === "hidden" ? "visible" : "hidden");
  }

  return (
    <div style={{position: "relative"}}>
      <Help role="img" onClick={() => onExitClick()}>❔</Help>
      <Details id="help" style={{ visibility: "hidden" }}>
        <DetailsContainer>
          <ExitButton role="img" onClick={() => onExitClick()}>❌</ExitButton>
          <TextCenterWrapper styles={{fontSize: "35px", margin: "0", padding: "0", small: {fontSize: "25px"}}}>Information</TextCenterWrapper>
          <TextAlignLeft styles={{fontSize: "25px", small: {fontSize: "20px"}}}>
            1. Rules
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: "20px", margin: "0 0 20px", small: {fontSize: "16px"} }}>
            <>
            Same as Genshin Wishes Rule
            <a href="https://genshin-impact.fandom.com/wiki/Wishes"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "16px" }}
            >
              &nbsp;(Go to Wiki<span role="img">&nbsp;👆</span>)
            </a>
            </>
          </TextAlignLeft>
          <TextAlignLeft styles={{ fontSize: "25px", small: {fontSize: "20px"}}}>
            2. Items
          </TextAlignLeft>
          <TextAlignLeft styles={{fontSize: "20px", margin: "0 0 20px", small: {fontSize: "16px"}}}>
            <>
            Selected Wish Content: {`${props.content}`}
            </>
          </TextAlignLeft>
          <FlexWrapper
            styles={{width: "100%", justifyContent: "flex-start", small: {justifyContent: "center"}}}
          >
            <>
            
            <SquareImage
              src={require(`../../resources/images/gacha/${props.content}.jpg`)}
              styles={{width: "600px", height: "300px", small: {width: "90%", height: "auto"}}}
            />
            </>
          </FlexWrapper>
          <TextAlignLeft styles={{fontSize: "20px", small: {fontSize: "16px"}}}>
            5-star PickUp Items: {gachaInfo[props.content].pickUpTarget.join(", ") || "None"}
          </TextAlignLeft>
          <TextAlignLeft styles={{fontSize: "20px", margin: "0", small: {fontSize: "16px"}}}>
            4-star PickUp Items: {gachaInfo[props.content].fourStars.pickUpItems.join(", ") || "None"}
          </TextAlignLeft>
          <TextAlignLeft styles={{fontSize: "22px", small: {fontSize: "18px"}}}>
            <span role="img">⚠</span>&nbsp;This is just for fun!
          </TextAlignLeft>
        </DetailsContainer>
      </Details>
    </div>
  );
}