"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

import { brandAssets, navigation, site } from "@/content/site";

import { ProgressDial } from "./progress-dial";

const TRACKED_SECTIONS = [...navigation.map((item) => item.id), "penutup"];

/** The chapter whose top has passed 40% of the viewport height. */
function currentSection() {
  const line = window.innerHeight * 0.4;
  let current: string = TRACKED_SECTIONS[0];
  for (const id of TRACKED_SECTIONS) {
    const top = document.getElementById(id)?.getBoundingClientRect().top;
    if (top !== undefined && top <= line) current = id;
  }
  return current;
}

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string>(navigation[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);
  const navList = useRef<HTMLUListElement>(null);

  const sync = useCallback((position: number) => {
    setSolid(position > 48);
    setActive(currentSection());
  }, []);

  useMotionValueEvent(scrollY, "change", sync);

  // A page restored mid-scroll fires no scroll event.
  useEffect(() => {
    const frame = requestAnimationFrame(() => sync(window.scrollY));
    return () => cancelAnimationFrame(frame);
  }, [sync]);

  // One marker slides between chapters, measured so it fits each label exactly.
  useEffect(() => {
    const list = navList.current;
    if (!list) return;
    const place = () => {
      const link = list.querySelector<HTMLElement>('[aria-current="location"]');
      list.style.setProperty("--marker-x", `${link?.offsetLeft ?? 0}px`);
      list.style.setProperty("--marker-w", `${link?.offsetWidth ?? 0}`);
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(list);
    return () => observer.disconnect();
  }, [active]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    menuButton.current?.focus();
  }, []);

  // While the menu is open the page behind it can't be reached or scrolled.
  useEffect(() => {
    if (!menuOpen) return;
    const behind = [document.querySelector("main"), document.querySelector("footer")];
    behind.forEach((element) => element?.setAttribute("inert", ""));
    document.documentElement.style.overflow = "hidden";
    firstMenuLink.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      behind.forEach((element) => element?.removeAttribute("inert"));
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen, closeMenu]);

  // Scrolling is locked until the menu closes, so the jump waits a frame for it.
  const goFromMenu = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() => {
      const target = document.getElementById(id);
      target?.scrollIntoView();
      target?.focus({ preventScroll: true });
      history.replaceState(null, "", `#${id}`);
    });
  };

  const { emblem } = brandAssets;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-white transition-colors duration-300 ${
        solid || menuOpen ? "bg-header" : "bg-transparent"
      }`}
    >
      <div className="relative z-10 flex h-(--header-height) items-center justify-between px-(--gutter)">
        <a
          href="#beranda"
          aria-label={`${site.name}: kembali ke beranda`}
          className={`flex min-h-11 items-center gap-3 transition-opacity duration-300 ${
            solid || menuOpen ? "opacity-100" : "opacity-0 focus-visible:opacity-100"
          }`}
        >
          {/* Hidden at the top of the page, where the hero already says all of this. */}
          <Image
            src={emblem.src}
            alt=""
            width={38}
            height={38}
            quality={90}
            className="size-[2.375rem] object-contain"
          />
          <span className="font-display text-[1.0625rem] leading-none font-semibold tracking-wide">
            {site.wordmark}
          </span>
        </a>

        <div className="flex items-center gap-2 lg:gap-8">
          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul ref={navList} className="nav-list flex items-center gap-7">
              {navigation.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "location" : undefined}
                      className="nav-link relative flex min-h-11 items-center text-[0.875rem] font-medium tracking-wide"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ProgressDial />

          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-navigasi"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
            data-js-only
            className="-mr-2.5 grid size-11 place-items-center lg:hidden"
          >
            <span aria-hidden="true" className="relative block h-3 w-6">
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute inset-x-0 h-px bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="menu-navigasi"
        aria-label="Menu"
        inert={!menuOpen}
        data-open={menuOpen}
        className="menu-sheet lg:hidden"
      >
        <ul>
          {navigation.map((item, index) => (
            <li
              key={item.id}
              className="menu-item overflow-clip border-b border-white/15 first:border-t"
              style={{ "--i": index } as CSSProperties}
            >
              <a
                ref={index === 0 ? firstMenuLink : undefined}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                onClick={(event) => goFromMenu(event, item.id)}
                className="flex items-center justify-between py-[clamp(0.625rem,2.2svh,1.125rem)] font-display text-[clamp(2rem,10vw,3.25rem)] leading-tight font-medium [font-variation-settings:'opsz'_24]"
              >
                {item.label}
                {active === item.id ? (
                  <span aria-hidden="true" className="size-2 rotate-45 bg-gold" />
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
