import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "হোম", href: "#home" },
  { label: "পরিচিতি", href: "#about" },
  { label: "আইনি সেবা", href: "#practice" },
  { label: "মামলা", href: "#cases" },
  { label: "সহায়ক লিংক", href: "#links" },
  { label: "যোগাযোগ", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand block */}
          <button
            type="button"
            className="flex items-center gap-3 cursor-pointer bg-transparent border-0 p-0"
            onClick={() => handleNavClick("#home")}
            data-ocid="nav.link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-display text-base font-bold flex-shrink-0"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy-deep))",
              }}
            >
              রম
            </div>
            <div>
              <div className="text-white font-display text-sm md:text-base font-semibold leading-tight font-bengali">
                অ্যাডভোকেট রিচার্ড মুর্মু
              </div>
              <div className="text-white/60 text-xs font-bengali leading-tight">
                জজ কোর্ট, দিনাজপুর
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-4 lg:gap-6"
            aria-label="মূল নেভিগেশন"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-gold transition-colors text-xs font-semibold tracking-widest uppercase cursor-pointer font-bengali"
                data-ocid="nav.link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-white/80 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={menuOpen}
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-2 py-3 text-white/80 hover:text-gold text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors font-bengali"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
