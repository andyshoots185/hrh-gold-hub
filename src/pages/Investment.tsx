import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, BarChart3, Landmark, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reasons = [
  { icon: TrendingUp, title: "Hedge Against Inflation", desc: "Gold consistently outperforms during economic downturns and inflationary periods." },
  { icon: Shield, title: "Safe Haven Asset", desc: "Globally recognized as one of the safest stores of value across centuries." },
  { icon: BarChart3, title: "Portfolio Diversification", desc: "Reduce overall portfolio risk by adding gold to your investment mix." },
  { icon: Landmark, title: "High Liquidity", desc: "Gold can be easily converted to cash in virtually any market worldwide." },
];

const Investment = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Gold Investment</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Invest in <span className="gold-text-gradient">Gold</span> for a Secure Future
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gold has been humanity's most trusted store of value for millennia. Let HRH Gold Invest guide your journey to financial security through strategic gold investment.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.1}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <r.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-muted-foreground text-sm">{r.desc}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <ScrollReveal>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">How HRH Gold Invest <span className="gold-text-gradient">Helps You</span></h2>
              <ul className="space-y-4">
                {[
                  "Personalized investment plans based on your financial goals",
                  "Access to premium, certified gold products",
                  "Expert guidance on market timing and entry points",
                  "Secure storage and transaction handling",
                  "Regular portfolio reviews and market updates",
                  "Transparent fee structure with no hidden costs",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Card className="bg-card border-border p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Risk Management & Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand that every investment carries risk. That's why HRH Gold Invest employs rigorous risk management strategies, including diversified sourcing, certified purity verification, and insured logistics.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your gold investment is handled with the same level of security and professionalism expected by international institutional investors. Every transaction is documented, tracked, and protected.
              </p>
              <Button asChild className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
                <Link to="/contact">Start Investing Today</Link>
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
    <CTABanner title="Ready to Build Wealth with Gold?" subtitle="Take the first step toward a secure financial future. Our experts are ready to help." primaryLabel="Start Investing" />
    <Footer />
  </div>
);

export default Investment;
