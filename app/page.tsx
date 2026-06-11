import Image from "next/image";
import Link from "next/link";


const highlights = [
  "20+ years of industrial laundry expertise",
  "Factory-direct manufacturing and support",
  "Trusted by hotels, hospitals, laundries & garment facilities",
];

const products = [
  {
    name: "Front Loading Washing Machines",
    description: "Capacity from 30 kg to 120 kg, ideal for high-volume laundry operations with efficient water and energy usage.",
    icon: "🔄",
  },
  {
    name: "Washer Extractors",
    description: "Compact dual-function machines combining washing and extraction in one unit, perfect for space-constrained facilities.",
    icon: "⚙️",
  },
  {
    name: "Hydro Extractors",
    description: "Direct drive and three-leg models for rapid moisture removal, reducing drying time and energy costs.",
    icon: "💨",
  },
  {
    name: "Drying Tumblers",
    description: "Electrically controlled, thermally efficient dryers with auto-timing for consistent results and minimal fabric wear.",
    icon: "🔥",
  },
];

const gallery = [
  {
    src: "/images/six.jpeg",
    alt: "Industrial washing machine with front-loading drum for commercial use",
  },
  {
    src: "/images/three.jpeg",
    alt: "Heavy duty laundry machinery in a production setting",
  },
  {
    src: "/images/five.jpeg",
    alt: "Professional industrial washing equipment with premium finish",
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
              Industrial Laundry Solutions
            </span>
            <div className="space-y-4">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Heavy-duty washing systems for demanding commercial laundries.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Olia International manufactures premium industrial washing machines built for reliability, durability, and consistent performance in hotels, hospitals, laundries, and garment facilities. With capacities ranging from 15 kg to 120 kg per load, our equipment is engineered for continuous operation and maximum efficiency.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                Get in Touch
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

          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30 h-96">
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
            <Image
              src="/images/two.jpeg"
              alt="Industrial washing machine with front-loading drum for commercial use"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <div className="max-w-sm rounded-4xl border border-white/10 bg-black/50 p-4 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
                  Factory Direct Manufacturing
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Engineered for commercial laundries, hospitality, and healthcare facilities requiring reliable, high-capacity washing systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 space-y-6">
          <div className="">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
                Our Product Range
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Complete industrial laundry solutions.
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                We manufacture a full range of industrial laundry equipment including front-loading washing machines, washer extractors, hydro extractors, and drying tumblers. Each machine is built to ISO standards with precision engineering for maximum uptime and minimal maintenance.
              </p>
            </div>

            {/* <div className="grid gap-4 sm:grid-cols-2">
              {products.slice(0, 2).map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:p-6"
                >
                  <div className="text-3xl mb-3">{item.icon} fgh</div>
                  <p className="font-semibold text-white text-sm">{item.name} hello</p>
                  <p className="mt-2 text-xs leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div> */}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 sm:p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-semibold text-white text-sm">{item.name}</p>
                <p className="mt-2 text-xs leading-6 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Why Choose Olia
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Superior quality & reliability.
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li className="flex gap-3">
                <span className="text-amber-400">✓</span>
                <span>Direct factory manufacturing with 20+ years expertise</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">✓</span>
                <span>Energy-efficient systems reducing operational costs</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">✓</span>
                <span>Comprehensive after-sales support and installation</span>
              </li>
              <li className="flex gap-3">
                <span className="text-amber-400">✓</span>
                <span>Customizable capacity and specifications</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
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
                    Premium Equipment
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {index === 0 && "Front-loading washing machine with precise load control"}
                    {index === 1 && "Heavy-duty extraction and washing combined unit"}
                    {index === 2 && "Industrial-grade drying with thermal efficiency"}
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
