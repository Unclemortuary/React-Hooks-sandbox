import React, { useState } from 'react';

import UseStateExample from './useState';
import UseEffectExample from './useEffect';
import UseContextExample from './useContext/useContextAdvanced';
import UseRefExample from './useRef';
import UseMemoExample from './useMemo';
import UseCallbackExample from './useCallback';
import UseReducerExample from './useReducer';
import UseTransitionExample from './useTransition';
import UseDeferredValueExample from './useDeferredValue';
import UseLayoutEffectExample from './useLayoutEffect';

const topicsMap = {
  useState: UseStateExample,
  useEffect: UseEffectExample,
  useContext: UseContextExample,
  useRef: UseRefExample,
  useMemo: UseMemoExample,
  useCallback: UseCallbackExample,
  useReducer: UseReducerExample,
  useTransition: UseTransitionExample,
  useDeferredValue: UseDeferredValueExample,
  useLayoutEffect: UseLayoutEffectExample
};

const App = () => {
  const [ current, setCurrent ] = useState(null);

  const onTopicClick = (topicName) => setCurrent(topicName);

  const renderTopic = () => {
    const TopicComponent = topicsMap[current];
    return <TopicComponent/>
  };
  
  return (
    <div>
      { !current && <Navigation onTopicClick={onTopicClick}></Navigation>}
      { current && 
      <div className='contentContainer'>
        <button className='backButton' onClick={() => setCurrent(null)}>Back</button>
        <section>
          { renderTopic() }
        </section>
      </div> }
    </div>
  );
};

const Navigation = ({ onTopicClick }) => {
  const names = Object.keys(topicsMap);

  const topicClickHandler = (e) => onTopicClick(e.target.innerText);

  return (
    <nav>
      <ul className='navigation'>
        { names.map((name => <li key={name}><button onClick={topicClickHandler}>{name}</button></li>)) }
      </ul>
    </nav>
  )
}

export default App;
