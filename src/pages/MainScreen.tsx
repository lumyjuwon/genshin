import React from 'react';
import { ImageContentCard, TextCenterWrapper } from 'src/components';
import styled from 'styled-components';

const ImageContainer = styled.div({
  width: "100%",
  height: "90vh",
  backgroundImage: `url(${require("../resources/images/mainscreen/main.jpg")})`,
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
        <ImageContentCard
          src={`${require("../resources/images/mainscreen/gacha.png")}`}
          title="Gacha"
        />
        <ImageContentCard
          src={`${require("../resources/images/mainscreen/party.png")}`}
          title="Party"
        />
      </Containter>
    </ImageContainer>
  )
}