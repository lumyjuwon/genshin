import React from 'react';
import { GlobalStyles } from './components/globalStyles';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Layout>
        <a href="#">Hello Genshin</a>
        <div className="test">
          <div className="inner">
            Inner Test
          </div>
          Hello Genshin
        </div>
      </Layout>
    </div>
  );
}

export default App;
