import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, FileText, Eye } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import goldTradingImg from "@/assets/gold-trading.jpg";

const buySteps = [
  { step: "01", title: "Contact Us", desc: "Reach out with your requirements — quantity, type, and preferred timeline." },
  { step: "02", title: "Get a Quote", desc: "Receive a competitive quote based on current market rates." },
  { step: "03", title: "Verification", desc: "All gold undergoes rigorous purity testing and certification." },
  { step: "04", title: "Secure Delivery", desc: "Your gold is securely packaged and delivered with full documentation." },
];

const sellSteps = [
  { step: "01", title: "Submit Details", desc: "Provide information about the gold you wish to sell." },
  { step: "02", title: "Valuation", desc: "Our experts assess your gold with transparent, market-aligned valuation." },
  { step: "03", title: "Agreement", desc: "Review and accept our fair offer with clear terms." },
  { step: "04", title: "Payment", desc: "Receive prompt, secure payment once completed." },
];

const BuySell = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      image={goldTradingImg}
      subtitle="Buy & Sell Gold"
      title={<><span className="gold-text-gradient">Buy</span> or <span className="gold-text-gradient">Sell</span> Gold with Confidence</>}
      description="Whether you're looking to purchase premium gold or sell your holdings, our process ensures a safe and transparent experience."
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Buying Process */}
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">How to <span className="gold-text-gradient">Buy Gold</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {buySteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <span className="font-serif text-3xl font-bold gold-text-gradient">{s.step}</span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Selling Process */}
        <div className="mb-20">
          <ScrollReveal>
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">How to <span className="gold-text-gradient">Sell Gold</span></h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sellSteps.map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 0.1}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <span className="font-serif text-3xl font-bold gold-text-gradient">{s.step}</span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mt-3 mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Trust Guarantees */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Full Documentation", desc: "Every transaction comes with complete paperwork, certificates, and receipts." },
              { icon: Eye, title: "Total Transparency", desc: "No hidden fees. Pricing based on real-time market rates with clear margins." },
              { icon: Shield, title: "100% Safety", desc: "Insured logistics, verified sourcing, and bank-grade security." },
            ].map((item) => (
              <Card key={item.title} className="bg-card border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gold-gradient text-primary-foreground font-semibold hover:opacity-90 px-8">
              <Link to="/contact">Request a Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export default BuySell;
