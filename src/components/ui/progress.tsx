import React from "react";

export function Progress({ value = 0, className = "" }: any) {
  return (
    <div className={`w-full bg-gray-200 rounded ${className}`}>
      <div style={{ width: `${value}%` }} className="h-2 bg-black rounded" />
    </div>
  );
}
