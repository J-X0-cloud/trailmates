"use client";

import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { AppScreen } from "@/components/phone/screens";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/SectionHead";
import { PREVIEW_FACTS, SCREENS } from "@/lib/data/preview";

const SCROLL_SETTLE_MS = 60;

/**
 * Five-screen carousel. The phone is a native scroll-snap track, so touch swipes and trackpads work
 * without custom gesture code; tabs, dots, arrows and the keyboard scroll it programmatically and the
 * scroll position is the single source of truth for the active screen.
 */
export function PhonePreview() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const count = SCREENS.length;

  const go = useCallback(
    (i: number) => {
      const track = trackRef.current;
      const next = ((i % count) + count) % count;
      track?.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
      setCurrent(next);
    },
    [count],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(() => {
        if (track) setCurrent(Math.round(track.scrollLeft / track.clientWidth));
      }, SCROLL_SETTLE_MS);
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(settleTimer.current);
    };
  }, []);

  function onLink(event: MouseEvent, i: number) {
    event.preventDefault();
    go(i);
  }

  function onTrackKey(event: KeyboardEvent) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(current + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(current - 1);
    }
  }

  return (
    <section className="pv">
      <div className="wrap">
        <div className="sec-head center pv-head">
          <Eyebrow dot>Interactive preview</Eyebrow>
          <h1>Take Trailmates for a walk.</h1>
          <p>Tap a screen, use the arrows, or swipe the phone. Every screen here is built from the same components as the app.</p>
        </div>
        <div className="pv-grid">
          <div className="pv-tabs" role="tablist" aria-label="App screens">
            {SCREENS.map((screen, i) => (
              <a
                key={screen.key}
                className={clsx("pv-tab", i === current && "on")}
                href={`#s-${screen.key}`}
                role="tab"
                aria-selected={i === current}
                onClick={(event) => onLink(event, i)}
              >
                <Icon name={screen.icon} />
                <span>
                  <b>{screen.tab}</b>
                  <small>{screen.title}</small>
                </span>
              </a>
            ))}
          </div>

          <div className="pv-stage">
            <div className="phone big">
              <div className="phone-in">
                <span className="notch" />
                <div
                  ref={trackRef}
                  className="pv-track"
                  tabIndex={0}
                  aria-label="App screens, swipe to browse"
                  onKeyDown={onTrackKey}
                >
                  {SCREENS.map((screen) => (
                    <div key={screen.key} className="pv-slide" id={`s-${screen.key}`} role="tabpanel" aria-label={`${screen.tab} screen`}>
                      <AppScreen screen={screen.key} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pv-ctrl">
              <button type="button" className="pv-prev" aria-label="Previous screen" onClick={() => go(current - 1)}>
                <Icon name="chev" />
              </button>
              <div className="pv-dots">
                {SCREENS.map((screen, i) => (
                  <a
                    key={screen.key}
                    href={`#s-${screen.key}`}
                    className={clsx(i === current && "on")}
                    aria-label={`Show ${screen.tab} screen`}
                    onClick={(event) => onLink(event, i)}
                  />
                ))}
              </div>
              <button type="button" className="pv-next" aria-label="Next screen" onClick={() => go(current + 1)}>
                <Icon name="chev" />
              </button>
            </div>
          </div>

          <div className="pv-notes">
            {SCREENS.map((screen, i) => (
              <div key={screen.key} className={clsx("pv-note", i === current && "on")}>
                <Eyebrow>
                  Screen {i + 1} of {count}
                </Eyebrow>
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </div>
            ))}
            <div className="pv-facts">
              {PREVIEW_FACTS.map((fact) => (
                <div key={fact.label}>
                  <b>{fact.value}</b>
                  <small>{fact.label}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
