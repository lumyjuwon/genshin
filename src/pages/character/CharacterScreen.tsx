import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ContentWrapper, ContentBackgroundBox } from 'src/components';
import { PageHelmet } from 'src/components';
import { CharacterList } from './CharacterList';
import { characterInfo } from 'src/resources/data';
import { CharacterDetailConatiner } from './CharacterDetailConatiner';
import { Lang, trans } from 'src/resources/languages';

export function CharacterScreen() {
  const characters = Object.keys(characterInfo);

  return (
    <ContentWrapper>
      <ContentBackgroundBox backgroundColor='#2a2b2c'>
        <PageHelmet title={trans(Lang.Character)} description={'Desc'} />
        <Switch>
          <Route exact path='/character' component={CharacterList} />
          {characters.map((name) => {
            const path = name.replace(/\s\(|\)|/g, '');
            return <Route key={name} path={`/character/${path}`} render={() => <CharacterDetailConatiner character={name} />} />;
          })}
        </Switch>
      </ContentBackgroundBox>
    </ContentWrapper>
  );
}
