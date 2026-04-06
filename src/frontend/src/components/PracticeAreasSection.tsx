import { Gavel, Heart, MapPin, Scale } from "lucide-react";
import { motion } from "motion/react";

const practiceAreas = [
  {
    icon: Scale,
    title: "দেওয়ানী মামলা",
    description: "চুক্তি, সম্পত্তি ও ক্ষতিপূরণ সংক্রান্ত দেওয়ানী বিষয়ে বিশেষজ্ঞ পরামর্শ।",
  },
  {
    icon: Gavel,
    title: "ফৌজদারী মামলা",
    description: "অপরাধ সংক্রান্ত মামলায় শক্তিশালী আইনি প্রতিনিধিত্ব ও পরামর্শ।",
  },
  {
    icon: Heart,
    title: "পারিবারিক আইন",
    description: "বিবাহ, তালাক, ভরণপোষণ ও উত্তরাধিকার বিষয়ক পারিবারিক আইনি সেবা।",
  },
  {
    icon: MapPin,
    title: "ভূমি বিরোধ",
    description: "জমি-জমার দলিল, ক্রয়-বিক্রয় ও ভূমি বিরোধ নিষ্পত্তিতে অভিজ্ঞ।",
  },
];

export default function PracticeAreasSection() {
  return (
    <section
      id="practice"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--background))" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            আইনি পরিষেবা
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-3 font-bengali"
            style={{ color: "oklch(var(--navy))" }}
          >
            আইনি দক্ষতা ও সেবাসমূহ
          </h2>
          <p className="text-muted-foreground text-sm font-bengali max-w-xl mx-auto">
            বিভিন্ন আইনি ক্ষেত্রে বিশেষজ্ঞ পরামর্শ ও প্রতিনিধিত্ব প্রদান করা হয়।
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-card rounded-xl p-7 text-center shadow-card hover:shadow-card-hover transition-shadow duration-300 group border border-border/50"
              data-ocid={`practice.item.${i + 1}`}
            >
              {/* Gold icon badge */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
              >
                <area.icon
                  size={28}
                  style={{ color: "oklch(var(--gold))" }}
                  strokeWidth={1.5}
                />
              </div>
              <h3
                className="font-display text-lg font-bold mb-3 font-bengali"
                style={{ color: "oklch(var(--navy))" }}
              >
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-bengali">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
