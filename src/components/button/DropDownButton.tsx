import React, { useImperativeHandle, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ContainerStyles {
  readonly width?: string;
  readonly height?: string;
  readonly margin?: string;
  readonly padding?: string;
  readonly fontSize?: string;
  readonly small?: {
    readonly width?: string;
    readonly height?: string;
    readonly fontSize?: string;
  };
}

interface ListStyles {
  readonly width?: string;
  readonly backgroundColor?: string;
  readonly top?: string;
  readonly right?: string;
  readonly small?: {
    readonly width?: string;
    readonly top?: string;
    readonly right?: string;
  };
}

const Icon = styled.div({
  fontSize: '12px',
  transition: '0.2s',
  transform: 'rotate(180deg)',
  marginRight: '8px'
});

const DropDown = styled.ul<ListStyles>((props: ListStyles) => {
  return {
    width: props.width || 'fit-content',
    backgroundColor: props.backgroundColor || 'transparent',
    top: props.top || '0',
    right: props.right || '0',
    zIndex: 5,
    position: 'absolute',
    borderRadius: '8px',
    opacity: '0',
    visibility: 'hidden',
    transition: 'all 0.1s',
    boxShadow: '6px 6px 3px rgba(0,0,0,0.6)',
    '&.show-list': {
      opacity: '1',
      visibility: 'visible'
    },
    '@media screen and (max-width: 768px)': {
      width: props.small?.width || props.width || 'fit-content',
      top: props.small?.top || props.top || '0',
      right: props.small?.right || props.right || '0'
    }
  };
});

const Content = styled.div({
  float: 'left',
  width: '100%',
  paddingLeft: '8px'
});

const Container = styled.div<ContainerStyles>`
  width: ${(props) => props.width || 'fit-content'};
  height: ${(props) => props.height || '30px'};
  font-size: ${(props) => props.fontSize || '16px'};
  margin: ${(props) => props.margin || '0 10px 0 0'};
  border: 1px solid #f1f2f3;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  @media screen and (max-width: 768px) {
    width: ${(props) => props.small?.width || props.width || 'fit-content'};
    height: ${(props) => props.small?.height || props.height || 'auto'};
    font-size: ${(props) => props.small?.fontSize || props.fontSize || '16px'};
  }
`;

const List = styled.li<{ default?: boolean }>((props: { default?: boolean }) => {
  return {
    padding: '5px 10px',
    backgroundColor: props.default ? '#ccc' : 'rgba(10, 10, 10, .8)',
    color: props.default ? '#212223' : '#f1f2f3',
    width: '100%',
    borderTop: '1px solid #212223',
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: '#ccc'
    }
  };
});

const Clickable = styled.div({
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-between',
  alignItems: 'center'
});

interface Props {
  items: { [name: string]: any };
  id: string;
  onClick: Function;
  content: any;
  defaultValue?: any;
  styles?: {
    containerStyles?: ContainerStyles;
    listStyles?: ListStyles;
  };
}

export const DropDownButton = React.forwardRef<HTMLDivElement, Props>((props, forwardedRef) => {
  const dropDownRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, () => dropDownRef.current as HTMLDivElement);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropDownRef.current?.lastElementChild?.classList.contains('show-list') && !dropDownRef.current.contains(event.target as Node)) {
        dropDownRef.current.lastElementChild.classList.remove('show-list');
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropDownRef]);

  const onContentClick = () => {
    if (dropDownRef.current?.lastElementChild?.classList.contains('show-list')) {
      dropDownRef.current?.lastElementChild?.classList.remove('show-list');
    } else {
      dropDownRef.current?.lastElementChild?.classList.add('show-list');
    }
  };

  const onListClick = (item: string) => {
    props.onClick(item);
    dropDownRef.current?.lastElementChild?.classList.remove('show-list');
  };

  return (
    <Container {...props.styles?.containerStyles} ref={dropDownRef}>
      <Clickable onClick={() => onContentClick()}>
        <Content>{props.content}</Content>
        <Icon>▲</Icon>
      </Clickable>
      <DropDown {...props.styles?.listStyles} id={props.id}>
        {Object.keys(props.items).map((item: any) => {
          if (props.defaultValue === props.items[item]) {
            return (
              <List default key={item} onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => onListClick(item)}>
                {props.items[item]}
              </List>
            );
          } else {
            return (
              <List key={item} onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => onListClick(item)}>
                {props.items[item]}
              </List>
            );
          }
        })}
      </DropDown>
    </Container>
  );
});
