import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  to, 
  onClick, 
  children, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  const baseStyles = "font-sans bg-terracotta text-white w-full md:w-64 h-12 rounded-full text-base font-semibold hover:bg-terracotta-light transition-colors";

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
}