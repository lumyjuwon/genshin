import React from 'react';
import styled from 'styled-components';

import { RegexColorText } from './RegexColorText';
import { trans, Lang, KeyLang } from 'src/resources/languages';

const P = styled.p({
  lineHeight: '140%'
});

interface Props {
  children: string;
}

export function CharacterStatRegexText(props: Props) {
  let statPercent: string = '';
  // @ts-ignore
  if (props.children.match(/\d.+%/g)?.length > 0) statPercent = props.children.match(/\d.+%/g)[0];

  console.log(props.children.replace(/\s/g, '_').replace(/\d.+%/g, ''));
  return (
    <P>
      <RegexColorText regex={/\d.+%/g} color={'#cc0000'} isBold>
        {trans(Lang[props.children.replace(/\s/g, '_').replace(/_\d.+%/g, '') as KeyLang]).concat(` ${statPercent}`)}
      </RegexColorText>
    </P>
  );
}
