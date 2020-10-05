import React from 'react';
import Layout from './components/layout';

function App() {
  return (
    <div className="App">
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
