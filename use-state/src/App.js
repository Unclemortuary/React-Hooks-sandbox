import React, { useState } from 'react';

const getCountState = () => {
  console.log('entered get count state');
  return 4;
};

const getThemeState = () => {
  console.log('entered get theme state');
  return 'blue';
}

function App() {
  // if you pass function to useState like this it will always recall it with each component's render
  const [ count, setCount ] = useState(getCountState());

  // if you pass function to use state like a FUNCTION argument, it will get called only once at initial render
  const [ theme, setTheme ] = useState(() => getThemeState());

  const [ objectState, setObjectState ] = useState({ a: 'a', b: 'b' });

  function decrementByTwo() {
    // WRONG since count will not change between function calls.
    setCount(count - 1);
    setCount(count - 1);
  }

  function incrementByTwoCount() {
    // CORRECT since now we operate with value passed from HTML rather then immutable state
    setCount(previousValue => previousValue + 1);
    setCount(previousValue => previousValue + 1);
  }

  // same as with Redux, setObjectState must decouple previous state object to maintain other object values
  function changeObjectState() {
    // wrong
    setObjectState(previousState => ({ b: 'c' }));
    // right
    setObjectState(previousState => ({ ...previousState, b: 'c' }));
  }

  return (
    <>
      <button onClick={decrementByTwo}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementByTwoCount}>+</button>
      <br></br>
      <span>{objectState.a} - {objectState.b}</span>
      <button onClick={changeObjectState}>change object state</button>
    </>
  );
}

export default App;
