import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Rivus Academia Logo" 
      className={className || "h-10 w-auto"}
    />
  );
};

export default Logo;