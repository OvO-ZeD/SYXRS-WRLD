"use client";

import ShirtViewer from "./components/ShirtViewer";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { dropProducts } from "./data/products";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScCklvzv5Oex-9YObi35eWCWAIp45RyJpGkJNoBtDFe8JavVQ/formResponse";

const GOOGLE_EMAIL_ENTRY = "entry.1935803025";

const colors = ["Obsidian", "Bone", "Gunmetal"] as const;
const sizes = ["S", "M", "L", "XL", "XXL"];


export default function Home() {
  const [color, setColor] = useState<(typeof colors)[number]>("Obsidian");
  const [size, setSize] = useState("L");
  const [submitted, setSubmitted] = useState(false);
  const [sizeGuide, setSizeGuide] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(0);

  const preview = dropProducts[previewIndex];

  const trackEvent = (eventName: string, payload?: Record<string, string>) => {
    if (typeof window === "undefined") return;

    window.dispatchEvent(
      new CustomEvent("syxrs:analytics", { detail: { eventName, ...payload } })
    );
  };

  const selectedPrice = useMemo(() => {
    return size === "XXL" ? 95 : 89;
  }, [size]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <nav className="fixed left-1/2 top-5 z-50 flex w-[92%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-2xl sm:px-5 sm:py-4">
        <a href="#" className="text-base font-black tracking-[0.3em] md:text-xl">
          SYXRS
        </a>

        <div className="hidden gap-8 text-xs font-bold tracking-[0.22em] text-zinc-300 md:flex">
          <a href="#configurator">CONFIG</a>
          <a href="#drop">DROP 002</a>
          <a href="#access">ACCESS</a>
        </div>

        <a
          href="#access"
          className="rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-[0.15em] text-black transition hover:scale-105 sm:px-5 sm:text-xs"
        >
          JOIN
        </a>
      </nav>

      <section className="relative flex min-h-[82vh] items-center px-5 py-20 sm:px-6 sm:py-22">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(66,0,180,0.42),transparent_35%),radial-gradient(circle_at_82%_28%,rgba(220,25,45,0.28),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.08),transparent_36%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.42em] text-zinc-400 sm:tracking-[0.55em]">
              DROP 001 • AFTER DARK
            </p>

            <h1 className="text-5xl font-black leading-[0.92] tracking-[0.06em] sm:text-6xl md:text-7xl lg:text-8xl">
              SYXRS
              <br />
              WRLD
            </h1>

            <p className="mt-5 max-w-2xl text-base font-semibold tracking-[0.18em] text-zinc-300 sm:text-lg md:text-2xl">
              BUILT FROM THE NORTH
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
              Toronto-born athletic streetwear for midnight lifts, street motion,
              and the next generation building under pressure.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#access"
                onClick={() => trackEvent("hero_cta_click", { source: "hero_primary" })}
                className="rounded-full bg-white px-8 py-4 text-center text-sm font-black text-black transition hover:scale-105"
              >
                JOIN WRLD ACCESS
              </a>

              <p className="text-xs tracking-[0.18em] text-zinc-400 sm:self-center">
                LIMITED FIRST RUN • ACCESS CLOSES SOON
              </p>

              <a
                href="#configurator"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-black text-white transition hover:bg-white/15"
              >
                BUILD DROP 001
              </a>
            </div>

            <div className="mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
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
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl sm:rounded-[3rem] sm:p-6"
          >
            <div className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.22em] text-zinc-400 sm:text-xs">
              <span>LIVE PRODUCT PREVIEW</span>
              <span>DROP 001</span>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={preview.id}
                  initial={{ opacity: 0.45, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.35, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={preview.previewImage}
                    alt={preview.previewTitle}
                    width={1200}
                    height={900}
                    className="h-[280px] w-full object-cover brightness-110 contrast-110 transition duration-700 sm:h-[340px] md:h-[400px]"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-[0.2em] text-black sm:text-xs">
                {preview.tags[0]}
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-black tracking-[0.1em] sm:text-2xl">
                  {preview.previewTitle}
                </h3>

                <p className="mt-2 max-w-md text-xs leading-5 text-zinc-300 sm:text-sm">
                  {preview.previewDescription}
                </p>
              </div>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() =>
                  setPreviewIndex((current) =>
                    current === 0 ? dropProducts.length - 1 : current - 1
                  )
                }
                className="rounded-full border border-white/20 bg-black/45 px-4 py-2 text-[10px] font-black tracking-[0.22em] text-zinc-200 transition hover:scale-105 hover:bg-white/20"
              >
                PREV
              </button>
              <button
                onClick={() =>
                  setPreviewIndex((current) => (current + 1) % dropProducts.length)
                }
                className="rounded-full border border-white/20 bg-black/45 px-4 py-2 text-[10px] font-black tracking-[0.22em] text-zinc-200 transition hover:scale-105 hover:bg-white/20"
              >
                NEXT
              </button>
            </div>

            <div className="relative z-10 mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {dropProducts.map((mode, index) => {
                const isActive = preview.id === mode.id;

                return (
                  <motion.button
                    key={mode.id}
                    onClick={() => {
                      setPreviewIndex(index);
                      trackEvent("preview_mode_select", { mode: mode.name });
                    }}
                    whileTap={{ scale: 0.97 }}
                    whileHover={{ y: -2 }}
                    aria-pressed={isActive}
                    className={`rounded-2xl border px-4 py-3 text-center text-[10px] font-black tracking-[0.18em] transition sm:text-xs ${
                      isActive
                        ? "border-white bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                        : "border-white/10 bg-black/45 text-zinc-300 hover:border-white/35 hover:bg-white/10"
                    }`}
                  >
                    {mode.name}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-3 grid grid-cols-1 gap-1.5 text-xs text-zinc-300 sm:grid-cols-2">
              <p>
                <span className="text-zinc-500">Product:</span> {preview.name}
              </p>
              <p>
                <span className="text-zinc-500">Category:</span> {preview.category}
              </p>
              <p>
                <span className="text-zinc-500">Fit:</span> {preview.fit}
              </p>
              <p>
                <span className="text-zinc-500">Price:</span> ${preview.price} CAD
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {["LIMITED RUNS", "TORONTO BUILT", "ATHLETIC STREETWEAR"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-center backdrop-blur-2xl"
              >
                <p className="text-xs font-black tracking-[0.28em] text-zinc-300">
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section id="configurator" className="px-5 py-9 sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl sm:rounded-[3rem] md:p-8">
            <p className="mb-4 text-xs font-bold tracking-[0.45em] text-zinc-500">
              CONFIGURATOR
            </p>

            <h2 className="text-3xl font-black tracking-[0.08em] sm:text-4xl md:text-5xl">
              BUILD DROP 001
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Choose your first SYXRS WRLD piece before production. Every build
              is reserved through preorder, keeping the drop limited and
              intentional.
            </p>

            <div className="mt-7">
              <p className="mb-3 text-sm tracking-[0.28em] text-zinc-400">
                COLORWAY
              </p>

              <div className="flex flex-wrap gap-3">
                {colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`rounded-full px-5 py-3 text-sm font-black transition ${
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

            <div className="mt-7">
              <p className="mb-3 text-sm tracking-[0.28em] text-zinc-400">
                SIZE
              </p>

              <div className="flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`h-11 w-14 rounded-full text-sm font-black transition sm:w-16 ${
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
                onClick={() => {
                  setSizeGuide(true);
                  trackEvent("size_guide_open");
                }}
                className="mt-4 text-sm font-bold text-zinc-400 underline underline-offset-4"
              >
                OPEN SIZE GUIDE
              </button>
            </div>

            <div className="mt-7 rounded-[2rem] border border-white/10 bg-black/40 p-5">
              <div className="flex justify-between gap-5">
                <span className="text-zinc-400">Selected</span>
                <span className="font-black">
                  {color} / {size}
                </span>
              </div>

              <div className="mt-3 flex justify-between gap-5">
                <span className="text-zinc-400">Preorder Price</span>
                <span className="font-black">${selectedPrice} CAD</span>
              </div>
            </div>

            <a
              href="#access"
              className="mt-6 block rounded-full bg-white px-8 py-4 text-center text-sm font-black text-black transition hover:scale-[1.02]"
            >
              JOIN LIST TO RESERVE
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl sm:rounded-[3rem] sm:p-6">
            <div className="relative z-10 mb-5 flex items-center justify-between text-[10px] tracking-[0.22em] text-zinc-400 sm:text-xs">
              <span>{color.toUpperCase()}</span>
              <span>DROP 001 • SIZE {size}</span>
            </div>

            <div className="max-h-[460px] overflow-hidden rounded-[2rem]">
              <ShirtViewer modelPath={preview.modelPath} />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-2xl font-black md:text-3xl">
                DROP 001 3D BUILD
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
                Selected build: {color} / {size} / ${selectedPrice} CAD
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="drop" className="relative px-5 py-9 sm:px-6 sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(66,0,180,0.32),transparent_34%),radial-gradient(circle_at_78%_45%,rgba(220,25,45,0.24),transparent_38%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl sm:rounded-[3rem] md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.45em] text-zinc-500">
              UPCOMING RELEASE
            </p>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[0.08em] sm:text-5xl md:text-6xl">
              DROP 002
              <br />
              COMING SOON
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              The next SYXRS WRLD piece is still being built. No preview yet.
              Join WRLD Access to be first when the signal goes live.
            </p>

            <div className="mt-6 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
              {["PREVIEW LOCKED", "LIMITED RUN", "WRLD ACCESS"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4 text-center"
                >
                  <p className="text-[10px] font-bold tracking-[0.22em] text-zinc-400 md:text-xs">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#access"
              className="mt-6 inline-block rounded-full bg-white px-8 py-4 text-center text-sm font-black text-black transition hover:scale-105"
            >
              JOIN WRLD ACCESS
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex min-h-[260px] items-center justify-center rounded-[2rem] border border-white/10 bg-black/40 p-6 sm:min-h-[320px] md:min-h-[360px]"
          >
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.45em] text-zinc-500">
                PREVIEW LOCKED
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-[0.08em] md:text-5xl">
                NO MODEL YET
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-400">
                DROP 002 is not finished yet. The 3D preview will unlock once
                the next piece is ready.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="access" className="px-5 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.45em] text-zinc-500">
              WRLD ACCESS
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-[0.08em] sm:text-3xl">
              JOIN THE NEWSLETTER
            </h2>
          </div>

          <iframe name="hidden_google_form" className="hidden" />

          {!submitted ? (
            <form
              action={GOOGLE_FORM_ACTION}
              method="POST"
              target="hidden_google_form"
              onSubmit={() => setSubmitted(true)}
              className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                name={GOOGLE_EMAIL_ENTRY}
                type="email"
                required
                placeholder="ENTER EMAIL"
                aria-label="Email address"
                className="min-h-12 flex-1 rounded-full border border-white/10 bg-black/50 px-5 text-white outline-none"
              />

              <button
                type="submit"
                onClick={() =>
                  trackEvent("join_form_submit", {
                    color,
                    size,
                  })
                }
                className="min-h-12 rounded-full bg-white px-7 font-black text-black transition hover:scale-105"
              >
                JOIN WRLD ACCESS
              </button>
            </form>
          ) : (
            <p className="font-black text-white" aria-live="polite">
              YOU’RE IN. NO SPAM. DROP ALERTS ONLY.
            </p>
          )}
        </div>
      </section>

      {sizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5 backdrop-blur">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-black/80 p-6 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-6">
              <h3 className="text-2xl font-black sm:text-3xl">SIZE GUIDE</h3>

              <button
                onClick={() => setSizeGuide(false)}
                className="rounded-full bg-white px-4 py-2 text-sm font-black text-black"
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
                  className="grid grid-cols-3 border-b border-white/10 p-4 text-xs last:border-b-0 sm:text-sm"
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

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 SYXRS WRLD • BUILT FROM THE NORTH
      </footer>
    </main>
  );
}