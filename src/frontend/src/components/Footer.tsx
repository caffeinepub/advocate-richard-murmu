import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(var(--navy))" }}>
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Contact Info */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5 font-bengali"
              style={{ color: "oklch(var(--gold))" }}
            >
              যোগাযোগ
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+8801717645252"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} className="flex-shrink-0" />
                +৮৮০ ১৭১৭-৬৪৫২৫২
              </a>
              <a
                href="https://wa.me/8801888778400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-bengali"
              >
                <MessageCircle size={14} className="flex-shrink-0" />
                +৮৮০ ১৮৮৮-৭৭৮৪০০ (হোয়াটসঅ্যাপ)
              </a>
              <a
                href="mailto:rrichardmurmur@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Mail size={14} className="flex-shrink-0" />
                rrichardmurmur@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Office Addresses */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5 font-bengali"
              style={{ color: "oklch(var(--gold))" }}
            >
              অফিসের ঠিকানা
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(var(--gold) / 0.7)" }}
                />
                <div>
                  <p className="text-white/90 text-xs font-semibold mb-0.5 font-bengali">
                    কোর্ট চেম্বার
                  </p>
                  <p className="text-white/60 text-xs font-bengali leading-relaxed">
                    দিনাজপুর আইনজীবি সমিতি, নতুন ভবন ২য় তলা, ৫নং টেবিল, সদর, দিনাজপুর।
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  size={14}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "oklch(var(--gold) / 0.7)" }}
                />
                <div>
                  <p className="text-white/90 text-xs font-semibold mb-0.5 font-bengali">
                    ব্যক্তিগত চেম্বার
                  </p>
                  <p className="text-white/60 text-xs font-bengali leading-relaxed">
                    বালুবাড়ী পানির ট্যাংক মসজিদের দক্ষিণ পার্শ্বে গলিতে, সদর, দিনাজপুর।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-5 font-bengali"
              style={{ color: "oklch(var(--gold))" }}
            >
              দ্রুত লিংক
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "হোম", href: "#home" },
                { label: "পরিচিতি", href: "#about" },
                { label: "আইনি সেবা", href: "#practice" },
                { label: "মামলার তালিকা", href: "#cases" },
                { label: "সহায়ক লিংক", href: "#links" },
                { label: "যোগাযোগ", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(link.href);
                  }}
                  className="block text-white/60 hover:text-white text-sm transition-colors cursor-pointer font-bengali"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid oklch(1 0 0 / 0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-bengali">
            © {currentYear} অ্যাডভোকেট রিচার্ড মুর্মু। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-white/40 text-xs">
            তৈরি হয়েছে{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
            >
              caffeine.ai
            </a>{" "}
            দিয়ে
          </p>
        </div>
      </div>
    </footer>
  );
}
