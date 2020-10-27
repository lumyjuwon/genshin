import React from 'react';

import { ElementCircleList } from './ElementCircleList';
import { ElementBuffText } from './ElementBuffText';

interface Props {
  activeElements: Map<string, number>;
}

export function ElementResult(props: Props) {
  return (
    <>
      <ElementBuffText activeElements={props.activeElements} />
      <ElementCircleList activeElements={props.activeElements} />
    </>
  );
}
