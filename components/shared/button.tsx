import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

const buttonVariants = cva(
  "flex button-text-xs items-center cursor-pointer outline-none justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "bg-transparent text-black border border-black",
      },
      fullWidth: {
        true: "w-full",
      },
      padding: {
        small: "px-4 py-2.75",
        medium: "px-6 py-3.75",
      },
    },
    defaultVariants: {
      variant: "primary",
      padding: "small",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, fullWidth, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, fullWidth, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
