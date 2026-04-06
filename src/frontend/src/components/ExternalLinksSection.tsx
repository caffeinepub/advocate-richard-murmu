import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

const links = [
  {
    title: "মামলার কার্যতালিকা",
    subtitle: "causelist.judiciary.gov.bd",
    description: "আদালতের দৈনন্দিন মামলার তালিকা দেখুন এবং আপনার মামলার তারিখ অনুসন্ধান করুন",
    href: "https://causelist.judiciary.gov.bd/",
    icon: Calendar,
    ocid: "links.item.1",
  },
  {
    title: "বাংলাদেশের আইন",
    subtitle: "bdlaws.minlaw.gov.bd",
    description: "বর্তমান পর্যন্ত বাংলাদেশের সকল আইনের ধারাসমূহ অনুসন্ধান করুন",
    href: "http://bdlaws.minlaw.gov.bd/",
    icon: BookOpen,
    ocid: "links.item.2",
  },
];

export default function ExternalLinksSection() {
  return (
    <section
      id="links"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--navy))" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
              backgroundColor: "oklch(var(--gold) / 0.18)",
              color: "oklch(var(--gold))",
              border: "1px solid oklch(var(--gold) / 0.3)",
            }}
          >
            সহায়ক লিংক
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide font-bengali text-white">
            আইনি তথ্যসম্পদ
          </h2>
          <p className="mt-3 text-white/60 text-sm font-bengali max-w-md mx-auto">
            সরকারি আইনি ওয়েবসাইটে সরাসরি প্রবেশ করুন
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.05)",
                  border: "1.5px solid oklch(var(--gold) / 0.2)",
                }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{
                  borderColor: "oklch(0.71 0.12 75 / 0.6)",
                  backgroundColor: "oklch(1 0 0 / 0.09)",
                }}
                data-ocid={link.ocid}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "oklch(var(--gold) / 0.15)" }}
                >
                  <Icon
                    size={26}
                    style={{ color: "oklch(var(--gold))" }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Text */}
                <h3
                  className="text-xl font-bold font-bengali text-white mb-1 group-hover:text-gold transition-colors"
                  style={{ transition: "color 0.2s" }}
                >
                  {link.title}
                </h3>
                <p
                  className="text-xs font-mono mb-3"
                  style={{ color: "oklch(var(--gold) / 0.7)" }}
                >
                  {link.subtitle}
                </p>
                <p className="text-white/60 text-sm font-bengali leading-relaxed mb-6">
                  {link.description}
                </p>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold font-bengali transition-all duration-200"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "oklch(var(--navy-deep))",
                  }}
                >
                  ওয়েবসাইট দেখুন
                  <ExternalLink size={14} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
