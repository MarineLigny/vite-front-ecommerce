import MuiButton from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import type { ReactElement } from 'react';

type Props = {
  variant?: ButtonProps['variant'];
  type?: ButtonProps['type'];
  disabled?: ButtonProps['disabled'];
  onClick: ButtonProps['onClick'];
  children: ButtonProps['children'];
};

const Button = ({ 
  children, 
  variant = 'text', 
  type = 'button', 
  disabled = false, 
  onClick 
}: Props) : ReactElement => {
  return (
    <MuiButton 
      type={type} 
      disabled={disabled} 
      onClick={onClick} 
      variant={variant}
      >
        {children}
    </MuiButton>
  );
};

export default Button;