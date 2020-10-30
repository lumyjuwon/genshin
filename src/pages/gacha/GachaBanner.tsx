import React from 'react';

import { FlexWrapper, HoverDropDown } from 'src/components';
import { trans, Lang } from 'src/resources/languages';
import { GachaDetails } from './GachaDetails';

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
}

export function GachaBanner(props: Props) {
  const transWishList = props.pickUpList.map((wish) => trans(Lang[wish as Lang]));

  return (
    <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 20px' }}>
      <>
        <HoverDropDown
          hoverList={transWishList}
          styles={{
            containerStyles: {
              width: '300px',
              height: '40px',
              fontSize: '20px',
              small: { width: '220px', fontSize: '16px', height: '35px' }
            },
            listStyles: { width: '300px', top: '39px', left: '-1px', small: { width: '220px', top: '34px' } }
          }}
          onClick={props.onClick}
          content={trans(Lang[props.content as Lang])}
        />
        <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  );
}
