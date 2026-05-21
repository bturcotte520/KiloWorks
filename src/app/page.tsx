import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const resources = [
    {
      title: "Kilo for Slack",
      description: "Bring Kilo Code into your Slack workspace and collaborate with AI directly in your team's channels.",
      href: "https://kilo.ai/slack",
      label: "Learn More",
      badge: "Integration",
    },
    {
      title: "Kilo Cloud Agents",
      description: "Run autonomous AI coding agents in the cloud — no local setup required.",
      href: "https://kilo.ai/cloud",
      label: "Explore Cloud Agents",
      badge: "Cloud",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Image
            src="/kiloworks-logo.png"
            alt="Kilo Code"
            width={200}
            height={60}
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <Link
            href="/speakers"
            className="text-sm font-semibold px-4 py-2 rounded-xl border border-violet-700/50 bg-violet-950/40 text-violet-400 hover:bg-violet-900/40 hover:border-violet-600 hover:text-violet-300 transition-all duration-150"
          >
            Speakers →
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-14 sm:space-y-20">

        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Kilo Code Resource Guide
          </h1>
          <p className="text-lg font-medium text-neutral-400 sm:text-xl">Everything you need to get started with Kilo Code</p>

          {/* Social links */}
          <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://x.com/kilocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white transition-all duration-150 text-sm font-medium"
              >
                {/* X (Twitter) */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.013 5.303 6.15-7.303zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
                </svg>
                @kilocode
              </a>
              <a
                href="https://www.linkedin.com/company/kilo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-blue-600/50 hover:bg-blue-950/20 hover:text-blue-300 transition-all duration-150 text-sm font-medium"
              >
                {/* LinkedIn */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Kilo on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/kilocodeai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-pink-600/50 hover:bg-pink-950/20 hover:text-pink-300 transition-all duration-150 text-sm font-medium"
              >
                {/* Instagram */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                @kilocodeai
              </a>
          </div>
        </section>

        {/* Kilo Code Download */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Kilo Code</h2>
            <p className="text-neutral-500 text-sm">Start using Kilo Code today.</p>
          </div>

          <div className="rounded-2xl border border-yellow-600/50 bg-yellow-950/30 p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-neutral-100">Download Kilo for Free</h3>
              <p className="text-neutral-400 leading-relaxed">Get started with Kilo Code — the AI-powered coding assistant. Download for free and start building with your personal AI agent today.</p>
            </div>
            <a
              href="https://kilo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              Download Kilo for Free
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </section>

        {/* Resources */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Resources</h2>
            <p className="text-neutral-500 text-sm">Explore more of what Kilo Code has to offer.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map(({ title, description, href, label, badge }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-violet-800/60 hover:bg-neutral-800/60 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-neutral-100 group-hover:text-white transition-colors">{title}</h3>
                  <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/20">
                    {badge}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed flex-1">{description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                  {label}
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

      </div>

      {/* QR/Link button — fixed bottom right */}
      <div className="fixed bottom-6 right-6">
        <Link
          href="/qr"
          className="flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl border border-yellow-600/50 bg-yellow-950/40 text-yellow-400 hover:bg-yellow-950/60 hover:border-yellow-500 hover:text-yellow-300 transition-all duration-150 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 17.25h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
          </svg>
          QR / Link
        </Link>
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
