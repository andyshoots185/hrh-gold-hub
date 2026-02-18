import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, Globe, FileCheck, Lock } from "lucide-react";

const certs = [
  {
    icon: Shield,
    title: "KYC/AML Compliant",
    description: "Full Know Your Customer and Anti-Money Laundering compliance for every transaction",
  },
  {
    icon: Award,
    title: "Certified Purity",
    description: "XRF technology testing — every gram certified to international purity standards",
  },
  {
    icon: FileCheck,
    title: "OECD Due Diligence",
    description: "Responsible minerals sourcing following OECD conflict-free guidelines",
  },
  {
    icon: Globe,
    title: "LBMA Price Aligned",
    description: "Pricing benchmarked against the London Bullion Market Association spot rate",
  },
  {
    icon: Lock,
    title: "Insured & Secured",
    description: "All gold holdings and shipments are fully insured with licensed logistics partners",
  },
  {
    icon: CheckCircle,
    title: "Ugandan Licensed",
    description: "Fully licensed and regulated under Uganda's minerals trading regulatory framework",
  },
];

const CertificationsBadges = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Compliance & Trust</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          Your Gold is in <span className="gold-text-gradient">Safe Hands</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          We meet the highest international standards for gold trading — so you can transact with complete confidence.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors duration-300"
          >
            <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shrink-0">
              <cert.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-serif text-base font-semibold text-foreground mb-1">{cert.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 pt-10 border-t border-border flex flex-wrap items-center justify-center gap-8 text-center"
      >
        {[
          { label: "Conflict-Free Gold", value: "100%" },
          { label: "Transaction Success Rate", value: "99.8%" },
          { label: "Purity Accuracy", value: "99.99%" },
          { label: "Client Data Protected", value: "256-bit" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span className="font-serif text-2xl font-bold gold-text-gradient">{item.value}</span>
            <span className="text-xs text-muted-foreground mt-1">{item.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CertificationsBadges;
