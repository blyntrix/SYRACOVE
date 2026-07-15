import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { getVilla, villas } from "@/lib/villas";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";

export const Route = createFileRoute("/villas/$id")({
  loader: ({ params }) => {
    const villa = getVilla(params.id);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.villa.name} — ${loaderData.villa.location} | Syracove Escape` },
          { name: "description", content: loaderData.villa.tagline },
          { property: "og:title", content: loaderData.villa.name },
          { property: "og:description", content: loaderData.villa.tagline },
          { property: "og:image", content: loaderData.villa.cover },
        ]
      : [],
  }),
  component: VillaDetail,
});

function VillaDetail() {
  const { villa } = Route.useLoaderData() as { villa: NonNullable<ReturnType<typeof getVilla>> };
  const [lightbox, setLightbox] = useState<number | null>(null);

  const related = villas.filter((v) => v.id !== villa.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <motion.img
          key={villa.cover}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src={villa.cover}
          alt={villa.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/60 hover:text-amber-300 transition"
            >
              ← Back to collection
            </Link>
            <div className="mt-8 flex items-center gap-3 text-amber-300 text-[11px] tracking-[0.4em] uppercase">
              <span className="h-px w-10 bg-amber-300/50" />
              {villa.location}
            </div>
            <h1 className="mt-6 font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-tight max-w-4xl">
              {villa.name}
            </h1>
            <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg leading-relaxed">
              {villa.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="border-y border-white/10 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
          <SpecItem label="Price" value={villa.price} highlight />
          <SpecItem label="Bedrooms" value={villa.bedrooms} />
          <SpecItem label="Bathrooms" value={villa.bathrooms} />
          <SpecItem label="Area" value={villa.size} />
          <SpecItem label="Location" value={villa.country} />
        </div>
      </section>

      {/* MAIN CONTENT + STICKY SIDEBAR */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-20">
            <div>
              <div className="text-amber-300 text-[11px] tracking-[0.4em] uppercase">
                The Residence
              </div>
              <h2 className="mt-4 font-serif text-3xl md:text-5xl tracking-tight leading-[1.05]">
                A private world,<br />impeccably composed.
              </h2>
              <p className="mt-8 text-white/70 leading-relaxed text-base md:text-lg">
                {villa.description}
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {villa.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl border border-white/10 bg-white/[0.02]"
                  >
                    <span className="w-6 h-6 rounded-full border border-amber-300/50 flex items-center justify-center text-amber-300 text-xs">
                      ✦
                    </span>
                    <span className="text-white/80 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GALLERY */}
            <div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <div className="text-amber-300 text-[11px] tracking-[0.4em] uppercase">Gallery</div>
                  <h3 className="mt-3 font-serif text-3xl md:text-4xl tracking-tight">
                    {villa.images.length} views
                  </h3>
                </div>
                <span className="text-white/40 text-xs hidden md:block">Click any image to enlarge</span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {villa.images.map((src, i) => (
                  <motion.button
                    key={src + i}
                    onClick={() => setLightbox(i)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (i % 6) * 0.05 }}
                    className={`group relative overflow-hidden rounded-lg ${
                      i === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={src}
                      alt={`${villa.name} – ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* STICKY SIDEBAR */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-8">
              <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">Guide Price</div>
              <div className="mt-2 font-serif text-4xl text-amber-300">{villa.price}</div>
              <div className="mt-1 text-xs text-white/40">{villa.location}</div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
                <MiniStat label="Beds" value={villa.bedrooms} />
                <MiniStat label="Baths" value={villa.bathrooms} />
                <MiniStat label="Area" value={villa.size.split(" ")[0]} />
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="/#contact"
                  className="block text-center bg-amber-300 hover:bg-amber-200 text-black py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition"
                >
                  Book Viewing
                </a>
                <a
                  href="/#contact"
                  className="block text-center border border-white/20 hover:border-amber-300 hover:text-amber-300 text-white py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition"
                >
                  Contact Agent
                </a>
                <a
                  href={`https://wa.me/377999900000?text=${encodeURIComponent("Hello, I'd like to enquire about " + villa.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-black py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition"
                >
                  WhatsApp
                </a>
              </div>

              <p className="mt-6 text-[11px] text-white/40 leading-relaxed">
                By introduction only. Inspections arranged privately and at your
                convenience.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-20 md:py-28 border-t border-white/10 bg-[#0c0c0c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between gap-6 mb-12">
            <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
              Other residences
            </h3>
            <Link
              to="/"
              hash="villas"
              className="text-[11px] tracking-[0.25em] uppercase text-amber-300 hover:translate-x-1 transition-transform"
            >
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((v) => (
              <Link
                key={v.id}
                to="/villas/$id"
                params={{ id: v.id }}
                className="group block overflow-hidden rounded-xl border border-white/10 hover:border-amber-300/30 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={v.cover}
                    alt={v.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-lg">{v.name}</div>
                    <div className="text-xs text-white/50 mt-1">{v.location}</div>
                  </div>
                  <div className="text-amber-300 text-sm">{v.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-amber-300 text-sm tracking-[0.25em] uppercase"
            >
              Close ✕
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p! - 1 + villa.images.length) % villa.images.length);
              }}
              className="absolute left-4 md:left-10 text-white/60 hover:text-amber-300 text-2xl"
            >
              ‹
            </button>
            <motion.img
              key={villa.images[lightbox]}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={villa.images[lightbox]}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightbox((p) => (p! + 1) % villa.images.length);
              }}
              className="absolute right-4 md:right-10 text-white/60 hover:text-amber-300 text-2xl"
            >
              ›
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-[0.3em]">
              {lightbox + 1} / {villa.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SpecItem({ label, value, highlight }: { label: string; value: string | number; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">{label}</div>
      <div className={`mt-2 font-serif text-xl md:text-2xl ${highlight ? "text-amber-300" : "text-white"}`}>{value}</div>
    </div>
  );
}
function MiniStat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="font-serif text-lg">{value}</div>
      <div className="text-[9px] tracking-[0.3em] uppercase text-white/40 mt-1">{label}</div>
    </div>
  );
}
