import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-800 shadow-sm hover:shadow-md active:scale-[0.98]",
        lime:
          "bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm hover:shadow-md hover:shadow-emerald-600/20 active:scale-[0.98]",
        emerald:
          "bg-emerald-600 text-white font-bold hover:bg-emerald-700 shadow-sm hover:shadow-md active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-slate-300 bg-white hover:bg-slate-50 hover:border-slate-400 text-slate-900 font-semibold shadow-xs",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 text-slate-700",
        link:
          "text-emerald-700 underline-offset-4 hover:underline font-semibold",
        cobalt:
          "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md active:scale-[0.98]",
      },
      size: {
        default: "h-11 px-5 py-2.5 rounded-lg",
        sm: "h-9 rounded-md px-3.5 text-xs",
        lg: "h-12 rounded-lg px-7 text-base",
        icon: "h-10 w-10 rounded-lg",
        pill: "h-11 px-6 rounded-full text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
