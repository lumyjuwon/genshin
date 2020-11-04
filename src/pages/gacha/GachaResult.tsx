import React from 'react';
import styled from 'styled-components';

import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper, SquareImage } from 'src/components';

interface Props {
  times: number;
  result: Array<string>;
  four: number;
  five: number;
  pity?: number;
  gem: number;
}

const ResultBar = styled.div({
  display: 'flex',
  width: 'fit-content',
  margin: '0 auto',
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

export function GachaResult(props: Props) {
  return (
    <ResultBar>
      <FlexWrapper>
        <>
          <FlexWrapper
            styles={{
              small: { flexDirection: 'column' }
            }}
          >
            <>
              <Result>{`${trans(Lang.Total_Count)}: ${props.times}`}</Result>
              <Result>{`5★: ${props.five}`}</Result>
              <Result>{`4★: ${props.four}`}</Result>
            </>
          </FlexWrapper>
          <FlexWrapper
            styles={{
              small: { flexDirection: 'column' }
            }}
          >
            <>
              <Result>{`${trans(Lang.Next_Pity)}: ${props.pity}`}</Result>
              <Result>
                <FlexWrapper>
                  <>
                    <SquareImage
                      styles={{ width: '20px', height: '20px', small: { width: '18px', height: '18px' } }}
                      src={require('../../resources/images/items/gem/Primogem.webp')}
                    />
                    <span>{`: ${props.gem}`}</span>
                  </>
                </FlexWrapper>
              </Result>
            </>
          </FlexWrapper>
        </>
      </FlexWrapper>
    </ResultBar>
  );
}
