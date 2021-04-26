import React from 'react';
import { PageHelmet } from 'src/components';
import { Lang, trans } from 'src/resources/languages';

interface Props {}

export function RedeemScreen(props: Props) {
  return <PageHelmet title={trans(Lang.Redeem)} description={trans(Lang.RedeemDesc)} />;
}
