import React, { useState } from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';

interface ContainerStyle {
  width?: string;
  margin?: string;
  medium?: {
    width?: string;
  };
  small?: {
    width?: string;
  };
}

interface TextStyle {
  fontSize?: string;
  medium?: {
    fontSize?: string;
  };
  small?: {
    fontSize?: string;
  };
}

interface Style {
  containerStyle?: ContainerStyle;
  buttonStyle?: TextStyle;
  titleStyle?: TextStyle;
}

const Container = styled.div<ContainerStyle>((props) => {
  return {
    width: props.width || '900px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: props.margin || '50px auto 0',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || '700px'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || '100%'
    }
  };
});

const Header = styled.div<ContainerStyle>((props) => {
  return {
    width: props.width || '900px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || '700px'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || '100%'
    }
  };
});

const Line = styled.hr<ContainerStyle>((props) => {
  return {
    width: props.width || '900px',
    '@media screen and (max-width: 1380px)': {
      width: props.medium?.width || '700px'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || '100%'
    }
  };
});

const Button = styled.div<TextStyle>((props) => {
  return {
    fontSize: props.fontSize || '16px',
    fontWeight: 'normal',
    padding: '3px',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: '.2s',
    '&:hover': {
      backgroundColor: '#f1f2f3',
      color: '#111213'
    },
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || '14px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || '12px'
    }
  };
});

const Title = styled.div<TextStyle>((props) => {
  return {
    fontSize: props.fontSize || '20px',
    fontWeight: 'bold',
    '@media screen and (max-width: 1380px)': {
      fontSize: props.medium?.fontSize || '16px'
    },
    '@media screen and (max-width: 768px)': {
      fontSize: props.small?.fontSize || '14px'
    }
  };
});

interface Props {
  title: string;
  children: JSX.Element;
  styles?: Style;
}

enum ButtonText {
  open = 'Viewer_Open',
  close = 'Viewer_Close'
}

export function Layout(props: Props) {
  const [isViewerVisible, setIsViewerVisible] = useState(true);
  const [buttonText, setButtonText] = useState(ButtonText.close);

  function toggleViewer() {
    setIsViewerVisible(!isViewerVisible);
    if (buttonText === ButtonText.open) {
      setButtonText(ButtonText.close);
    } else {
      setButtonText(ButtonText.open);
    }
  }

  return (
    <Container {...props.styles?.containerStyle}>
      <Header {...props.styles?.containerStyle}>
        <Title {...props.styles?.titleStyle}>{props.title}</Title>
        <Button {...props.styles?.buttonStyle} onClick={() => toggleViewer()}>
          {trans(Lang[buttonText])}
        </Button>
      </Header>
      <Line {...props.styles?.containerStyle} />
      {isViewerVisible && props.children}
    </Container>
  );
}
