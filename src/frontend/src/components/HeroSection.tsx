import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-stretch pt-16 md:pt-20 overflow-hidden"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      <div className="w-full flex flex-col md:flex-row">
        {/* Portrait side */}
        <div className="relative md:w-[45%] flex-shrink-0 order-2 md:order-1">
          <div
            className="h-72 md:h-full min-h-[300px] relative overflow-hidden"
            style={{ backgroundColor: "oklch(0.22 0.055 235)" }}
          >
            {/* Subtle overlay gradient */}
            <div
              className="absolute inset-0 z-10"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, oklch(var(--navy) / 0.3) 100%)",
              }}
            />
            <img
              src="/assets/richard-murmu-profile.png"
              alt="অ্যাডভোকেট রিচার্ড মুর্মু"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Gold bar accent on the left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1.5"
              style={{ backgroundColor: "oklch(var(--gold))" }}
            />
          </div>
        </div>

        {/* Text side */}
        <div className="md:w-[55%] flex items-center order-1 md:order-2">
          <div className="px-6 sm:px-10 lg:px-16 py-12 md:py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Gold label */}
              <div
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5 font-bengali"
                style={{
                  backgroundColor: "oklch(var(--gold) / 0.15)",
                  color: "oklch(var(--gold))",
                  border: "1px solid oklch(var(--gold) / 0.35)",
                }}
              >
                জজ কোর্ট, দিনাজপুর
              </div>

              {/* Main headline */}
              <h1 className="text-white font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 font-bengali">
                আপনার বিশ্বস্ত
                <br />
                <span style={{ color: "oklch(var(--gold))" }}>
                  আইনি পরামর্শদাতা
                </span>
              </h1>

              {/* Name */}
              <h2 className="text-white/90 font-display text-xl sm:text-2xl font-semibold mb-1 font-bengali">
                অ্যাডভোকেট রিচার্ড মুর্মু
              </h2>
              <p className="text-white/60 text-sm font-bengali mb-6">
                এল.এল.বি (অনার্স), এল.এল.এম — রাজশাহী বিশ্ববিদ্যালয়
              </p>

              {/* Separator */}
              <div
                className="w-16 h-0.5 mb-6"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />

              {/* Description */}
              <p className="text-white/75 text-sm sm:text-base leading-relaxed max-w-md mb-8 font-bengali">
                অভিজ্ঞ আইনজীবী হিসেবে দেওয়ানী, ফৌজদারী, পারিবারিক ও ভূমি বিষয়ক মামলায়
                দক্ষতার সাথে আইনি সেবা প্রদান করে আসছি। আপনার আইনি সমস্যার সমাধানে আমি সর্বদা
                প্রস্তুত।
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/8801888778400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95 font-bengali"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "oklch(var(--navy-deep))",
                  }}
                  data-ocid="hero.primary_button"
                >
                  <MessageCircle size={16} />
                  পরামর্শ নিন
                </a>
                <button
                  type="button"
                  onClick={() => handleScroll("#contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border border-white/30 text-white hover:border-gold hover:text-gold transition-all duration-200 font-bengali"
                  data-ocid="hero.secondary_button"
                >
                  <PhoneCall size={16} />
                  যোগাযোগ করুন
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="presentation"
        >
          <title>সজ্জামূলক ঢেউ</title>
          <path
            d="M0 40H1440V20C1200 40 960 0 720 20C480 40 240 0 0 20V40Z"
            fill="oklch(0.97 0.005 240)"
          />
        </svg>
      </div>
    </section>
  );
}
