import CoreConceptItem from './CoreConceptItem';
import { CORE_CONCEPTS } from '../data';

export default function CoreConcepts() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        {CORE_CONCEPTS.map((c) => (
          <section key={c.title} id='core-concepts'>
            <ul>
              <CoreConceptItem {...c} />
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
