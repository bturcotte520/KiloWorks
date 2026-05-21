export type Speaker = {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
};

export type Session = {
  id: string;
  /** ISO 8601 datetime with timezone offset, e.g. "2026-05-21T11:00:00-04:00" */
  datetime: string;
  /** Human-readable display string, e.g. "11:00 AM EDT — May 21, 2026" */
  displayTime: string;
  speakers: Speaker[];
};

/**
 * All scheduled KiloWorks sessions.
 * Times are in Eastern Time (EDT = UTC-4 in summer, EST = UTC-5 in winter).
 * Add future sessions here as they are scheduled.
 */
export const sessions: Session[] = [
  {
    id: "2026-05-21-1100",
    datetime: "2026-05-21T11:00:00-04:00",
    displayTime: "11:00 AM EDT — May 21, 2026",
    speakers: [
      {
        name: "Brian Turcotte",
        role: "Developer Relations Engineer",
        company: "Kilo Code",
        image: "/brian.jpeg",
        linkedin: "https://www.linkedin.com/in/brian-turcotte",
      },
      {
        name: "Brendan O'Leary",
        role: "The best DevRel Engineer on Earth",
        company: "",
        image:
          "https://raw.githubusercontent.com/b3ntobot/emails/main/images/speakers/speaker-new.jpg",
      },
    ],
  },
  {
    id: "2026-05-21-1130",
    datetime: "2026-05-21T11:30:00-04:00",
    displayTime: "11:30 AM EDT — May 21, 2026",
    speakers: [
      {
        name: "Dawn Choo",
        role: "ex–Data Scientist at Meta & Amazon · 250K+ followers",
        company: "",
        image: "/dawn-choo.jpg",
        linkedin: "https://linkedin.com/in/data-dawn",
      },
    ],
  },
  {
    id: "2026-05-21-1200",
    datetime: "2026-05-21T12:00:00-04:00",
    displayTime: "12:00 PM EDT — May 21, 2026",
    speakers: [
      {
        name: "Adi Singh",
        role: "Co-founder (YC S25)",
        company: "AgentMail",
        image: "/adi-singh.jpg",
        linkedin: "https://linkedin.com/in/adivirsingh13",
      },
    ],
  },
  {
    id: "2026-05-21-1230",
    datetime: "2026-05-21T12:30:00-04:00",
    displayTime: "12:30 PM EDT — May 21, 2026",
    speakers: [
      {
        name: "Alex Campos",
        role: "Director of Sales Partnerships",
        company: "FriendliAI",
        image: "/alex-campos.jpg",
        linkedin: "https://linkedin.com/in/alexander-campos",
      },
    ],
  },
  {
    id: "2026-05-21-1300",
    datetime: "2026-05-21T13:00:00-04:00",
    displayTime: "1:00 PM EDT — May 21, 2026",
    speakers: [
      {
        name: "Jonathon Murray",
        role: "NYC General Manager",
        company: "AI Tinkerers",
        image: "/jonathon-murray.jpg",
        linkedin: "https://linkedin.com/in/made-in-boston",
      },
    ],
  },
  {
    id: "2026-05-21-1330",
    datetime: "2026-05-21T13:30:00-04:00",
    displayTime: "1:30 PM EDT — May 21, 2026",
    speakers: [
      {
        name: "Becca Campbell",
        role: "Builder & Innovator",
        company: "Parkade",
        image: "/becca-campbell.jpg",
        linkedin: "https://www.linkedin.com/in/campbellrebecca/",
      },
    ],
  },
  // Placeholder for the next KiloWorks event — update with real details when scheduled
  {
    id: "next-kiloworks-tba",
    datetime: "2026-06-04T18:00:00-04:00",
    displayTime: "6:00 PM EDT — Jun 4, 2026",
    speakers: [
      {
        name: "Next Speaker TBA",
        role: "Stay tuned for announcements",
        company: "KiloWorks",
        image: "/kilo-logo.jpg",
      },
    ],
  },
];

/**
 * Returns the next session that hasn't started yet, or null if none exist.
 */
export function getNextSession(): Session | null {
  const now = Date.now();
  const upcoming = sessions
    .filter((s) => new Date(s.datetime).getTime() > now)
    .sort(
      (a, b) =>
        new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    );
  return upcoming[0] ?? null;
}
