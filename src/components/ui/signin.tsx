import React from "react";

export function SignInButton({ children }: any) {
  return <button className="px-3 py-2 bg-black text-white rounded">{children ?? "Sign In"}</button>;
}
