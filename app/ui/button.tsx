import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
   return (
      <button
         {...rest}
         className={clsx(
            "px-4 transition-colors h-11 items-center rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
            className
         )}
      >
         {children}
      </button>
   );
}
