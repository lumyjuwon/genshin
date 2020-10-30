import React from 'react';
import styled from 'styled-components';

import { trans, Lang } from '../../resources/languages';
import { FlexWrapper, ImageContentCard } from 'src/components';

const ImageContainer = styled.div({
  width: '100%',
  height: '90vh',
  backgroundImage: `url(${require('../../resources/images/mainscreen/main.jpg')})`,
  backgroundSize: 'cover',
  '@media screen and (max-width: 768px)': {
    height: 'auto',
    backgroundImage: 'none',
    backgroundColor: '#333'
  }
});

const Containter = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0,0,0,.5)',
  padding: '100px 150px',
  '@media screen and (max-width: 1380px)': {
    padding: '70px 100px'
  },
  '@media screen and (max-width: 768px)': {
    padding: '50px 80px'
  }
});

const Title = styled.div({
  fontSize: '50px',
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: '40px',
  '@media screen and (max-width: 1380px)': {
    fontSize: '40px'
  },
  '@media screen and (max-width: 768px)': {
    fontSize: '30px'
  }
});

export function MainScreen() {
  return (
    <ImageContainer>
      <Containter>
        <Title>{trans(Lang.Main_Title)}</Title>
        <FlexWrapper styles={{ width: '100%' }}>
          <FlexWrapper
            styles={{
              width: 'fit-content',
              small: { flexDirection: 'column' }
            }}
          >
            <>
              <ImageContentCard
                src={`${require('../../resources/images/mainscreen/gacha.png')}`}
                title={trans(Lang.Gacha)}
                desc={trans(Lang.Main_Wish_Desc)}
                styles={{
                  cardStyles: {
                    width: '300px',
                    height: '400px',
                    padding: '20px 10px',
                    medium: { width: '210px', margin: '20px' },
                    small: { width: '260px' }
                  },
                  imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } }
                }}
              />
              <ImageContentCard
                src={`${require('../../resources/images/mainscreen/party.png')}`}
                title={trans(Lang.Party)}
                desc={trans(Lang.Main_Party_Desc)}
                styles={{
                  cardStyles: {
                    width: '300px',
                    height: '400px',
                    padding: '20px 10px',
                    medium: { width: '210px', margin: '20px' },
                    small: { width: '260px' }
                  },
                  imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } }
                }}
              />
              <ImageContentCard
                src={`${require('../../resources/images/mainscreen/Paimon.jpg')}`}
                title="Coming Soon..."
                desc="Coming Soon..."
                styles={{
                  cardStyles: {
                    width: '300px',
                    height: '400px',
                    padding: '20px 10px',
                    medium: { width: '210px', margin: '20px' },
                    small: { width: '260px' }
                  },
                  imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } }
                }}
              />
            </>
          </FlexWrapper>
        </FlexWrapper>
      </Containter>
    </ImageContainer>
  );
}
