import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../data';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();
  let tabContent = <p>Please select a topic.</p>;
  let handleButtonClick = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };
  return (
    <>
      <section id='examples'>
        <h2>Examples</h2>
        <hr />
        <menu>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleButtonClick('components')}
            children='Components'
          />
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleButtonClick('jsx')}
            children='JSX'
          />
          <TabButton
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleButtonClick('props')}
            children='Props'
          />
          <TabButton
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleButtonClick('state')}
            children='State'
          />
        </menu>
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
      </section>
    </>
  );
}
