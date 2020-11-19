import React from 'react';
import { Helmet } from 'react-helmet';
import { Lang, trans } from 'src/resources/languages';

interface Props {
  title: string;
  description: string;
}

export function PageHelmet(props: Props) {
  function generateTitle(): string {
    const mainTitle = trans(Lang.Main_Title);
    if (props.title !== mainTitle) {
      return `${props.title} - ${mainTitle}`;
    }
    return props.title;
  }

  const title = generateTitle();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={props.description} />
    </Helmet>
  );
}
