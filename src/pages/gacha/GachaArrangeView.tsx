import React from "react";
import styled from "styled-components";

import { characterInfo, weaponInfo } from 'src/resources/data';
import { FlexWrapper, SquareImage, TextCenterWrapper } from "src/components";

const GridContainer = styled.div({
  backgroundColor: "#333",
  display: "grid",
  width: "1200px",
  height: "400px",
  gridTemplateColumns: "repeat(auto-fit, 100px)",
  columnGap: "12px",
  textAlign: "center",
  padding: "0 15px",
  alignItems: "center",
  justifyItems: "center",
  alignContent: "center",
  justifyContent: "center",

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
  &:hover {
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
  width: "1140px",
  height: "400px",
  backgroundColor: "#333",
  margin: "0 auto"
})

interface Props {
  result: Array<string>;
}

export function GachaArrangeView(props: Props) {

  const shadowPal: { five: string; four: string } = {
    five: "0 0 8px 2px #a86d1f, 0px 25px 5px #a86d1f, 0px -25px 5px #a86d1f",
    four: "0 0 8px 2px #b182c4, 0px 25px 5px #b182c4, 0px -25px 5px #b182c4",
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
              return (
                <HoverTransform key={index}>
                  <SquareImage
                    styles={{
                      height: "300px",
                      boxShadow: `${shadow}`,
                      objectFit: "none",
                    }}
                    src={require(`../../resources/images/gacha/${item}.png`)}
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
        <FlexWrapper>
          <>
            <SquareImage
              styles={{width: "300x", height: "370px"}}
              src={require("../../resources/images/characters/Flying Paimon.gif")} 
            />
            <TextCenterWrapper styles={{ fontSize: "25px"}}>
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
