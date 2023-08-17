import React, { useState } from "react";

interface PrimaryButtonsProps {
  title: string;
  action: () => void;
}

export const PrimaryButtons = ({ title, action }: PrimaryButtonsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const primaryButtonStyle = {
    backgroundColor: isHovered ? "#FF884D" : "#F60",
    color: "white",
    fontSize: "12px",
    fontWeight: "normal",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    transition: "background-color 0.3s ease", // Add a smooth transition
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

export const OutLinedPrimaryButton = ({ title, action }: PrimaryButtonsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const outlinedButtonStyle = {
    backgroundColor: "transparent",
    border: isHovered ? "2px solid #FF884D" : "1px solid #F60",
    color: isHovered ? "#FF884D" : "#F60",
    fontSize: "12px",
    fontWeight: "normal",
    padding: "0.5rem 1rem",
    borderRadius: "10px",
    transition: "border-color 0.3s ease, color 0.3s ease",
  };

  return (
    <button
      onClick={action}
      style={outlinedButtonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
    </button>
  );
};
