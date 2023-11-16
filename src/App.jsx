import { useState } from 'react';
import reactAtom from './assets/react-core-concepts.png';
import './index.css';
import { CORE_CONCEPTS, EXAMPLES } from './data';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src={reactAtom} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}

let CoreConcepts = ({image, title, description}) => {
  return (
    <li key={title}>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

let tabContent = <p>Please select a topic.</p>

let TabButton = ({children, onSelect, isSelected}) => {
  return <li key={children.title}>
    <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
}

function App() {
const [selectedTopic, setSelectedTopic] = useState();

let handleButtonClick = (selectedButton) => {
  setSelectedTopic(selectedButton);
  console.log(selectedTopic)
}

  return (
    <div>
      <Header />
      <main>
      <div style={{display: "flex"}}>
      {CORE_CONCEPTS.map((c) => 
        <section key={c.title} id="core-concepts">
          <ul>
            <CoreConcepts {...c}/>
            </ul>
        </section>)}
        </div>
        <section id="examples">
          <h2>Examples</h2>
          <hr/>
          <menu>
           <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleButtonClick('components')} children="Components"/>
           <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleButtonClick('jsx')} children="JSX"/>
           <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleButtonClick('props')}  children="Props"/>
           <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleButtonClick('state')} children="State"/>
          </menu>
          {!selectedTopic ? <div className="tab">{tabContent}</div> :     
         <div className="tab">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>      
         </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
