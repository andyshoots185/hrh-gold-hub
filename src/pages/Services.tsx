import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Gem, TrendingUp, BarChart3, Truck, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import goldTradingImg from "@/assets/gold-trading.jpg";
import goldSellingImg from "@/assets/gold-selling.jpg";
import goldSafeImg from "@/assets/goldSafeStorage.jpg";
import miningImg from "@/assets/mining-operations.jpg";
import consultationImg from "@/assets/consultation.jpg";
import testingImg from "@/assets/testing-verification.jpg";

const services = [
  {
    icon: DollarSign,
    title: "Gold Buying",
    image: miningImg,
    desc: "We purchase gold from verified sources at competitive market rates. Our transparent valuation process ensures you get the best price for your gold.",
    details: "Our expert assayers use cutting-edge XRF technology to determine the exact purity of your gold on-site. We provide instant quotes based on real-time international market prices, and payment is processed within 24 hours.",
    benefits: ["Fair market-rate pricing", "Instant on-site valuation", "Secure handling & chain of custody", "All gold types accepted", "Payment within 24 hours", "Certified purity testing"],
  },
  {
    icon: Gem,
    title: "Gold Selling",
    image: goldSellingImg,
    desc: "Access premium quality gold products with certified purity. We offer a wide range of gold bars and products for individual and institutional buyers.",
    details: "Every piece of gold sold by HRH Gold Invest comes with a certificate of authenticity and purity. Our product range includes 1g to 1kg gold bars, gold coins, and custom orders.",
    benefits: ["Certified purity guarantee", "Competitive pricing", "Flexible quantities from 1g", "Full documentation provided", "Conflict-free sourced gold", "Bulk discounts available"],
  },
  {
    icon: TrendingUp,
    title: "Gold Trading",
    image: consultationImg,
    desc: "Trade gold confidently with our expert market analysis and guidance for maximum returns in the global gold market.",
    details: "Our trading desk provides daily market briefs, price alerts, and strategic advice. We facilitate both spot and forward trades, connecting you with a global network.",
    benefits: ["Expert market analysis", "Real-time pricing feeds", "Risk management strategies", "Professional guidance", "Global buyer/seller network", "Daily market intelligence"],
  },
  {
    icon: BarChart3,
    title: "Investment Consulting",
    image: testingImg,
    desc: "Our experienced consultants provide personalized gold investment strategies for long-term wealth growth and portfolio diversification.",
    details: "We create bespoke gold investment portfolios covering market entry strategies, optimal allocation, timing strategies, and exit planning with quarterly reviews.",
    benefits: ["Personalized strategies", "Portfolio diversification plans", "Long-term planning", "Regular market updates", "Quarterly portfolio reviews", "Tax-efficient structuring advice"],
  },
  {
    icon: Truck,
    title: "Secure Transactions & Logistics",
    image: goldSafeImg,
    desc: "End-to-end secure logistics and transaction handling. Every step is protected with bank-grade security protocols and fully insured transport.",
    details: "We partner with leading security firms and insured logistics providers. Our chain-of-custody tracking provides real-time visibility into your shipment.",
    benefits: ["Fully insured transport", "Verified documentation", "Chain of custody tracking", "Confidential handling", "International compliance", "Real-time shipment tracking"],
  },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      image={goldSafeImg}
      subtitle="Our Services"
      title={<>Comprehensive <span className="gold-text-gradient">Gold Services</span></>}
      description="From buying and selling to trading and consulting, we provide end-to-end gold services tailored to your needs."
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.1}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
                      <img src={s.image} alt={s.title} className="w-full h-64 md:h-full object-cover" />
                    </div>
                    <div className={`p-8 md:p-10 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center">
                          <s.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-foreground">{s.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{s.details}</p>
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
