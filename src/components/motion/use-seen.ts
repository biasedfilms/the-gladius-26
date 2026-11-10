"use client";

import { useInView } from "motion/react";
import { useRef } from "react";

/**
 * One trigger for a whole group: `data-pending` stays on the element until it is
 * first seen, and CSS runs everything inside it. A headline of twelve words costs
 * one observer this way, not twelve animated components, which matters most while
 * a slow phone is hydrating the page. The states are described in globals.css.
 */
export function useSeen<T extends Element>(amount: number) {
  const ref = useRef<T>(null);
  const seen = useInView(ref, { once: true, amount });
  return { ref, pending: seen ? undefined : "" };
}
