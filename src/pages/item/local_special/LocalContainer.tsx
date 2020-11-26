import React from 'react';

import { LocalSpecialityItem } from './LocalSpecialityItem';
import { trans, Lang } from 'src/resources/languages';
import { FlexWrapper, GridWrapper } from 'src/components';
import { Layout } from '../Layout';

export function LocalContainer() {
  const region = ['Mondstadt', 'Liyue'];

  return (
    <Layout title={trans(Lang.Local_Speciality_Items)}>
      <FlexWrapper styles={{ flexDirection: 'column' }}>
        {region.map((local) => (
          <LocalSpecialityItem key={local} local={local} />
        ))}
      </FlexWrapper>
    </Layout>
  );
}
