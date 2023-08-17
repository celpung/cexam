import React, { useState } from 'react';

interface PrimaryButtonsProps {
  title: string;
  action: () => void;
}

export const PrimaryButtons = ({ title, action }: PrimaryButtonsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const primaryButtonStyle = {
    backgroundColor: isHovered ? '#FF884D' : '#F60',
    color: 'white',
    fontSize: "12px",
    fontWeight: 'normal',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
    transition: 'background-color 0.3s ease', // Add a smooth transition
  };

  return (
    <button
    onClick={action}
      style={primaryButtonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
};
