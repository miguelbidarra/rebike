import * as React from "react";


const Card = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-xl border bg-white text-gray-900 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";



const CardDescription = React.forwardRef<HTMLParagraphElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-500 ${className}`} {...props}>
      {children}
    </p>
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";


export { Card,CardDescription, CardContent };
