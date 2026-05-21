import Image from "next/image";
import Link from "next/link";

export default function QRPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-10 px-6 relative">

      {/* URL */}
      <a
        href="https://kilo.codes/kiloworks"
        target="_blank"
        rel="noopener noreferrer"
        className="text-4xl sm:text-5xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors tracking-tight text-center"
      >
        kilo.codes/kiloworks
      </a>

      {/* QR Code */}
      <Image
        src="/kiloworks-qrcode.png"
        alt="QR Code — kilo.codes/kiloworks"
        width={480}
        height={480}
        loading="eager"
        className="w-72 sm:w-96 h-auto rounded-2xl"
      />

      {/* Back button — bottom right */}
      <div className="fixed bottom-6 right-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-400 hover:text-neutral-200 hover:border-neutral-600 hover:bg-neutral-800 transition-all duration-150"
        >
          ← Back
        </Link>
      </div>

    </main>
  );
}
