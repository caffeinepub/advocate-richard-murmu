import { Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: "oklch(var(--background))" }}
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
            যোগাযোগ
          </div>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-3 font-bengali"
            style={{ color: "oklch(var(--navy))" }}
          >
            যোগাযোগ করুন
          </h2>
          <p className="text-muted-foreground text-sm font-bengali">
            যেকোনো আইনি পরামর্শের জন্য সরাসরি যোগাযোগ করুন।
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Phone */}
            <a
              href="tel:+8801717645252"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border/50 group"
              data-ocid="contact.link"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
              >
                <Phone
                  size={20}
                  style={{ color: "oklch(var(--gold))" }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-0.5 font-bengali"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  মোবাইল
                </p>
                <p
                  className="text-base font-semibold transition-colors"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  +৮৮০ ১৭১৭-৬৪৫২৫২
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8801888778400"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border/50 group"
              data-ocid="contact.link"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
              >
                <MessageCircle
                  size={20}
                  style={{ color: "oklch(var(--gold))" }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-0.5 font-bengali"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  হোয়াটসঅ্যাপ
                </p>
                <p
                  className="text-base font-semibold transition-colors"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  +৮৮০ ১৮৮৮-৭৭৮৪০০
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rrichardmurmur@gmail.com"
              className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-shadow border border-border/50 group"
              data-ocid="contact.link"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
              >
                <Mail
                  size={20}
                  style={{ color: "oklch(var(--gold))" }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wide mb-0.5 font-bengali"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  ইমেইল
                </p>
                <p
                  className="text-base font-semibold transition-colors"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  rrichardmurmur@gmail.com
                </p>
              </div>
            </a>
          </motion.div>

          {/* Right: Addresses */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Court Chamber */}
            <div
              className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              data-ocid="contact.card"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
                >
                  <Building2
                    size={20}
                    style={{ color: "oklch(var(--gold))" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1 font-bengali"
                    style={{ color: "oklch(var(--gold-hover))" }}
                  >
                    কোর্ট চেম্বার
                  </p>
                  <p
                    className="text-sm font-semibold mb-1 font-bengali"
                    style={{ color: "oklch(var(--navy))" }}
                  >
                    দিনাজপুর আইনজীবি সমিতি
                  </p>
                  <p className="text-sm text-muted-foreground font-bengali leading-relaxed">
                    নতুন ভবন ২য় তলা, ৫নং টেবিল,
                    <br />
                    সদর, দিনাজপুর।
                  </p>
                </div>
              </div>
            </div>

            {/* Personal Chamber */}
            <div
              className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              data-ocid="contact.card"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "oklch(var(--gold) / 0.12)" }}
                >
                  <MapPin
                    size={20}
                    style={{ color: "oklch(var(--gold))" }}
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wide mb-1 font-bengali"
                    style={{ color: "oklch(var(--gold-hover))" }}
                  >
                    ব্যক্তিগত চেম্বার
                  </p>
                  <p className="text-sm text-muted-foreground font-bengali leading-relaxed">
                    বালুবাড়ী পানির ট্যাংক মসজিদের
                    <br />
                    দক্ষিণ পার্শ্বে গলিতে,
                    <br />
                    সদর, দিনাজপুর।
                  </p>
                </div>
              </div>
            </div>

            {/* Highlighted CTA */}
            <div
              className="rounded-xl p-6 text-center"
              style={{ backgroundColor: "oklch(var(--navy))" }}
            >
              <p className="text-white/80 text-sm font-bengali mb-4">
                আইনি সমস্যায় দেরি না করে আজই পরামর্শ নিন
              </p>
              <a
                href="https://wa.me/8801888778400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 hover:scale-105 font-bengali"
                style={{
                  backgroundColor: "oklch(var(--gold))",
                  color: "oklch(var(--navy-deep))",
                }}
                data-ocid="contact.primary_button"
              >
                <MessageCircle size={16} />
                হোয়াটসঅ্যাপে বার্তা পাঠান
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
