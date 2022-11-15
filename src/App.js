import React, { useState } from 'react';

import UseStateExample from './useState';
import UseEffectExapmle from './useEffect';
import UseContextExample from './useContext/useContextAdvanced';
import UseRefExample from './useRef';
import UseMemoExample from './useMemo';
import UseCallbackExample from './useCallback';

const topicsMap = {
  useState: UseStateExample,
  useEffect: UseEffectExapmle,
  useContext: UseContextExample,
  useRef: UseRefExample,
  useMemo: UseMemoExample,
  useCallback: UseCallbackExample
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
