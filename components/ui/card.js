// components/ui/card.js

import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-2xl bg-white/10 shadow-lg backdrop-blur-sm p-6 border border-white/20 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`text-white ${className}`} {...props}>
      {children}
    </div>
  );
}
