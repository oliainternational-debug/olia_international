import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Industrial washing machine manufacturing",
  "Factory-direct support and service",
  "Built for garments, hotels, hospitals, and laundries",
];

const gallery = [
  {
    src: "/images/two.jpeg",
    alt: "Industrial washing machine inside a factory",
  },
  {
    src: "/images/three.jpeg",
    alt: "Heavy duty laundry machinery in a production setting",
  },
  {
    src: "/images/five.jpeg",
    alt: "Clean industrial equipment with a premium finish",
  },
];

export default function Home() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        background:
          "radial-gradient(circle at top, rgba(251,191,36,0.18), transparent 36%), linear-gradient(180deg, #08111f 0%, #0f172a 48%, #111827 100%)",
      }}
    >
      <main className="mx-auto flex w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Olia International logo"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300">
                Olia International
              </p>
              <h1 className="mt-1 text-lg font-semibold text-white">
                Industrial Washing Machine Manufacturer
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 px-4 py-2">Home</span>
            <Link
              href="/contact"
              className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-100 transition hover:bg-amber-400/20"
            >
              Contact Details
            </Link>
          </nav>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6 rounded-4xl border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
            <span className="inline-flex w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              Built for demanding factory use
            </span>
            <div className="space-y-4">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Heavy-duty washing systems for modern industrial laundries.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                We manufacture industrial washing machines designed for reliable
                performance, large load capacity, and long operating life. This
                simple site gives you a clean place to share your factory details,
                product visuals, and contact information.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                View Contact Information
              </Link>
              <a
                href="mailto:oliainternational@gmail.com"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Email: oliainternational@gmail.com
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-4xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            <Image
              src="/images/two.jpeg"
              alt="Industrial washing machine hero"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="max-w-sm rounded-4xl border border-white/10 bg-black/50 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Factory showcase
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Add your own machine photos here later if you want this page to
                  feature your exact models and production line.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Why choose us
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Clean design, clear factory identity.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Use this structure to present your industrial washing machine brand
              with enough visual space for images, technical points, and contact
              information without crowding the screen on mobile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {gallery.map((item, index) => (
              <article
                key={item.alt}
                className="overflow-hidden rounded-4xl border border-white/10 bg-slate-950/60"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                    Image 0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Professional industrial equipment imagery for a polished brand
                    feel.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
