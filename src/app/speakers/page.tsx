import Link from "next/link";
import Image from "next/image";

const slots: { time: string; speakers: { name: string; role: string; company: string; image: string; linkedin?: string }[] }[] = [
  {
    time: "11:00 AM EDT",
    speakers: [
      {
        name: "Brian Turcotte",
        role: "Developer Relations Engineer",
        company: "Kilo Code",
        image: "/brian.jpeg",
        linkedin: "https://www.linkedin.com/in/brian-turcotte",
      },
    ],
  },
  {
    time: "11:30 AM EDT",
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
    time: "12:00 PM EDT",
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
    time: "12:30 PM EDT",
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
    time: "1:00 PM EDT",
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
    time: "1:30 PM EDT",
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
];

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/kiloworks-logo.png"
              alt="Kilo Code"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-400 text-base">Speakers</span>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Hero */}
        <section className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Speakers
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Today&apos;s lineup — click any speaker to connect on LinkedIn.
          </p>
        </section>

        {/* Slots */}
        <div className="space-y-12">
          {slots.map((slot) => {
            const companies = [...new Set(slot.speakers.map((s) => s.company).filter(Boolean))];
            return (
            <section key={slot.time} className="space-y-5">
              {/* Time label */}
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <span className="text-xl font-semibold text-yellow-400">{slot.time}</span>
                  {companies.length > 0 && (
                    <span className="ml-3 text-base font-semibold text-neutral-300">
                      {companies.join(" · ")}
                    </span>
                  )}
                </div>
                <div className="flex-1 h-px bg-neutral-800" />
              </div>

              {/* Speaker row */}
              <div className="flex flex-wrap gap-4">
                {slot.speakers.map((speaker) => {
                  const inner = (
                    <>
                      <div className="shrink-0 w-20 h-20 rounded-full overflow-hidden border border-neutral-700">
                        <Image
                          src={speaker.image}
                          alt={speaker.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 space-y-1.5">
                        <p className="text-lg font-semibold text-neutral-100 group-hover:text-white transition-colors">
                          {speaker.name}
                        </p>
                        <p className="text-base text-neutral-400 leading-snug">
                          {speaker.role}{speaker.role && speaker.company ? " @ " : ""}{speaker.company}
                        </p>
                        {speaker.linkedin && (
                          <p className="text-sm text-neutral-600 group-hover:text-violet-400 transition-colors flex items-center gap-1.5 pt-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            LinkedIn
                          </p>
                        )}
                      </div>
                    </>
                  );
                  return speaker.linkedin ? (
                    <a
                      key={speaker.name}
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-5 hover:border-neutral-600 hover:bg-neutral-800/60 transition-all duration-200 w-full sm:w-[calc(50%-0.5rem)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={speaker.name}
                      className="group flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900 px-6 py-5 w-full sm:w-[calc(50%-0.5rem)]"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>
          );})}
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-xs text-neutral-600">
          Kilo Code — all links open in a new tab
        </div>
      </footer>
    </main>
  );
}
