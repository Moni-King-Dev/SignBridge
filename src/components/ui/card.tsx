import React from "react";

export function Card({ children, className = "" }: any) {
  return <div className={`border rounded p-4 ${className}`}>{children}</div>;
}
