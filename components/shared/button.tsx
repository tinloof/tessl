import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";

const buttonVariants = cva(
  "flex items-center cursor-pointer outline-none border border-black justify-center rounded-full",
  {
    variants: {
      variant: {
        primary: "bg-black text-white",
        secondary: "bg-transparent text-black ",
      },
      fullWidth: {
        true: "w-full",
      },
      size: {
        small: "px-4 py-2.75 body-sm",
        medium: "px-6 py-3.75 body-lg ",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "small",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, fullWidth, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, fullWidth, size, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
