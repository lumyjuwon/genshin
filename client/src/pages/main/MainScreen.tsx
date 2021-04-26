import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { trans, Lang } from '../../resources/languages';
import { FlexWrapper, ImageContentCard, PageHelmet } from 'src/components';
import { AbyssContents } from './AbyssContents';

const ImageContainer = styled.div({
  zIndex: -1,
  width: '100%',
  height: '100vh',
  position: 'absolute',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundImage: `url(${require('../../resources/images/mainscreen/main.jpg')})`,
  backgroundSize: 'cover',
  '@media screen and (max-width: 768px)': {
    visibility: 'hidden'
  }
});

const Containter = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  height: '90vh',
  padding: '100px 150px',
  '@media screen and (max-width: 1380px)': {
    padding: '70px 100px'
  },
  '@media screen and (max-width: 768px)': {
    padding: '50px 80px',
    height: '100%',
    minHeight: '90vh'
  }
});

interface Props {}

export function MainScreen(props: Props) {
  function onScrollTop() {
    window.scroll(0, 0);
  }

  return (
    <>
      <PageHelmet title={trans(Lang.Main_Title)} description={trans(Lang.Main_Desc)} />
      <ImageContainer />
      <Containter>
        <AbyssContents />
        <FlexWrapper styles={{ width: '100%' }}>
          <FlexWrapper
            styles={{
              width: 'fit-content',
              small: { flexDirection: 'column' }
            }}
          >
            <>
              <Link to="/gacha" onClick={() => onScrollTop()}>
                <ImageContentCard
                  src={`${require('../../resources/images/mainscreen/gacha.png')}`}
                  title={trans(Lang.Gacha)}
                  desc={trans(Lang.Main_Wish_Desc)}
                  styles={{
                    cardStyles: {
                      width: '300px',
                      height: '370px',
                      padding: '20px 10px',
                      backgroundColor: 'rgba(20, 20, 20, .8)',
                      medium: { width: '210px', margin: '20px', height: '350px' },
                      small: { width: '260px' }
                    },
                    imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } },
                    descStyles: { medium: { fontSize: '16px' } }
                  }}
                />
              </Link>
              <Link to="/party" onClick={() => onScrollTop()}>
                <ImageContentCard
                  src={`${require('../../resources/images/mainscreen/party.png')}`}
                  title={trans(Lang.Party)}
                  desc={trans(Lang.Main_Party_Desc)}
                  styles={{
                    cardStyles: {
                      width: '300px',
                      height: '370px',
                      padding: '20px 10px',
                      backgroundColor: 'rgba(20, 20, 20, .8)',
                      medium: { width: '210px', margin: '20px', height: '350px' },
                      small: { width: '260px' }
                    },
                    imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } },
                    descStyles: { medium: { fontSize: '16px' } }
                  }}
                />
              </Link>
              <ImageContentCard
                src={`${require('../../resources/images/mainscreen/Paimon.jpg')}`}
                title="Coming Soon..."
                desc="Coming Soon..."
                styles={{
                  cardStyles: {
                    width: '300px',
                    height: '370px',
                    padding: '20px 10px',
                    backgroundColor: 'rgba(20, 20, 20, .8)',
                    medium: { width: '210px', margin: '20px', height: '350px' },
                    small: { width: '260px' }
                  },
                  imageStyles: { width: '200px', height: '200px', medium: { width: '150px', height: '150px' } },
                  descStyles: { medium: { fontSize: '16px' } }
                }}
              />
            </>
          </FlexWrapper>
        </FlexWrapper>
      </Containter>
    </>
  );
}
