import React from 'react';
import './Button.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  as?: React.ElementType;
  to?: string;
  href?: string;
}

import { Link } from 'react-router-dom';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  as: Component = 'button',
  className = '',
  ...props
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`.trim();
  
  if (props.href) {
    return <a className={classes} {...(props as any)}>{children}</a>;
  }
  
  if (props.to) {
    return <Link className={classes} to={props.to} {...(props as any)}>{children}</Link>;
  }

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
