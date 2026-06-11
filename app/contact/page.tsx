import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Olia International - Industrial Washing Machines",
  description:
    "Get in touch with Olia International. Contact details, factory location in Delhi, phone number, email, and GST information. Request quotes and product specifications.",
  openGraph: {
    title: "Contact Olia International",
    description:
      "Contact information and factory location for Olia International industrial washing machine manufacturer.",
  },
};

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

const specifications = [
  {
    title: "Capacity Range",
    description: "15 kg to 120 kg per load, scalable for different facility sizes",
  },
  {
    title: "Energy Efficient",
    description: "Advanced thermal controls and optimized motor specifications for reduced consumption",
  },
  {
    title: "Dual Function",
    description: "Washer Extractors and Hydro Extractors combine washing and extraction in one",
  },
  {
    title: "Safety Features",
    description: "Electrically interlocked doors, auto-timing controls, and protective mechanisms",
  },
];

const capabilities = [
  "Front-loading and side-loading washing machines",
  "Washer extractors for combined wash-extract cycles",
  "Hydro extractors (direct drive and three-leg models)",
  "Industrial drying tumblers with auto timing",
  "Custom engineering for specific requirements",
  "Installation, training, and ongoing support services",
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
                Contact and Specifications
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
              Get in Touch
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Contact Olia International.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              We&apos;re ready to discuss your industrial laundry equipment requirements and provide quotes, technical specifications, and installation support for your facility.
            </p>

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
              For inquiries, specifications, or quotations, reach out to us at{" "}
              <a
                className="font-semibold underline decoration-amber-200/70 underline-offset-4"
                href="mailto:oliainternational@gmail.com"
              >
                oliainternational@gmail.com
              </a>
              . We respond to all inquiries within 24 hours.
            </div>
          </div>

          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
              <Image
                src="/images/four.jpeg"
                alt="Industrial laundry machinery in production facility"
                width={1400}
                height={900}
                className="h-70 w-full object-cover sm:h-90 lg:h-105"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {specifications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm leading-6"
                >
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
            Product Offerings
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Complete industrial laundry solutions for your facility.
          </h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="flex gap-3 text-sm">
                <span className="flex-shrink-0 text-amber-400">✓</span>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-4xl border border-white/10 bg-slate-950/55 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-200">
            Visit Us
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Factory Location
          </h3>
          <div className="mt-4">
            <a
              href="https://maps.google.com/?q=28.774181,77.055229"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg border border-white/10 hover:shadow-lg transition"
            >
              <iframe
                src="https://www.google.com/maps?q=28.774181,77.055229&z=15&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                title="Olia International Factory Location"
              />
              <div className="p-3 bg-slate-900 text-center font-medium">
                Open in Google Maps →
              </div>
            </a>
          </div>
        </section>

        {/* <div className="mt-6 flex flex-wrap gap-3">
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
            Send Email Inquiry
          </a>
          <a
            href="tel:+919911911242"
            className="inline-flex items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-amber-400/20"
          >
            Call Us
          </a>
        </div> */}
      </main>
    </div>
  );
}
