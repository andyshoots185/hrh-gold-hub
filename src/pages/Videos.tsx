import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const videos = [
  {
    title: "Welcome to HRH Gold Invest",
    description: "Discover who we are, our mission, and why we're Uganda's most trusted gold trading company. Watch our company overview and see how we're building wealth through gold.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "3:45",
  },
  {
    title: "How We Buy & Sell Gold",
    description: "A behind-the-scenes look at our gold buying and selling process — from initial valuation and XRF purity testing to secure payment and delivery logistics.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "5:20",
  },
  {
    title: "Gold Mining in Uganda",
    description: "Explore Uganda's rich gold mining heritage. See how artisanal and commercial miners extract gold from the earth, and how HRH Gold Invest supports ethical sourcing.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "7:10",
  },
  {
    title: "Why Invest in Gold in 2026",
    description: "Our expert analysts explain why gold remains the smartest investment in 2026, covering inflation protection, portfolio diversification, and long-term wealth preservation.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "6:30",
  },
  {
    title: "Client Success Stories",
    description: "Hear directly from our satisfied clients about their experience working with HRH Gold Invest — from first-time buyers to seasoned international traders.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "4:55",
  },
];

const Videos = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Video Gallery</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Watch Our <span className="gold-text-gradient">Videos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See HRH Gold Invest in action — from gold operations to client testimonials and market insights.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {videos.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative bg-muted flex items-center justify-center min-h-[250px] md:min-h-[300px]">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                        <p className="text-muted-foreground text-sm">Video coming soon</p>
                        <p className="text-xs text-muted-foreground mt-1">{v.duration}</p>
                      </div>
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Video {i + 1}</span>
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{v.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTABanner title="Want to See More?" subtitle="Contact us for a personal tour of our operations or to schedule a consultation." primaryLabel="Schedule a Visit" />
    <Footer />
  </div>
);

export default Videos;
