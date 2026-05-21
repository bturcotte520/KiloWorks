"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getNextSession, type Session } from "@/lib/schedule";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function calcTimeLeft(targetMs: number): TimeLeft {
  const total = Math.max(0, targetMs - Date.now());
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, total };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

const ZERO_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };

/**
 * CountdownTimer — rendered client-side only (imported via next/dynamic ssr:false).
 * Uses a tick function called from setTimeout/setInterval so setState is never
 * invoked synchronously in the effect body.
 */
export default function CountdownTimer() {
  // undefined = not yet initialised (show skeleton), null = no upcoming sessions
  const [session, setSession] = useState<Session | null | undefined>(undefined);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO_TIME);

  useEffect(() => {
    // Tick function — called from async callbacks only (never directly in effect body)
    const tick = () => {
      const next = getNextSession();
      setSession(next);
      setTimeLeft(next ? calcTimeLeft(new Date(next.datetime).getTime()) : ZERO_TIME);
    };

    // Fire once "immediately" so the UI fills in without a visible 1-second delay
    const bootstrap = setTimeout(tick, 0);
    // Then update every second
    const interval = setInterval(tick, 1000);

    return () => {
      clearTimeout(bootstrap);
      clearInterval(interval);
    };
  }, []);

  // Loading skeleton — shown for the brief moment before the first tick fires
  if (session === undefined) {
    return (
      <div className="rounded-2xl border border-yellow-600/50 bg-yellow-950/30 p-6 sm:p-8 animate-pulse">
        <div className="h-4 w-36 bg-yellow-900/40 rounded mb-6" />
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-14 bg-yellow-900/30 rounded-xl" />
              <div className="h-3 bg-yellow-900/20 rounded mx-auto w-10" />
            </div>
          ))}
        </div>
        <div className="h-px bg-yellow-800/30 mb-5" />
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-full bg-yellow-900/30 shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-44 bg-yellow-900/30 rounded" />
            <div className="h-3 w-32 bg-yellow-900/20 rounded" />
          </div>
        </div>
      </div>
    );
  }

  // No upcoming sessions
  if (session === null) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 text-center space-y-3">
        <p className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
          Next Session
        </p>
        <p className="text-neutral-400 text-sm">
          No upcoming sessions scheduled — check back soon!
        </p>
      </div>
    );
  }

  const isStarting = timeLeft.total === 0;
  const speakerNames = session.speakers.map((s) => s.name).join(" & ");
  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="rounded-2xl border border-yellow-600/50 bg-yellow-950/30 p-6 sm:p-8 space-y-6">
      {/* Label row */}
      <div className="flex items-center gap-2">
        {isStarting ? (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-green-400 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Starting Now
          </span>
        ) : (
          <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wider">
            Next Session Starts In
          </span>
        )}
      </div>

      {/* Countdown digits */}
      {!isStarting && (
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {units.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <div className="w-full flex items-center justify-center rounded-xl bg-neutral-900/80 border border-yellow-800/30 py-3 sm:py-4">
                <span className="text-3xl sm:text-4xl font-bold text-white tabular-nums leading-none">
                  {pad(value)}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-yellow-800/30" />

      {/* Speaker row */}
      <div className="flex items-center gap-4">
        {/* Stacked avatars */}
        <div className="flex shrink-0 -space-x-3">
          {session.speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="w-11 h-11 rounded-full overflow-hidden border-2 border-yellow-950 ring-1 ring-yellow-700/30"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Name + scheduled time */}
        <div className="min-w-0">
          <p className="font-semibold text-neutral-100 truncate">{speakerNames}</p>
          <p className="text-sm text-neutral-400 mt-0.5">{session.displayTime}</p>
        </div>
      </div>
    </div>
  );
}
