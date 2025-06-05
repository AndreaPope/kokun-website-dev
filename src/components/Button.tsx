import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  variant?: 'default' | 'small' | 'xsmall';
}

export default function Button({ 
  to, 
  onClick, 
  children, 
  className = '',
  type = 'button',
  variant = 'default'
}: ButtonProps) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  const baseStyles = "font-sans text-center transition-colors";
  const variantStyles = {
    default: "w-52 md:w-56 h-12 rounded-full text-base font-semibold hover:bg-hover bg-primary text-white",
    small: "px-4 py-2 rounded-full text-xs font-bold hover:bg-hover bg-primary text-white hidden md:inline-flex",
    xsmall: "px-3 py-1 rounded-full text-[10px] font-bold hover:bg-hover bg-primary text-white md:hidden",
    white: "px-4 py-2 rounded-full text-xs  font-bold hover:bg-hover hover:text-white bg-white text-black hidden md:inline-flex",
    xsmallwhite: "px-3 py-1 rounded-full text-[10px] font-bold hover:bg-hover hover:text-white bg-white text-black md:hidden",
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  ); 
}