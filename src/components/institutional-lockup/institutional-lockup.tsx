import Image from "next/image";
import type { ReactNode } from "react";

import { ExternalArrow, ExternalLink } from "@/components/links/external-link";
import { brandAssets, externalLinks, site, type ExternalTarget } from "@/content/site";

type InstitutionalLockupProps = {
  className?: string;
  /** Mark height in CSS pixels. The university PNG stays sharp up to 110. */
  markHeight?: number;
  eager?: boolean;
  /** Each institution's name and mark link to its official destination. */
  linked?: boolean;
};

const ENTRY = "flex min-h-11 items-center gap-3.5";
const NAME = "text-[0.8125rem] leading-snug font-medium tracking-wide";

function Entry({
  linked,
  target,
  children,
}: {
  linked: boolean;
  target: ExternalTarget;
  children: ReactNode;
}) {
  return linked ? (
    <ExternalLink target={target} className={`institution-link ${ENTRY}`}>
      {children}
    </ExternalLink>
  ) : (
    <div className={ENTRY}>{children}</div>
  );
}

/** The arrow sits on the name's last line, so it never drifts away from it. */
function Name({ name, linked, className = "" }: { name: string; linked: boolean; className?: string }) {
  return (
    <span className={`${NAME} ${className}`}>
      <span className="institution-name">{name}</span>
      {linked ? (
        <>
          {" "}
          <ExternalArrow className="ml-1 inline-block" />
        </>
      ) : null}
    </span>
  );
}

/**
 * The faculty and university marks with their full names, in the affiliation's
 * order. They sit on blue with their own colours and no box, always subordinate
 * to the Gladius emblem.
 */
export function InstitutionalLockup({
  className = "",
  markHeight = 56,
  eager = false,
  linked = false,
}: InstitutionalLockupProps) {
  const { faculty, university } = brandAssets;
  const facultyWidth = Math.round((markHeight * faculty.width) / faculty.height);
  const loading = eager ? "eager" : "lazy";

  return (
    <ul className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10 ${className}`}>
      <li>
        <Entry linked={linked} target={externalLinks.faculty}>
          <Image
            src={faculty.src}
            alt={faculty.alt}
            width={facultyWidth}
            height={markHeight}
            quality={90}
            loading={loading}
            className="shrink-0 object-contain"
            style={{ width: facultyWidth, height: markHeight }}
          />
          <Name name={site.faculty} linked={linked} />
        </Entry>
      </li>
      <li>
        <Entry linked={linked} target={externalLinks.university}>
          <Image
            src={university.src}
            alt={university.alt}
            width={markHeight}
            height={markHeight}
            quality={90}
            loading={loading}
            className="shrink-0 object-contain"
            style={{ width: markHeight, height: markHeight }}
          />
          <Name name={site.university} linked={linked} className="max-w-[15rem]" />
        </Entry>
      </li>
    </ul>
  );
}
