"use client";

import ShirtViewer from "./components/ShirtViewer";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { dropProducts } from "./data/products";

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLScCklvzv5Oex-9YObi35eWCWAIp45RyJpGkJNoBtDFe8JavVQ/formResponse";

const GOOGLE_EMAIL_ENTRY = "entry.1935803025";

const colors = ["Obsidian", "Bone", "Anime Collab"] as const;
const sizes = ["S", "M", "L", "XL", "XXL"];
const PRIMARY_PRODUCT_IMAGE = "/images/drop-001-product.png";
const PRIMARY_PRODUCT_TITLE = "SYXRS WRLD DROP 001";
const PRIMARY_PRODUCT_DESCRIPTION = "Official product visual — built from the north.";
const PRIMARY_PRODUCT_TAG = "DROP 001";


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

  const activeModelPath =
    color === "Bone"
      ? "/models/2nd-product.glb"
      : color === "Anime Collab"
        ? "/models/3rd-product.glb"
        : preview.modelPath;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030303] text-white">
      <nav className="fixed left-1/2 top-3 z-50 flex w-[94%] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full surface-panel bg-[#130f12]/75 px-3 py-2.5 backdrop-blur-2xl sm:top-5 sm:w-[92%] sm:px-5 sm:py-4">
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

      <section className="relative flex min-h-[62vh] items-center px-4 py-12 sm:min-h-[78vh] sm:px-6 sm:py-18">
        <div className="absolute inset-0 hero-parallax bg-[radial-gradient(circle_at_22%_20%,rgba(70,16,24,0.34),transparent_36%),radial-gradient(circle_at_82%_28%,rgba(143,14,25,0.28),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.06),transparent_38%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[1.18fr_0.82fr] lg:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-xs font-bold tracking-[0.42em] text-zinc-400 sm:tracking-[0.55em]">
              DROP 001 • AFTER DARK
            </p>

            <h1 className="text-4xl font-black leading-[0.9] tracking-[0.04em] sm:text-6xl md:text-6xl lg:text-7xl">
              SYXRS
              <br />
              WRLD
            </h1>

            <p className="mt-4 max-w-2xl text-sm font-semibold tracking-[0.14em] text-zinc-300 sm:text-lg md:text-2xl">
              BUILT FROM THE NORTH
            </p>

            <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
              Toronto-born athletic streetwear for midnight lifts, street motion,
              and the next generation building under pressure.
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
              <a
                href="#access"
                onClick={() => trackEvent("hero_cta_click", { source: "hero_primary" })}
                className="rounded-full bg-white px-8 py-4 text-center text-sm font-black text-black transition hover:scale-105"
              >
                JOIN WRLD ACCESS
              </a>

              <a
                href="#configurator"
                className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-black text-white transition hover:bg-white/15"
              >
                BUILD DROP 001
              </a>
            </div>

            <p className="mt-2 text-xs tracking-[0.16em] text-zinc-400">
              LIMITED FIRST RUN • ACCESS CLOSES SOON
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
            className="relative overflow-hidden rounded-[2rem] surface-panel depth-card bg-[#1a151a]/70 p-4 backdrop-blur-2xl sm:rounded-[2.25rem] sm:p-5"
          >
            <div className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.22em] text-zinc-400 sm:text-xs">
              <span>LIVE PRODUCT PREVIEW</span>
              <span>DROP 001</span>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key="primary-product-image"
                  initial={{ opacity: 0.85, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Image
                    src={PRIMARY_PRODUCT_IMAGE}
                    alt={PRIMARY_PRODUCT_TITLE}
                    width={1200}
                    height={900}
                    priority
                    unoptimized
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                    className="h-auto w-full object-cover object-center transition duration-300"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-3 flex gap-2">
              <button
                onClick={() =>
                  setPreviewIndex((current) =>
                    current === 0 ? dropProducts.length - 1 : current - 1
                  )
                }
                  className="rounded-full border border-white/20 bg-[#180f13]/80 px-4 py-2 text-[10px] font-black tracking-[0.22em] text-zinc-200 transition hover:scale-105 hover:bg-[#8f0e19]/35"
              >
                PREV
              </button>
              <button
                onClick={() =>
                  setPreviewIndex((current) => (current + 1) % dropProducts.length)
                }
                  className="rounded-full border border-white/20 bg-[#180f13]/80 px-4 py-2 text-[10px] font-black tracking-[0.22em] text-zinc-200 transition hover:scale-105 hover:bg-[#8f0e19]/35"
              >
                NEXT
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="-mt-2 px-4 py-2 sm:-mt-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {["LIMITED RUNS", "TORONTO BUILT", "ATHLETIC STREETWEAR"].map(
            (item) => (
              <div
                key={item}
                className="rounded-2xl surface-panel depth-card float-soft bg-[#19161b]/70 px-5 py-4 text-center backdrop-blur-2xl"
              >
                <p className="text-xs font-black tracking-[0.28em] text-zinc-300">
                  {item}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section id="configurator" className="px-4 py-7 sm:px-6 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, rotateX: 1.5, rotateY: -1.5 }}
            className="order-2 rounded-[1.5rem] surface-panel depth-card bg-[#171317]/75 p-5 backdrop-blur-2xl sm:rounded-[3rem] md:p-8 lg:order-1"
          >
            <p className="mb-4 text-xs font-bold tracking-[0.45em] text-zinc-500">
              CONFIGURATOR
            </p>

            <h2 className="text-2xl font-black tracking-[0.06em] sm:text-4xl md:text-5xl">
              BUILD DROP 001
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Choose your first SYXRS WRLD piece before production. Every build
              is reserved through preorder, keeping the drop limited and
              intentional.
            </p>

            <div className="mt-5">
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
                        : "border border-white/10 bg-[#22171c] text-white hover:bg-[#2a1a21]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
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
                        : "border border-white/10 bg-[#22171c] text-white hover:bg-[#2a1a21]"
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

            <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-[#140f12]/90 p-4 sm:rounded-[2rem] sm:p-5">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            whileHover={{ y: -4, rotateX: 2, rotateY: 1.5 }}
            className="order-1 relative overflow-hidden rounded-[1.5rem] surface-panel depth-card bg-[#171317]/75 p-4 backdrop-blur-2xl sm:rounded-[3rem] sm:p-6 lg:order-2"
          >
            <div className="relative z-10 mb-5 flex items-center justify-between text-[10px] tracking-[0.22em] text-zinc-400 sm:text-xs">
              <span>{color.toUpperCase()}</span>
              <span>DROP 001 • SIZE {size}</span>
            </div>

            <div className="max-h-[360px] overflow-hidden rounded-[1.25rem] sm:max-h-[460px] sm:rounded-[2rem]">
              <ShirtViewer modelPath={activeModelPath} />
            </div>

            <div className="mt-5 text-center">
              <h3 className="text-2xl font-black md:text-3xl">
                DROP 001 3D BUILD
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
                Selected build: {color} / {size} / ${selectedPrice} CAD
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="drop" className="relative px-4 py-7 sm:px-6 sm:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(85,20,30,0.28),transparent_36%),radial-gradient(circle_at_78%_45%,rgba(143,14,25,0.22),transparent_40%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-5 rounded-[1.5rem] surface-panel float-soft bg-[#181318]/75 p-5 backdrop-blur-2xl sm:rounded-[3rem] md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
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
                  className="rounded-2xl surface-panel bg-[#140f12]/80 p-4 text-center"
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
            className="flex min-h-[260px] items-center justify-center rounded-[2rem] border border-white/10 bg-[#140f12]/85 p-6 sm:min-h-[320px] md:min-h-[360px]"
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

      <section id="access" className="px-4 py-7 sm:px-6 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 rounded-[1.5rem] surface-panel bg-[#171317]/75 p-5 backdrop-blur-2xl md:flex-row md:items-center">
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
                className="min-h-12 flex-1 rounded-full border border-white/10 bg-[#120d10]/85 px-5 text-white outline-none"
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

      <footer className="border-t border-white/10 px-6 py-6 text-center text-xs text-zinc-500 sm:text-sm">
        © 2026 SYXRS WRLD • BUILT FROM THE NORTH
      </footer>
    </main>
  );
}