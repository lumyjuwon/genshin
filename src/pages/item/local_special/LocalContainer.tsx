import React from 'react';

import { LocalSpecialityItem } from './LocalSpecialityItem';
import { trans, Lang } from 'src/resources/languages';
import { GridWrapper } from 'src/components';
import { Layout } from '../Layout';

export function LocalContainer() {
  const region = ['Mondstadt', 'Liyue'];

  return (
    <Layout title={trans(Lang.Local_Speciality_Items)}>
      <GridWrapper styles={{ width: '100%', medium: { width: '100%' }, small: { width: '100%' } }}>
        {region.map((local) => (
          <LocalSpecialityItem local={local} />
        ))}
      </GridWrapper>
    </Layout>
  );
}
