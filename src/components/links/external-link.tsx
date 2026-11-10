import type { ReactNode } from "react";

import { externalLinks, type ExternalTarget } from "@/content/site";

type ExternalLinkProps = {
  target: ExternalTarget;
  className?: string;
  /**
   * For a link built from more than its name, where a label could not match what
   * is shown. The destination is added as hidden text instead, so speech control
   * still works. `name` says the name too, when the visible text is hidden from
   * screen readers. Never use this inside a sentence: hidden text would be copied
   * and indexed as part of it, which is why plain links use `aria-label`.
   */
  hiddenText?: "destination" | "name";
  children: ReactNode;
};

/** Every link that leaves the site goes through here, so all of them behave alike. */
export function ExternalLink({ target, className, hiddenText, children }: ExternalLinkProps) {
  const destination = `${target.service}, buka di tab baru`;

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={hiddenText ? undefined : `${target.name}, ${destination}`}
      className={className}
    >
      {children}
      {hiddenText ? (
        <span className="sr-only">
          {hiddenText === "name" ? target.name : ""}, {destination}
        </span>
      ) : null}
    </a>
  );
}

/** A small diagonal arrow, the conventional sign for a link that leaves the page. */
export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 10 10"
      className={`external-arrow ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
    >
      <path d="M1.5 8.5 8.5 1.5M2.75 1.5H8.5v5.75" />
    </svg>
  );
}

const NAMED_TARGETS: readonly ExternalTarget[] = [externalLinks.gladiators, externalLinks.gladius];
const NAMES = new RegExp(`(${NAMED_TARGETS.map(({ name }) => name).join("|")})`, "gi");

/** Splits copy around the two names. Odd entries are the names themselves. */
export function splitNames(text: string) {
  return text.split(NAMES);
}

export function targetFor(name: string) {
  return NAMED_TARGETS.find((target) => target.name.toLowerCase() === name.toLowerCase());
}

/**
 * Copy with its full names made clickable: "The Gladius 26" and "The Gladiators 23",
 * in any capitalisation. The sentence itself stays in `src/content` untouched.
 */
export function LinkedCopy({ text }: { text: string }) {
  return splitNames(text).map((part, index) => {
    const target = index % 2 === 1 ? targetFor(part) : undefined;
    return target ? (
      <ExternalLink key={index} target={target} className="name-link">
        {part}
      </ExternalLink>
    ) : (
      part
    );
  });
}
