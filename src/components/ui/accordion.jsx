"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={`border-b ${className || ""}`}
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`flex flex-1 items-center justify-between py-4 text-left font-medium transition-all hover:underline ${className || ""}`}
        {...props}
      >
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={`overflow-hidden text-sm transition-all ${className || ""}`}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = "AccordionContent";
