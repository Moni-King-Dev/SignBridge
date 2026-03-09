import React from "react";

export function Tabs({ children }: any) {
  return <div>{children}</div>;
}
export function TabsList({ children }: any) { return <div>{children}</div>; }
export function TabsTrigger({ children, ...props }: any) { return <button {...props}>{children}</button>; }
export function TabsContent({ children }: any) { return <div>{children}</div>; }
