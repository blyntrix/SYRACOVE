export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full border border-amber-300/40 flex items-center justify-center text-amber-300 font-serif">
              S
            </span>
            <div className="leading-none">
              <div className="font-serif text-white text-lg tracking-[0.2em]">SYRACOVE</div>
              <div className="text-[10px] text-amber-300/80 tracking-[0.3em] mt-0.5">ESCAPE</div>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-white/50">
            A global atelier for private residences, sourcing and selling the world's
            most considered homes since 2020.
          </p>
        </div>

        <div>
          <h4 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/#villas" className="hover:text-amber-300">Villas</a></li>
            <li><a href="/#about" className="hover:text-amber-300">About</a></li>
            <li><a href="/#why" className="hover:text-amber-300">Why Syracove</a></li>
            <li><a href="/#gallery" className="hover:text-amber-300">Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-5">Offices</h4>
          <ul className="space-y-3 text-sm">
            <li>Nairobi</li>
            <li>Diani</li>
            
          </ul>
        </div>

        <div>
          <h4 className="text-amber-300 text-xs tracking-[0.3em] uppercase mb-5">Follow</h4>
          <ul className="space-y-3 text-sm">
            <li>
  <a
    className="hover:text-amber-300"
    href="https://www.instagram.com/syracove_escape"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>
</li>

<li>
  <a
    className="hover:text-amber-300"
    href="https://wa.me/254745724206"
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>
</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} Syracove Escape. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Private · Discreet · Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
