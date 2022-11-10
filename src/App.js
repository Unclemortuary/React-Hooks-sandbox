import React from 'react';

import UseStateExample from './useState';
import UseEffectExapmle from './useEffect';
import UseContextExample from './useContext/useContextAdvanced';

const App = () => (
  <div>
    <h1>useState</h1>
    <UseStateExample/>
    <h1>useEffect</h1>
    <UseEffectExapmle/>
    <h1>useContext</h1>
    <UseContextExample/>
  </div>
);

export default App;
