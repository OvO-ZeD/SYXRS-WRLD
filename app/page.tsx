"use client";

import ShirtViewer from "./components/ShirtViewer";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScCklvzv5Oex-9YObi35eWCWAIp45RyJpGkJNoBtDFe8JavVQ/formResponse";

const GOOGLE_EMAIL_ENTRY = "entry.1935803025";

const products = [
  {
    name: "AFTER DARK HOODIE",
    price: 89,
    tag: "500 GSM",
    desc: "Oversized heavyweight hoodie engineered for cold city nights, post-gym motion, and low-light street presence.",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "MOTION TRAINING TEE",
    price: 48,
    tag: "ATHLETIC FIT",
    desc: "Performance-inspired street tee built for movement, layering, and everyday pressure under neon skies.",
    img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "NORTHSIDE CARGO",
    price: 76,
    tag: "UTILITY",
    desc: "Structured utility cargo designed with tactical pockets, relaxed stacking, and a dark Toronto silhouette.",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
  },
];

const colors = ["Obsidian", "Bone", "Gunmetal"] as const;
const sizes = ["S", "M", "L", "XL", "XXL"];

const previewModes = [
  {
    label: "LIVE DECAL",
    title: "Chrome chest decal",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "NORTHSIDE FIT",
    title: "Oversized street silhouette",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "CHROME DETAIL",
    title: "Reflective print detail",
    img: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "AFTER DARK",
    title: "Night drop campaign",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  const [color, setColor] = useState<(typeof colors)[number]>("Obsidian");
  const [size, setSize] = useState("L");
  const [preview, setPreview] = useState(previewModes[0]);
  const [submitted, setSubmitted] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);

  const selectedPrice = useMemo(() => {
    return size === "XXL" ? 95 : 89;
  }, [size]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <nav className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-2xl">
        <a href="#" className="text-lg font-black tracking-[0.35em] md:text-xl">
          SYXRS
        </a>

        <div className="hidden gap-8 text-xs font-bold tracking-[0.22em] text-zinc-300 md:flex">
          <a href="#access">ACCESS</a>
          <a href="#drop">DROP</a>
          <a href="#configurator">CONFIG</a>
        </div>

        <a
          href="#access"
          className="rounded-full bg-white px-5 py-2 text-xs font-black tracking-[0.15em] text-black transition hover:scale-105"
        >
          JOIN
        </a>
      </nav>

      <section className="relative flex min-h-screen items-center px-6 py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(66,0,180,0.42),transparent_35%),radial-gradient(circle_at_82%_28%,rgba(220,25,45,0.28),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.08),transparent_36%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="mb-6 text-xs font-bold tracking-[0.55em] text-zinc-400 md:text-sm">
              DROP 001 • AFTER DARK
            </p>

            <h1 className="text-5xl font-black leading-[0.92] tracking-[0.06em] sm:text-6xl md:text-8xl lg:text-9xl">
              SYXRS
              <br />
              WRLD
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-semibold tracking-[0.22em] text-zinc-300 md:text-2xl">
              BUILT FROM THE NORTH
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
              Toronto-born athletic streetwear for midnight lifts, street motion,
              and the next generation building under pressure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#access"
                className="rounded-full bg-white px-9 py-4 text-center font-black text-black transition hover:scale-105"
              >
                JOIN WRLD ACCESS
              </a>

              <a
                href="#drop"
                className="rounded-full border border-white/10 bg-white/5 px-9 py-4 text-center font-black text-white transition hover:bg-white/15"
              >
                VIEW COLLECTION
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
              {["TORONTO", "FOUNDER ACCESS", "DROP 001"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl"
                >
                  <p className="text-xs tracking-[0.25em] text-zinc-400">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl"
          >
            <div className="relative z-10 flex items-center justify-between text-xs tracking-[0.28em] text-zinc-400">
              <span>LIVE PRODUCT PREVIEW</span>
              <span>DROP 001</span>
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-black">
              <img
                src={preview.img}
                alt={preview.title}
                className="h-[420px] w-full object-cover opacity-80 transition duration-700 md:h-[500px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-black tracking-[0.2em] text-black">
                {preview.label}
              </div>

              <div className="absolute bottom-7 left-7 right-7">
                <h3 className="text-2xl font-black tracking-[0.1em] md:text-3xl">
                  {preview.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                  Temporary editorial clothing photography for the first SYXRS
                  WRLD launch direction.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
              {previewModes.map((mode) => (
                <button
                  key={mode.label}
                  onClick={() => setPreview(mode)}
                  className={`rounded-2xl border px-4 py-3 text-center text-xs font-black tracking-[0.2em] transition ${
                    preview.label === mode.label
                      ? "border-white bg-white text-black"
                      : "border-white/10 bg-black/45 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="access" className="px-6 py-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-8 text-center backdrop-blur-2xl md:p-14">
          <p className="mb-5 text-xs font-bold tracking-[0.55em] text-zinc-500">
            WRLD ACCESS NEWSLETTER
          </p>

          <h2 className="text-3xl font-black tracking-[0.08em] sm:text-4xl md:text-6xl">
            ENTER THE WRLD
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-zinc-400">
            Join the free SYXRS WRLD list for upcoming drop launches, preorder
            windows, founder pricing, and release updates.
          </p>

          <iframe name="hidden_google_form" className="hidden" />

          {!submitted ? (
            <form
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="hidden_google_form"
              onSubmit={() => setSubmitted(true)}
              className="mx-auto mt-10 flex max-w-xl flex-col gap-4 md:flex-row"
            >
              <input
                name={GOOGLE_EMAIL_ENTRY}
                type="email"
                required
                placeholder="ENTER EMAIL"
                className="min-h-14 flex-1 rounded-full border border-white/10 bg-black/50 px-6 text-white outline-none"
              />

              <button
                type="submit"
                className="min-h-14 rounded-full bg-white px-9 font-black text-black transition hover:scale-105"
              >
                JOIN FREE
              </button>
            </form>
          ) : (
            <div className="mx-auto mt-10 max-w-xl rounded-[2rem] border border-white/10 bg-black/40 p-6">
              <p className="text-xl font-black">YOU’RE IN.</p>

              <p className="mt-3 text-zinc-400">
                Watch your email for the next SYXRS WRLD drop update.
              </p>
            </div>
          )}
        </div>
      </section>

      <section id="drop" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-center text-xs font-bold tracking-[0.55em] text-zinc-500">
            COLLECTION
          </p>

          <h2 className="mb-16 text-center text-3xl font-black tracking-[0.08em] sm:text-4xl md:text-6xl">
            FEATURED PIECES
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl"
              >
                <div className="relative h-[320px] overflow-hidden bg-zinc-900 md:h-[430px]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-black tracking-[0.2em] text-black">
                    {product.tag}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{product.name}</h3>

                    <span className="text-sm text-zinc-300">
                      ${product.price} CAD
                    </span>
                  </div>

                  <p className="mt-4 leading-relaxed text-zinc-400">
                    {product.desc}
                  </p>

                  <a
                    href="#access"
                    className="mt-7 block w-full rounded-full bg-white px-6 py-4 text-center font-black text-black transition hover:scale-[1.02]"
                  >
                    JOIN LIST TO RESERVE
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="configurator" className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl md:p-12">
            <p className="mb-4 text-xs font-bold tracking-[0.55em] text-zinc-500">
              CONFIGURATOR
            </p>

            <h2 className="text-3xl font-black tracking-[0.08em] sm:text-4xl md:text-6xl">
              BUILD YOUR DROP
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-zinc-400">
              Choose your first SYXRS WRLD piece before production. Every build
              is reserved through preorder, keeping the drop limited and
              intentional.
            </p>

            <div className="mt-10">
              <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400">
                COLORWAY
              </p>

              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`rounded-full px-6 py-3 font-black transition ${
                      color === c
                        ? "bg-white text-black"
                        : "border border-white/10 bg-white/10 text-white"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm tracking-[0.28em] text-zinc-400">
                SIZE
              </p>

              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-12 w-16 rounded-full font-black transition ${
                      size === s
                        ? "bg-white text-black"
                        : "border border-white/10 bg-white/10 text-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setSizeGuide(true)}
                className="mt-5 text-sm font-bold text-zinc-400 underline underline-offset-4"
              >
                OPEN SIZE GUIDE
              </button>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-black/40 p-6">
              <div className="flex justify-between gap-5">
                <span className="text-zinc-400">Selected</span>

                <span className="font-black">
                  {color} / {size}
                </span>
              </div>

              <div className="mt-4 flex justify-between gap-5">
                <span className="text-zinc-400">Preorder Price</span>

                <span className="font-black">${selectedPrice} CAD</span>
              </div>
            </div>

            <a
              href="#access"
              className="mt-8 block rounded-full bg-white px-8 py-4 text-center font-black text-black transition hover:scale-[1.02]"
            >
              JOIN LIST TO RESERVE
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
            <div className="relative z-10 mb-8 flex items-center justify-between text-xs tracking-[0.28em] text-zinc-400">
              <span>{color.toUpperCase()}</span>
              <span>SIZE {size}</span>
            </div>

            <ShirtViewer />

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-black md:text-3xl">
                INTERACTIVE 3D PRODUCT
              </h3>

              <p className="mx-auto mt-3 max-w-md text-zinc-400">
                Selected build: {color} / {size} / ${selectedPrice} CAD
              </p>
            </div>
          </div>
        </div>
      </section>

      {sizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-6 backdrop-blur">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-black/80 p-8 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-3xl font-black">SIZE GUIDE</h3>

              <button
                onClick={() => setSizeGuide(false)}
                className="rounded-full bg-white px-4 py-2 font-black text-black"
              >
                CLOSE
              </button>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              {[
                ["S", "Chest 36-38", "Length 26"],
                ["M", "Chest 39-41", "Length 27"],
                ["L", "Chest 42-44", "Length 28"],
                ["XL", "Chest 45-47", "Length 29"],
                ["XXL", "Chest 48-50", "Length 30"],
              ].map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-3 border-b border-white/10 p-4 text-sm last:border-b-0"
                >
                  <span className="font-black">{row[0]}</span>

                  <span className="text-zinc-400">{row[1]}</span>

                  <span className="text-zinc-400">{row[2]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 px-6 py-10 text-center text-zinc-500">
        © 2026 SYXRS WRLD • BUILT FROM THE NORTH
      </footer>
    </main>
  );
}