import React from 'react';

import { FlexWrapper, DropDownButton } from 'src/components';
import { changeLang, getCurrentLanguage, LangCode } from 'src/resources/languages';

const languages = {
  [LangCode.en]: 'English',
  [LangCode.ko]: '한국어'
};

interface Props {}

export function LangaugeSelector(props: Props) {
  const languageRef = React.createRef<HTMLDivElement>();
  const langCode = getCurrentLanguage();

  return (
    <FlexWrapper styles={{ small: { width: '100%', justifyContent: 'flex-end', margin: '10px 0' } }}>
      <DropDownButton
        ref={languageRef}
        id={'lang'}
        items={languages}
        defaultValue={languages[langCode]}
        onClick={(langCode: LangCode) => {
          changeLang(langCode);
        }}
        content={<i className='fas fa-globe'></i>}
        styles={{
          containerStyles: { width: '70px', height: '35px', fontSize: '20px' },
          listStyles: { width: '100px', top: '34px', right: '-1px' }
        }}
      />
    </FlexWrapper>
  );
}
