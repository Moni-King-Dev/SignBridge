import React from "react";

export function Badge({ children, className = "" }: any) {
  return <span className={`px-2 py-1 rounded text-xs ${className}`}>{children}</span>;
}
