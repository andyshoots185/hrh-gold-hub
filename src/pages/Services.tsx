import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Gem, TrendingUp, BarChart3, Truck, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: DollarSign,
    title: "Gold Buying",
    desc: "We purchase gold from verified sources at competitive market rates. Our transparent valuation process ensures you get the best price for your gold.",
    benefits: ["Fair market-rate pricing", "Instant valuation", "Secure handling", "All gold types accepted"],
  },
  {
    icon: Gem,
    title: "Gold Selling",
    desc: "Access premium quality gold products with certified purity. We offer a wide range of gold bars and products for individual and institutional buyers.",
    benefits: ["Certified purity guarantee", "Competitive pricing", "Flexible quantities", "Documentation provided"],
  },
  {
    icon: TrendingUp,
    title: "Gold Trading",
    desc: "Trade gold confidently with our expert market analysis and guidance. We help you time your trades for maximum returns in the global gold market.",
    benefits: ["Expert market analysis", "Real-time pricing", "Risk management", "Professional guidance"],
  },
  {
    icon: BarChart3,
    title: "Investment Consulting",
    desc: "Our experienced consultants provide personalized gold investment strategies designed for long-term wealth growth and portfolio diversification.",
    benefits: ["Personalized strategies", "Portfolio diversification", "Long-term planning", "Regular market updates"],
  },
  {
    icon: Truck,
    title: "Secure Transactions",
    desc: "End-to-end secure logistics and transaction handling. From verification to delivery, every step is protected with bank-grade security protocols.",
    benefits: ["Insured transport", "Verified documentation", "Chain of custody tracking", "Confidential handling"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Services</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Comprehensive <span className="gold-text-gradient">Gold Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From buying and selling to trading and consulting, we provide end-to-end gold services tailored to your needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.1}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8 md:p-10">
                  <div className="grid md:grid-cols-[1fr,auto] gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                          <s.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-foreground">{s.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {s.benefits.map((b) => (
                          <div key={b} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{b}</span>
                          </div>
                        ))}
                      </div>
                      <Button asChild className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTABanner />
    <Footer />
  </div>
);

export default Services;
