import React from "react";
import styled from "styled-components";

import { characterInfo, weaponInfo } from 'src/resources/data';
import { FlexWrapper, SquareImage, TextCenterWrapper } from "src/components";

const GridContainer = styled.div({
  backgroundColor: "#333",
  display: "grid",
  width: "1300px",
  height: "400px",
  gridTemplateColumns: "repeat(auto-fit, 110px)",
  columnGap: "12px",
  textAlign: "center",
  padding: "0 15px",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",
  "@media screen and (max-width: 1380px)": {
    width: "700px",
    gridTemplateColumns: "repeat(5, 110px)",
    columnGap: "10px",
    gridTemplateRows: "(auto-fit, 200px)",
    rowGap: "10px",
    height: "500px"
  },
  "@media screen and (max-width: 768px)": {
    width: "100%",
    gridTemplateColumns: "repeat(3, 80px)",
    gridTemplateRows: "(auto-fit, 80px)",
  },

});

const ItemTooltip = styled.div({
  visibility: "hidden",
  width: "100%",
  position: "absolute",
  bottom: "16px",
  left: "0",
  backgroundColor: "#000",
  textAlign: "center",
  borderRadius: "8px",
  opacity: "0.8",
  overflow: "hidden",
  fontSize: "16px"
});

const HoverTransform = styled.div`
  position: relative;
  z-index: 1;
  &:hover {
    z-index: 2;
    transition: 0.1s ease-in-out;
    transform: scale(1.2, 1.2);
  }
  &:hover ${ItemTooltip} {
    visibility: visible;
  }
`

const Container = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1300px",
  height: "400px",
  backgroundColor: "#333",
  margin: "0 auto",
  "@media screen and (max-width: 1380px)": {
    width: "700px",
    height: "500px"
  },
  "@media screen and (max-width: 768px)": {
    width: "100%"
  },
})

interface Props {
  result: Array<string>;
}

export function GachaArrangeView(props: Props) {

  const shadowPal: { five: string; four: string } = {
    five: "0 0 8px 2px #a86d1f, 0px 10px 5px #a86d1f, 0px -10px 5px #a86d1f",
    four: "0 0 8px 2px #b182c4, 0px 10px 5px #b182c4, 0px -10px 5px #b182c4",
  };

  

  if(props.result.length) {

    return (
      <Container>
        <FlexWrapper>
          <GridContainer>
            {props.result.map((item: string, index: number) => {
              let shadow = "0 0 8px 2px #777, 0px 8px 5px #777, 0px -8px 5px #777";
              if (characterInfo[item]) {
                if (characterInfo[item].rank === 5) shadow = shadowPal.five;
                else if (characterInfo[item].rank === 4) shadow = shadowPal.four;
    
              } else {
                if (weaponInfo[item].rank === 5) shadow = shadowPal.five;
                else if (weaponInfo[item].rank === 4) shadow = shadowPal.four;
              }
              let imagePath = require(`../../resources/images/gacha/${item}.png`);
              if (window.innerWidth < 768 && characterInfo[item]) imagePath = require(`../../resources/images/gacha/${item}_sm.png`)
              return (
                <HoverTransform key={index}>
                  <SquareImage
                    styles={{
                      width: "110px",
                      height: "300px",
                      boxShadow: `${shadow}`,
                      objectFit: "none",
                      medium: {height: "220px"},
                      small: {width: "80px", height: "80px"}
                    }}
                    src={imagePath}
                  />
                  <ItemTooltip>{item}</ItemTooltip>
                </HoverTransform>
              );
            })}
          </GridContainer>
        </FlexWrapper>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <FlexWrapper
          styles={{
            small: {flexDirection: "column"}
          }}
        >
          <>
          <SquareImage
            styles={{width: "300x", height: "370px"}}
            src={require("../../resources/images/characters/Flying Paimon.gif")} 
          />
          <TextCenterWrapper styles={{ fontSize: "25px", small: {fontSize: "20px"}}}>
            <>
            <span role="img">💬&nbsp;</span>
            Click button to start!
            </>
          </TextCenterWrapper>
          </>
        </FlexWrapper>
      </Container>
    )
  }
  
}
