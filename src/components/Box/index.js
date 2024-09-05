import React from "react";
import clsx from "clsx";

export default function Box({ children, className }) {
  return (
    <div
      className={clsx("flex flex-col items-center justify-center", className)}
    >
      {children}
    </div>
  );
}
