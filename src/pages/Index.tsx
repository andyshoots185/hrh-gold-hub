import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, DollarSign, Users, Eye, Award, TrendingUp, BarChart3, Gem, Truck, HandshakeIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: DollarSign, title: "Gold Buying", desc: "We purchase gold at competitive market rates with transparent valuation processes." },
  { icon: Gem, title: "Gold Selling", desc: "Access premium quality gold products with certified purity guarantees." },
  { icon: TrendingUp, title: "Gold Trading", desc: "Trade gold confidently with expert market analysis and guidance." },
  { icon: BarChart3, title: "Investment Consulting", desc: "Personalized gold investment strategies for long-term wealth growth." },
  { icon: Truck, title: "Secure Transactions", desc: "End-to-end secure logistics and transaction handling for peace of mind." },
];

const whyUs = [
  { icon: Shield, title: "Secure Transactions", desc: "Bank-grade security for every trade" },
  { icon: DollarSign, title: "Fair Pricing", desc: "Competitive rates aligned with global markets" },
  { icon: Users, title: "Trusted Suppliers", desc: "Verified network of reputable sources" },
  { icon: Eye, title: "Full Transparency", desc: "Clear documentation at every step" },
  { icon: Award, title: "Professional Team", desc: "Experienced experts in gold trading" },
];

const testimonials = [
  { name: "James Okello", role: "Gold Investor", text: "HRH Gold Invest made my first gold purchase seamless. Their professionalism and transparency gave me complete confidence." },
  { name: "Sarah Namukasa", role: "Business Owner", text: "I've been trading gold with HRH for over a year. Their fair pricing and secure handling are unmatched in Uganda." },
  { name: "David Mukiibi", role: "International Trader", text: "Outstanding service! The team's expertise and commitment to transparency set them apart from any other gold dealer." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">Uganda's Premier Gold Trading Company</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Trusted Gold Trading &{" "}
                <span className="gold-text-gradient">Investment Partner</span> in Uganda
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Buy, sell, and trade gold with confidence. HRH Gold Invest delivers secure transactions, fair pricing, and professional service you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gold-gradient text-primary-foreground font-semibold px-8 hover:opacity-90">
                  <Link to="/buy-sell">Buy Gold</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold px-8">
                  <Link to="/buy-sell">Sell Gold</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground font-semibold px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">About Us</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Built on Trust, Driven by <span className="gold-text-gradient">Integrity</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  HRH Gold Invest is Uganda's leading gold trading company, built on a foundation of trust, transparency, and professionalism. We connect buyers and sellers across the region with fair pricing and secure transaction processes.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our experienced team ensures every transaction meets international standards, making us the go-to partner for gold investment in East Africa.
                </p>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "500+", label: "Clients Served" },
                    { value: "99%", label: "Satisfaction Rate" },
                    { value: "24/7", label: "Support Available" },
                    { value: "100%", label: "Secure Transactions" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="font-serif text-3xl font-bold gold-text-gradient">{s.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">What We Offer</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Our <span className="gold-text-gradient">Services</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                      <s.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Our Advantages</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Why Choose <span className="gold-text-gradient">HRH Gold Invest</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Investment Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Gold Investment</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Gold Is the <span className="gold-text-gradient">Smartest Investment</span>
                </h2>
                <ul className="space-y-4">
                  {[
                    "Gold has been a store of value for thousands of years",
                    "Hedge against inflation and currency devaluation",
                    "Portfolio diversification and risk management",
                    "High liquidity — easily converted to cash worldwide",
                    "Consistent long-term growth and stability",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <HandshakeIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                  <Link to="/investment">Start Investing Today</Link>
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Card className="bg-card border-border p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Gold's Enduring Value</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unlike paper currencies, gold maintains its purchasing power over decades. Central banks worldwide hold gold reserves as a financial safety net, and savvy investors include gold in their portfolios for stability.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  At HRH Gold Invest, we help you navigate the gold market with expert guidance, ensuring your investment is secure, transparent, and positioned for long-term growth.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Testimonials</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">What Our <span className="gold-text-gradient">Clients Say</span></h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <Card className="bg-card border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-primary text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                    <div>
                      <p className="font-serif font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />

      <Footer />
    </div>
  );
};

export default Index;
