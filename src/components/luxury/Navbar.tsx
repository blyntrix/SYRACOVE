import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

const nav = [
  { label: "Villas", href: "/#villas" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-full border border-amber-300/40 flex items-center justify-center text-amber-300 font-serif text-lg group-hover:border-amber-300 transition">
            S
          </span>
          <div className="leading-none">
            <div className="font-serif text-white text-lg tracking-[0.2em]">SYRACOVE</div>
            <div className="text-[10px] text-amber-300/80 tracking-[0.3em] mt-0.5">ESCAPE</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[13px] tracking-[0.18em] uppercase text-white/70 hover:text-amber-300 transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-black bg-amber-300 hover:bg-amber-200 px-5 py-2.5 rounded-full transition"
        >
          Book Consultation
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden text-white/80 p-2"
        >
          <div className="space-y-1.5">
            <span className={`block h-px w-6 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-white/80"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center text-[12px] tracking-[0.2em] uppercase text-black bg-amber-300 px-5 py-3 rounded-full"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
