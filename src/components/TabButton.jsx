export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li key={children.title}>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
