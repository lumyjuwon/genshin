import React from 'react';
import { useSelector } from 'react-redux';

import { FlexWrapper, DropDownButton } from 'src/components';
import { commonDispatch } from 'src/redux/common/dispatch';
import { Continent } from 'src/redux/common/types';
import { RootState } from 'src/redux/rootReducer';

interface Props {}

export function ServerSelector(props: Props) {
  const serverSelectorRef = React.createRef<HTMLDivElement>();
  const server: string = useSelector<RootState, any>((state) => state.common.server);

  return (
    <FlexWrapper styles={{ small: { width: '100%', justifyContent: 'flex-end', margin: '10px 0' } }}>
      <DropDownButton
        ref={serverSelectorRef}
        id={'server'}
        items={Continent}
        onClick={(server: Continent) => {
          commonDispatch.SetServer(server);
        }}
        defaultValue={server}
        content={server}
        styles={{
          containerStyles: { width: '70px', height: '35px', fontSize: '20px' },
          listStyles: { width: '100px', top: '34px', right: '-1px' }
        }}
      />
    </FlexWrapper>
  );
}
