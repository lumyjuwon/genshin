import React from 'react';
import { useSelector } from 'react-redux';

import { FlexWrapper, DropDownButton } from 'src/components';
import { commonDispatch } from 'src/redux/common/dispatch';
import { RootState } from 'src/redux/rootReducer';

const regions = {
  ASIA: 'ASIA',
  US: 'US',
  EU: 'EU'
};

interface Props {}

export function RegionSelector(props: Props) {
  const regionRef = React.createRef<HTMLDivElement>();
  const region: string = useSelector<RootState, any>((state) => state.common.region);

  return (
    <FlexWrapper styles={{ small: { width: '100%', justifyContent: 'flex-end', margin: '10px 0' } }}>
      <DropDownButton
        ref={regionRef}
        id={'region'}
        items={regions}
        onClick={(region: string) => {
          commonDispatch.SetRegion(region);
        }}
        defaultValue={region}
        content={region}
        styles={{
          containerStyles: { width: '70px', height: '35px', fontSize: '20px' },
          listStyles: { width: '100px', top: '34px', right: '-1px' }
        }}
      />
    </FlexWrapper>
  );
}
