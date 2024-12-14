import React from "react";
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
	const inverted = 'bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-blue-100';
	const standard = 'bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400';
	const colorScheme = className?.includes("inverted") ? inverted : standard;
console.log({ className })
  return (
    <button
      {...rest}
      className={clsx(colorScheme,
        'flex h-10 items-center rounded-lg  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
       className,
      )}
    >
      {children}
    </button>
  );
}

