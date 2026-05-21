import Image from "next/image";
import Link from "next/link";

const winners = [
  { first: "Obinna", last: "Ezeilo" },
  { first: "Mordek", last: "" },
  { first: "Lasse", last: "Stilvang" },
];

export default function WinnersPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <Link href="/">
            <Image
              src="/kilo-logo.jpg"
              alt="Kilo Code"
              width={200}
              height={60}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold px-4 py-2 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-600 hover:text-white transition-all duration-150"
          >
            ← Back
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4">
          <div className="text-5xl mb-4">🏆</div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            $50 Kilo Credits Winners
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto">
            Congratulations to our three lucky winners! Each winner receives{" "}
            <span className="text-yellow-400 font-semibold">$50 of Kilo Credits</span>.
          </p>
        </section>

        {/* Winners */}
        <section className="grid sm:grid-cols-3 gap-6">
          {winners.map((winner, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 rounded-2xl border border-yellow-600/40 bg-yellow-950/20 p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-2xl font-bold text-yellow-400">
                {i + 1}
              </div>
              <div>
                <p className="text-xl font-semibold text-white">
                  {winner.first}
                  {winner.last ? ` ${winner.last}` : ""}
                </p>
                <p className="text-sm text-yellow-500/80 mt-1 font-medium">$50 Kilo Credits</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <p className="text-neutral-500 text-sm">
            Want to get started with Kilo Code?
          </p>
          <a
            href="https://kilo.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl transition-colors duration-150 text-base"
          >
            Download Kilo for Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </section>
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
