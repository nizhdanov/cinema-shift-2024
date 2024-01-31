import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const typographyVariants = cva(
  {
    variants: {
      variant: {
        h2: 'text-2xl font-bold leading-loose text-gray-900',
        h3: 'text-xl font-semibold leading-normal  text-gray-900'
      },
      size: {
        default: 'h-10 px-4 py-2',
        // sm: 'h-9 rounded-md px-3',
        lg: 'h-14 rounded-2xl px-8 py-4',
        full: 'h-14 rounded-2xl px-8 py-4 w-full',
        icon: 'h-8 w-8'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };