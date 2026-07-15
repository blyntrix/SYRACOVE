import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { villas } from "@/lib/villas";
import { Navbar } from "@/components/luxury/Navbar";
import { Footer } from "@/components/luxury/Footer";
import gallery1 from "../assets/gallery/gallery1.jpg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpg";
import gallery6 from "../assets/gallery/gallery6.jpg";
import gallery7 from "../assets/gallery/gallery7.jpg";
import gallery8 from "../assets/gallery/gallery8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syracove Escape — World-class villas & private residences" },
      {
        name: "description",
        content:
          "A curated atelier of the world's most exceptional villas. Private residences in Dubai, the Côte d'Azur, the Alps and beyond.",
      },
      { property: "og:title", content: "Syracove Escape — Discover Luxury Living" },
      {
        property: "og:description",
        content: "A global atelier for the world's most considered private residences.",
      },
    ],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
} as const;

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative ${className}`}>
      {children}
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-amber-300/90 text-[11px] tracking-[0.4em] uppercase">
      <span className="h-px w-10 bg-amber-300/50" />
      {children}
    </div>
  );
}

function Home() {
  const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased selection:bg-amber-300/30">
      <Navbar />

      {/* HERO */}
      <Section className="min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={gallery1}
            alt="Luxury villa with infinity pool overlooking the sea"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-28 md:pb-40 pt-32 w-full">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Eyebrow>Private Residences · Worldwide</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-serif text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] tracking-tight max-w-4xl"
          >
            Discover <span className="italic text-amber-300/95">Luxury</span> Living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-8 max-w-xl text-white/70 text-base md:text-lg leading-relaxed"
          >
            A private atelier sourcing the world's most exceptional villas, penthouses
            and estates for a discerning clientele who collect more than property —
            they collect place, light and time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#villas"
              className="group inline-flex items-center gap-3 bg-amber-300 hover:bg-amber-200 text-black px-8 py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition"
            >
              Explore Villas
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-white/25 hover:border-amber-300 hover:text-amber-300 text-white px-8 py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition backdrop-blur-sm"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>

        <motion.a
          href="#villas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-300/70 text-[10px] tracking-[0.4em] uppercase flex flex-col items-center gap-3 z-10"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-10 w-px bg-amber-300/50"
          />
        </motion.a>
      </Section>

      {/* FEATURED VILLAS */}
      <Section id="villas" className="py-28 md:py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <Eyebrow>The Collection</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tight max-w-2xl">
                Eight residences,<br />
                <span className="italic text-amber-300/95">infinitely rare.</span>
              </h2>
            </div>
            <p className="text-white/55 max-w-md text-sm md:text-base leading-relaxed">
              Each home in our current collection has been hand-selected by our atelier
              of architects, designers and private advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {villas.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/villas/$id"
                  params={{ id: v.id }}
                  className="group block relative overflow-hidden rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-amber-300/30 transition-colors"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={v.cover}
                      alt={v.name}
                      className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                    <div className="absolute top-5 left-5 backdrop-blur-md bg-white/10 border border-white/15 text-white/90 text-[10px] tracking-[0.3em] uppercase px-3 py-1.5 rounded-full">
                      {v.country}
                    </div>
                    <div className="absolute top-5 right-5 backdrop-blur-md bg-amber-300/90 text-black text-[11px] tracking-[0.2em] uppercase px-3 py-1.5 rounded-full font-medium">
                      {v.price}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <h3 className="font-serif text-2xl md:text-3xl tracking-tight">
                        {v.name}
                      </h3>
                      <p className="mt-1.5 text-white/60 text-sm">{v.location}</p>
                    </div>
                  </div>

                  <div className="p-7 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-white/70 text-xs tracking-wide">
                      <Stat label="Beds" value={v.bedrooms} />
                      <Divider />
                      <Stat label="Baths" value={v.bathrooms} />
                      <Divider />
                      <Stat label="Area" value={v.size} />
                    </div>
                    <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-amber-300 group-hover:translate-x-1 transition-transform">
                      View <span>→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" className="py-28 md:py-40 bg-[#f5f2ec] text-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={gallery2}
              alt="Architectural detail of a luxury villa"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-3 text-[#8a7338] text-[11px] tracking-[0.4em] uppercase">
              <span className="h-px w-10 bg-[#8a7338]/50" />
              The Atelier
            </div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tight leading-[1.05]">
              A quiet authority<br />in private property.
            </h2>
            <p className="mt-8 text-[#3b3b3b] text-base md:text-lg leading-relaxed">
              For more than 5 years, Syracove Escape has guided collectors, founders
              and dynastic families through their most personal acquisitions. We work
              by introduction only — sourcing residences that are seldom listed, in
              places that are seldom seen.
            </p>
            <p className="mt-6 text-[#3b3b3b] leading-relaxed">
              Beyond brokerage, we curate architecture, design, restoration and
              residency. The result is a portfolio of homes valued not by square
              footage, but by significance.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["5+", "Years"],
                ["$1.5M", "Closed"],
                ["6", "Counties"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-serif text-3xl md:text-4xl">{n}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#8a7338] mt-2">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* WHY US */}
      <Section id="why" className="py-28 md:py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center"><Eyebrow>Why Syracove</Eyebrow></div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tight">
              The standard, refined.
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { t: "Luxury Properties", d: "Hand-selected residences across five continents." },
              { t: "Prime Locations", d: "Address-defining streets, coasts and skylines." },
              { t: "Trusted Advisors", d: "Senior partners. Long-form relationships." },
              { t: "Secure Investments", d: "Structured holdings, complete discretion." },
              { t: "Lifestyle Support", d: "Architecture, concierge, residency, staffing." },
            ].map((f, i) => (
              <motion.div
                key={f.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="group rounded-2xl border border-white/10 backdrop-blur-sm bg-white/[0.02] p-8 hover:border-amber-300/40 hover:bg-white/[0.04] transition-all hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-full border border-amber-300/50 flex items-center justify-center text-amber-300 font-serif">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-serif text-xl">{f.t}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{f.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY */}
<Section id="gallery" className="py-28 md:py-40 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto px-6 lg:px-12">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
      <div>
        <Eyebrow>Visual Index</Eyebrow>
        <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tight">
          Cinematic, by nature.
        </h2>
      </div>

      <p className="text-white/55 max-w-sm">
        A curated visual journey through Syracove Escape’s private villa collection.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[220px]">
      {galleryImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
          className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black ${
            i === 0 || i === 5
              ? "md:col-span-2 md:row-span-2"
              : ""
          }`}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition duration-500"></div>

          {/* Glow */}
          <div className="absolute inset-0 bg-amber-300/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10"></div>

          {/* Image */}
          <img
            src={img}
            alt={`Luxury villa gallery ${i + 1}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-110 group-hover:rotate-[1deg]"
          />

          {/* Bottom Label */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
            <div className="text-[10px] tracking-[0.35em] uppercase text-amber-300">
              Syracove Escape
            </div>

            <div className="mt-1 font-serif text-lg md:text-xl text-white">
              Luxury Villa Experience
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</Section>

      {/* TESTIMONIALS */}
      <Section className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="text-center"><div className="flex justify-center"><Eyebrow>In Confidence</Eyebrow></div>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl tracking-tight">
              Spoken softly.
            </h2>
          </div>
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { q: "They understood what we wanted before we did. The home found us.", n: "Caroline A.", r: "Private investor, Geneva" },
              { q: "Discretion of the highest order. Every detail considered.", n: "Brandon O.", r: "Family office principal, Dubai" },
              { q: "Far more than brokers — they are quiet curators of life.", n: "Lennox W.", r: "Founder, New York" },
            ].map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8"
              >
                <div className="text-amber-300 font-serif text-4xl leading-none">"</div>
                <p className="mt-4 text-white/75 leading-relaxed">{t.q}</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="font-serif">{t.n}</div>
                  <div className="text-xs text-white/40 mt-1">{t.r}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="py-28 md:py-40 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Begin a Conversation</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl tracking-tight leading-[1.05]">
              A private introduction,<br />
              <span className="italic text-amber-300/95">on your terms.</span>
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed max-w-md">
              Share a few details and a senior partner will respond personally within
              one business day.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <Contact icon="✆" label="Direct" value="+254 745 724 206" />
              <Contact icon="✉" label="Email" value="syracove@gmail.com" />
              <Contact icon="◉" label="Office" value="Nairobi, Kenya" />
              <a
                href="https://wa.me/254745724206"
                className="inline-flex items-center gap-3 mt-4 bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] px-5 py-3 rounded-full text-[12px] tracking-[0.2em] uppercase hover:bg-[#25D366] hover:text-black transition"
              >
                WhatsApp Concierge
              </a>
            </div>

            <div className="mt-12 rounded-xl overflow-hidden border border-white/10 aspect-[16/9]">
              <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl transition duration-500 hover:border-amber-400">

  {/* Glow Effect */}
  <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition duration-500 z-10 pointer-events-none"></div>

  {/* Map */}
  <iframe
    title="Diani Beach Kenya Location"
    src="https://www.google.com/maps?q=Diani+Beach+Kenya&output=embed"
    className="w-full h-[500px] grayscale group-hover:grayscale-0 transition duration-700 scale-100 group-hover:scale-105"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    allowFullScreen=""
  ></iframe>

</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — a partner will be in touch shortly.");
            }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10 space-y-6 self-start"
          >
            <Field label="Full Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone (optional)" name="phone" />
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">
                Message
              </label>
              <textarea
                rows={5}
                required
                className="mt-3 w-full bg-transparent border-b border-white/15 focus:border-amber-300 outline-none py-3 text-white placeholder:text-white/30 resize-none transition"
                placeholder="Tell us a little about what you are looking for…"
              />
            </div>
            <button className="w-full bg-amber-300 hover:bg-amber-200 text-black py-4 rounded-full text-[12px] tracking-[0.25em] uppercase transition">
              Send Enquiry
            </button>
          </form>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <div className="text-white font-serif text-base">{value}</div>
      <div className="text-[10px] tracking-[0.25em] uppercase text-white/40 mt-0.5">{label}</div>
    </div>
  );
}
function Divider() {
  return <span className="h-8 w-px bg-white/10" />;
}
function Contact({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-9 h-9 rounded-full border border-amber-300/40 flex items-center justify-center text-amber-300 text-sm">{icon}</span>
      <div>
        <div className="text-[10px] tracking-[0.3em] uppercase text-white/40">{label}</div>
        <div className="mt-1 text-white/85">{value}</div>
      </div>
    </div>
  );
}
function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.3em] uppercase text-white/50">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-3 w-full bg-transparent border-b border-white/15 focus:border-amber-300 outline-none py-3 text-white placeholder:text-white/30 transition"
      />
    </div>
  );
}
