import Image from "next/image";
import Link from "next/link";

const factoryDetails = [
  {
    label: "Factory Location",
    value: "KH. NO. 154/719 POOTH KHURD VILL. BAWANA, DELHI- 110039",
  },
  {
    label: "Contact Number",
    value: "+91 9911911242",
  },
  {
    label: "GST Number",
    value: "07CKIPM1281P1ZM",
  },
  {
    label: "Email",
    value: "oliainternational@gmail.com",
  },
];

const capabilities = [
  "Industrial washer manufacturing",
  "Custom load capacities",
  "Installation and after-sales support",
  "Suitable for laundry, hotel, hospital, and garment operations",
];

export default function ContactPage() {
  return (
    <div
      className="min-h-screen text-slate-100"
      style={{
        background:
          "radial-gradient(circle at top, rgba(251,191,36,0.12), transparent 34%), linear-gradient(180deg, #06101d 0%, #0f172a 100%)",
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
                Contact and Factory Details
              </h1>
            </div>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-300">
            <Link
              href="/"
              className="rounded-full border border-white/10 px-4 py-2 transition hover:bg-white/10"
            >
              Home
            </Link>
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-100">
              Contact
            </span>
          </nav>
        </header>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-4xl border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/25 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
              Reach us
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Factory contact info.
            </h2>
            {/* <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              This page is set up for your location, phone, GST, and email details.
              Replace the placeholder values with your final business information
              when you are ready.
            </p> */}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {factoryDetails.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-100 sm:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-7 text-amber-50">
              Email any inquiry to{" "}
              <a
                className="font-semibold underline decoration-amber-200/70 underline-offset-4"
                href="mailto:oliainternational@gmail.com"
              >
                oliainternational@gmail.com
              </a>
              .
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <Image
                src="/images/four.jpeg"
                alt="Industrial laundry machinery"
                width={1400}
                height={900}
                className="h-70 w-full object-cover sm:h-90 lg:h-105"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300 sm:p-6">
              {/* <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-200">
                Note
              </p> */}
              {/* <p className="mt-3">
                If you want, you can later add a Google Maps embed, a WhatsApp
                button, or a simple enquiry form here without changing the
                overall layout.
              </p> */}
              {/* <div className="mt-3">
                <a
                  href="https://maps.google.com/?q=28.774181,77.055229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  View Location on Google Maps
                </a>
              </div> */}
              <div className="mt-3">
                <a
                  href="https://maps.google.com/?q=28.774181,77.055229"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border hover:shadow-lg transition"
                >
                  <iframe
                    src="https://www.google.com/maps?q=28.774181,77.055229&z=15&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Location Map"
                  />
                  <div className="p-3 text-center font-medium">
                    Open in Google Maps →
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Back to Home
          </Link>
          <a
            href="mailto:oliainternational@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Send Email
          </a>
        </div>
      </main>
    </div>
  );
}
