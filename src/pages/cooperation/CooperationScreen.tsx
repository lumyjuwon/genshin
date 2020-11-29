import React from 'react';
import { PageHelmet } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

export function CooperationScreen() {
  return <PageHelmet title={trans(Lang.Cooperation)} description={trans(Lang.CooperationDesc)} />;
}
