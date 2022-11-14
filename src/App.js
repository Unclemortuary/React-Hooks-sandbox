import React from 'react';

import UseStateExample from './useState';
import UseEffectExapmle from './useEffect';
import UseContextExample from './useContext/useContextAdvanced';
import UseRefExample from './useRef';
import UseMemoExample from './useMemo';

const App = () => (
  <div>
    {/* <h1>useState</h1>
    <UseStateExample/>
    <h1>useEffect</h1>
    <UseEffectExapmle/>
    <h1>useContext</h1>
    <UseContextExample/>
    <h1>useRef</h1>
    <UseRefExample/> */}
    <h1>useMemo</h1>
    <UseMemoExample />
  </div>
);

export default App;
