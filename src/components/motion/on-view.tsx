"use client";

import type { ComponentProps } from "react";

import { useSeen } from "./use-seen";

type OnViewProps = ComponentProps<"div"> & {
  /** How much of the element must be visible, from 0 to 1. */
  amount?: number;
};

/** `useSeen` as a plain wrapper, for server components. */
export function OnView({ amount = 0.35, children, ...props }: OnViewProps) {
  const { ref, pending } = useSeen<HTMLDivElement>(amount);

  return (
    <div ref={ref} data-pending={pending} {...props}>
      {children}
    </div>
  );
}
