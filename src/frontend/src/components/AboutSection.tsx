import { Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(0.965 0.005 240)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 font-bengali"
            style={{
              backgroundColor: "oklch(var(--gold) / 0.12)",
              color: "oklch(var(--gold-hover))",
            }}
          >
            পরিচিতি
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide font-bengali"
            style={{ color: "oklch(var(--navy))" }}
          >
            আইনজীবী সম্পর্কে
          </h2>
        </motion.div>

        {/* Card */}
        <motion.div
          className="bg-card rounded-2xl shadow-card overflow-hidden"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Portrait */}
            <div
              className="lg:w-72 flex-shrink-0 flex items-stretch justify-center overflow-hidden"
              style={{ backgroundColor: "oklch(var(--navy))" }}
            >
              <img
                src="/assets/richard-murmu-profile.png"
                alt="অ্যাডভোকেট রিচার্ড মুর্মু"
                className="w-full lg:w-72 h-64 lg:h-auto object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-8 lg:p-12">
              {/* Name block */}
              <div className="mb-8">
                <h3
                  className="font-display text-2xl font-bold mb-1 font-bengali"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  অ্যাডভোকেট রিচার্ড মুর্মু
                </h3>
                <p
                  className="text-base font-semibold mb-2 font-bengali"
                  style={{ color: "oklch(var(--gold-hover))" }}
                >
                  জজ কোর্ট, দিনাজপুর
                </p>
                <div
                  className="w-12 h-0.5 mb-4"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
                <p className="text-muted-foreground text-sm leading-relaxed font-bengali max-w-lg">
                  রাজশাহী বিশ্ববিদ্যালয় থেকে এল.এল.বি (অনার্স) ও এল.এল.এম ডিগ্রি অর্জনের
                  পর দিনাজপুর জজ কোর্টে আইন পেশায় নিয়োজিত আছেন। দীর্ঘ অভিজ্ঞতার মাধ্যমে
                  তিনি বহু জটিল মামলা সফলভাবে পরিচালনা করেছেন।
                </p>
              </div>

              {/* Qualifications */}
              <div className="grid sm:grid-cols-3 gap-5">
                <div className="flex gap-3 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
                  >
                    <GraduationCap
                      size={18}
                      style={{ color: "oklch(var(--gold))" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1 font-bengali"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      শিক্ষাগত যোগ্যতা
                    </p>
                    <p className="text-sm text-muted-foreground font-bengali leading-snug">
                      এল.এল.বি (অনার্স), এল.এল.এম
                    </p>
                    <p className="text-xs text-muted-foreground font-bengali">
                      রাজশাহী বিশ্ববিদ্যালয়
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
                  >
                    <Award
                      size={18}
                      style={{ color: "oklch(var(--gold))" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1 font-bengali"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      আদালত
                    </p>
                    <p className="text-sm text-muted-foreground font-bengali leading-snug">
                      জজ কোর্ট, দিনাজপুর
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
                  >
                    <BookOpen
                      size={18}
                      style={{ color: "oklch(var(--gold))" }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wide mb-1 font-bengali"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      বিশেষত্ব
                    </p>
                    <p className="text-sm text-muted-foreground font-bengali leading-snug">
                      দেওয়ানী, ফৌজদারী, পারিবারিক ও ভূমি আইন
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
