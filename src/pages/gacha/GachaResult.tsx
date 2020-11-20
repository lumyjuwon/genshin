import React from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper, SquareImage } from 'src/components';

interface Props {
  times: number;
  result: Array<string>;
  pity?: number;
  gem: number;
}

const ResultBar = styled.div({
  display: 'flex',
  width: 'fit-content',
  margin: '30px auto 20px',
  borderRadius: '16px',
  border: '2px dashed #f1f2f3',
  '@media screen and (max-width: 768px)': {
    maxWidth: '100%',
    overflow: 'hidden'
  }
});

const Result = styled.div({
  margin: '10px',
  padding: '5px 10px',
  '@media screen and (max-width: 768px)': {
    margin: '5px',
    padding: '3px',
    fontSize: '14px'
  }
});

const Inner = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexFlow: 'wrap'
});

export function GachaResult(props: Props) {
  return (
    <ResultBar>
      <Inner>
        <Result>{`${trans(Lang.Total_Count)}: ${props.times}`}</Result>
        <Result>{`${trans(Lang.Next_Pity)}: ${props.pity}`}</Result>
        <Result>
          <FlexWrapper>
            <SquareImage
              styles={{ width: '20px', height: '20px', small: { width: '18px', height: '18px' } }}
              src={require('../../resources/images/items/gem/Primogem.webp')}
            />
            <span>{`: ${props.gem}`}</span>
          </FlexWrapper>
        </Result>
      </Inner>
    </ResultBar>
  );
}
