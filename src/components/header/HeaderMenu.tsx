import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { TextBlockButton } from 'src/components';

interface HeaderNavProps {
  isSelected: boolean;
}

const HeaderNav = styled.div<HeaderNavProps>((props: HeaderNavProps) => {
  return {
    transition: '.2s ease-out',
    '&:hover': {
      textShadow: '0 0 8px #f1f2f3, 0 0 15px #f1f2f3, 0 0 20px #f1f2f3',
      boxShadow: 'inset 0 -2px 0 #f1f2f3'
    },
    boxShadow: props.isSelected ? 'inset 0 -2px 0 #f1f2f3' : ''
  };
});

interface Props {
  isSelected: boolean;
  link: string;
  title: string;
  onClick?: Function;
}

export function HeaderMenu(props: Props) {
  return (
    <Link to={props.link}>
      <HeaderNav isSelected={props.isSelected} onClick={() => props.onClick?.()}>
        <TextBlockButton styles={{ buttonStyles: { medium: { fontSize: '16px' }, small: { width: '95vw' } } }}>
          {props.title}
        </TextBlockButton>
      </HeaderNav>
    </Link>
  );
}
