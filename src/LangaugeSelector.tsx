import React from 'react';

import { HoverDropDown } from 'src/components';
import { changeLang, LangCode } from 'src/resources/languages';

const languages = {
  [LangCode.en]: 'English',
  [LangCode.ko]: '한국어'
};

interface Props {
  defaultValue: LangCode;
  onCallBack: Function;
}

export function LangaugeSelector(props: Props) {
  return (
    <HoverDropDown
      items={languages}
      onClick={(langCode: LangCode) => {
        changeLang(langCode);
        props.onCallBack(langCode);
        console.log(langCode);
      }}
      content={<i className='fas fa-globe'></i>}
      defaultValue={props.defaultValue}
      styles={{
        containerStyles: { width: '70px', height: '35px', fontSize: '20px' },
        listStyles: { width: '100px', top: '34px', left: '-1px' }
      }}
    />
  );
}
