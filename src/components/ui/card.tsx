import * as React from "react";

interface Bicycle {
  id: number;
  name: string;
  image: string;
  gears: number;
  wheelSize: number;
  frameSize: number;
}

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

const CardHeader = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={`font-semibold leading-none tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = "CardTitle";

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

const CardFooter = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={`flex items-center p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
