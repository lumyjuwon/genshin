import React from 'react';

import { LocalSpecialityItem } from './LocalSpecialityItem';
import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper } from 'src/components';
import { Layout } from '../Layout';

export function LocalContainer() {
  const region = ['Mondstadt', 'Liyue'];

  return (
    <Layout title={trans(Lang.Local_Speciality_Items)}>
      <FlexWrapper styles={{ flexDirection: 'column', small: { width: '90%' } }}>
        {region.map((local) => (
          <LocalSpecialityItem key={local} local={local} />
        ))}
      </FlexWrapper>
    </Layout>
  );
}
