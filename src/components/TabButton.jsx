import React from "react";

export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li key={children.title}>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  );
}
