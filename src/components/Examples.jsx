import { useState } from 'react';
import TabButton from './TabButton';
import Tabs from './Tab';
import Section from './Section';
import { EXAMPLES } from '../data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;
  let handleButtonClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };
  return (
    <>
      <Section title='Examples' id='examples'>
        <hr />
        <Tabs
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === 'components'}
                onClick={() => handleButtonClick('components')}
                children='Components'
              />
              <TabButton
                isSelected={selectedTopic === 'jsx'}
                onClick={() => handleButtonClick('jsx')}
                children='JSX'
              />
              <TabButton
                isSelected={selectedTopic === 'props'}
                onClick={() => handleButtonClick('props')}
                children='Props'
              />
              <TabButton
                isSelected={selectedTopic === 'state'}
                onClick={() => handleButtonClick('state')}
                children='State'
              />
            </>
          }
        />
        {!selectedTopic ? (
          <div className='tab'>{tabContent}</div>
        ) : (
          <div className='tab'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>
    </>
  );
}
