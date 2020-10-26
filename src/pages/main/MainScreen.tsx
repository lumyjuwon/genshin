import React from 'react';
import { FlexWrapper, ImageContentCard } from 'src/components';
import styled from 'styled-components';

const ImageContainer = styled.div({
  width: "100%",
  height: "90vh",
  backgroundImage: `url(${require("../../resources/images/mainscreen/main.jpg")})`,
  backgroundSize: "cover",
  "@media screen and (max-width: 768px)": {
    height: "auto",
    backgroundImage: "none",
    backgroundColor: "#333"
  }
})

const Containter = styled.div({
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,.5)",
  padding: "100px 150px"
})

const Title = styled.div({
  fontSize: "50px",
  textAlign: "center",
  fontWeight: "bold",
  marginBottom: "40px"
})

export function MainScreen() {
  return (
    <ImageContainer>
      <Containter>
        <Title>Genshin Simulator</Title>
        <FlexWrapper styles={{width: "100%"}}>
          <FlexWrapper styles={{width: "fit-content"}}>
            <>
            <ImageContentCard
              src={`${require("../../resources/images/mainscreen/gacha.png")}`}
              title="Wish"
              desc="Test Your Luck!!!"
              styles={{
                cardStyles: {width: "300px", height: "400px", padding: "20px 10px"},
                imageStyles: {width: "200px", height: "200px"}
              }}
            />
            <ImageContentCard
              src={`${require("../../resources/images/mainscreen/party.png")}`}
              title="Party"
              desc="Element Resonance and Character Weapon System"
              styles={{
                cardStyles: {width: "300px", height: "400px", padding: "20px 10px"},
                imageStyles: {width: "200px", height: "200px"}
              }}
            />
            <ImageContentCard
              src={`${require("../../resources/images/mainscreen/Paimon.jpg")}`}
              title="Coming Soon..."
              desc="Coming Soon..."
              styles={{
                cardStyles: {width: "300px", height: "400px", padding: "20px 10px"},
                imageStyles: {width: "200px", height: "200px"}
              }}
            />
            </>
          </FlexWrapper>
        </FlexWrapper>
      </Containter>
    </ImageContainer>
  )
}