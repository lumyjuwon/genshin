import React, { useRef } from 'react';

import { DropDownButton, FlexWrapper } from 'src/components';
import { trans, Lang, KeyLang } from 'src/resources/languages';
import { GachaDetails } from './GachaDetails';

interface Props {
  content: string;
  onClick: Function;
  pickUpList: Array<string>;
}

export function GachaBanner(props: Props) {
  const wishListRef = useRef<HTMLUListElement>(null);

  const transWishList = props.pickUpList.map((wish) => trans(Lang[wish as KeyLang]));

  return (
    <FlexWrapper styles={{ justifyContent: 'space-between', margin: '0 0 20px' }}>
      <>
        <DropDownButton
          id="wish"
          ref={wishListRef}
          items={transWishList}
          styles={{
            containerStyles: {
              width: '300px',
              height: '40px',
              fontSize: '20px',
              small: { width: '220px', fontSize: '16px', height: '35px' }
            },
            listStyles: { width: '300px', top: '39px', right: '-1px', small: { width: '220px', top: '34px' } }
          }}
          onClick={props.onClick}
          defaultValue={trans(Lang[props.content as KeyLang])}
          content={trans(Lang[props.content as KeyLang])}
        />
        <GachaDetails content={props.content} />
      </>
    </FlexWrapper>
  );
}
