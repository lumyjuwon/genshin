import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  margin: '20px auto 0',
  border: '1px solid #212223',
  overflowX: 'auto'
});

const TableHeader = styled.div({
  backgroundColor: '#252423'
});

const TableBody = styled.div({
  display: 'flex',
  flexDirection: 'column'
});

const TableCell = styled.div<{ index: number }>((props) => {
  return {
    backgroundColor: props.index % 2 ? '#383838' : '#313131'
  };
});

interface Props {
  header: JSX.Element;
  body: JSX.Element[];
}

export function TableWrapper(props: Props) {
  return (
    <Container>
      <TableHeader>{props.header}</TableHeader>
      <TableBody>
        {props.body.map((element, index) => {
          return (
            <TableCell key={index.toString()} index={index}>
              {element}
            </TableCell>
          );
        })}
      </TableBody>
    </Container>
  );
}
