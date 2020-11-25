import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentWrapper } from 'src/components';
import { PageHelmet } from 'src/components';
import { CharacterList } from './CharacterList';
import { characterInfo } from 'src/resources/data';
import { CharacterDetailConatiner } from './CharacterDetailConatiner';

export function CharacterScreen() {
  const characters = Object.keys(characterInfo);

  return (
    <ContentWrapper>
      <PageHelmet title={'Character'} description={'Desc'} />
      <Switch>
        <Route exact path="/character" component={CharacterList} />
        {characters.map((name) => {
          const path = name.replace(/\s\(|\)|/g, '');
          return <Route key={name} path={`/character/${path}`} render={() => <CharacterDetailConatiner character={name} />} />;
        })}
      </Switch>
    </ContentWrapper>
  );
}
