import React from 'react';
import styled from 'styled-components';

interface SubOption {
  optionTitle: string;
  optionValue: string;
}

interface Props {
  name: string;
  category: string;
  mainOptionTitle: string;
  mainOptionValue: string;
  rank: number;
  level: number;
  subOptions: SubOption;
}

const Header = styled.div({
  display: 'flex',
  height: '34px',
  backgroundColor: '#BD6932'
});

const MainOptionContent = styled.div({
  display: 'flex',
  height: '180px',
  backgroundColor: 'red',
  borderBottom: '4px solid #876951'
});

const LevelBox = styled.div({
  display: 'flex',
  height: '25px',
  backgroundColor: '#39444F'
});

const SubOptionContent = styled.div({
  display: 'flex',
  height: '300px',
  backgroundColor: '#ECE5D8'
});

export function ArtifactCard() {
  return (
    <div style={{ width: '300px' }}>
      <Header />
      <MainOptionContent />
      <SubOptionContent>
        <LevelBox />
      </SubOptionContent>
    </div>
  );
}
