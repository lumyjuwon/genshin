import React from 'react';
import styled from 'styled-components';

interface SubOption {
  optionTitle: string;
  optionValue: string;
}

const Container = styled.div({
  width: '350px'
});

const Header = styled.image({
  display: 'flex',
  height: '48px',
  padding: '2px',
  backgroundColor: '#BD6932'
});

const HeaderBorder = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  border: '2px solid #915229',
  paddingLeft: '16px'
});

const HeaderTitle = styled.span({
  fontSize: '24px',
  fontWeight: 'bold'
});

const MainOptionContent = styled.div({
  display: 'flex',
  flex: 1,
  height: '150px',
  backgroundColor: '#795A53',
  borderBottom: '4px solid #876951',
  paddingLeft: '16px'
});

const MainOptionDesc = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column'
});

const CategoryTitle = styled.span({
  fontSize: '18px',
  marginTop: '16px',
  fontWeight: 'bold'
});

const MainOptionTitle = styled.span({
  fontSize: '18px',
  marginTop: '16px',
  fontWeight: 'bold',
  color: '#B09C96'
});

const MainOptionValue = styled.span({
  fontSize: '32px',
  fontWeight: 'bold'
});

const MainOptionImage = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
});

const ArtifactImage = styled.img({
  display: 'flex',
  width: '80px',
  height: '100px'
});

const SubOptionContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#ECE5D8',
  paddingTop: '24px',
  paddingLeft: '16px',
  paddingBottom: '16px'
});

const LevelBox = styled.div({
  display: 'flex',
  width: '40px',
  height: '25px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#39444F',
  borderRadius: '4px'
});

const LevelValue = styled.span({
  fontSize: '16px',
  fontWeight: 'bold'
});

const SubOptionBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '8px',
  marginTop: '16px'
});

const SubOptionValueBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px'
});

const SubOptionSeperationCircle = styled.div({
  display: 'inline-block',
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  backgroundColor: 'black',
  padding: '10',
  margin: '20',
  marginRight: '8px',
  left: '0',
  top: '0'
});

const SubOptionValue = styled.span({
  fontSize: '20px',
  color: 'black',
  fontWeight: 'bold'
});

interface Props {
  name: string;
  category: string;
  mainOptionTitle: string;
  mainOptionValue: string;
  rank: number;
  level: number;
  subOptions: SubOption;
}

export function ArtifactCard(props: Props) {
  return (
    <Container>
      <Header>
        <HeaderBorder>
          <HeaderTitle>{props.name}</HeaderTitle>
        </HeaderBorder>
      </Header>
      <MainOptionContent>
        <MainOptionDesc>
          <CategoryTitle>{props.category}</CategoryTitle>
          <MainOptionTitle>{props.mainOptionTitle}</MainOptionTitle>
          <MainOptionValue>{props.mainOptionValue}</MainOptionValue>
        </MainOptionDesc>
        <MainOptionImage>
          <ArtifactImage src={require('./123.png')} />
        </MainOptionImage>
      </MainOptionContent>
      <SubOptionContent>
        <LevelBox>
          <LevelValue>+{props.level}</LevelValue>
        </LevelBox>
        <SubOptionBox>
          <SubOptionValueBox>
            <SubOptionSeperationCircle />
            <SubOptionValue>방어력+37</SubOptionValue>
          </SubOptionValueBox>
          <SubOptionValueBox>
            <SubOptionSeperationCircle />
            <SubOptionValue>방어력+37</SubOptionValue>
          </SubOptionValueBox>
        </SubOptionBox>
      </SubOptionContent>
    </Container>
  );
}
