
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'py-3 px-8 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A1A1A]';

  const variantClasses = {
    primary: 'bg-[#FF4D00] text-[#1A1A1A] hover:bg-orange-500 focus:ring-[#FF4D00]',
    secondary: 'bg-[#2D2D2D] text-[#F0F0F0] hover:bg-[#444] focus:ring-[#2D2D2D]',
    outline: 'bg-transparent border-2 border-[#FF4D00] text-[#FF4D00] hover:bg-[#FF4D00] hover:text-[#1A1A1A]',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
