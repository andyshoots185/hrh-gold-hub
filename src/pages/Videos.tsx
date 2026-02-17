import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroGold from "@/assets/hero-gold.jpg";

const videos = [
  {
    title: "Welcome to HRH Gold Invest",
    description: "Discover who we are, our mission, and why we're Uganda's most trusted gold trading company.",
    src: "/videos/vidd.mp4",
  },
  {
    title: "How We Buy & Sell Gold",
    description: "A behind-the-scenes look at our gold buying and selling process — from valuation to secure delivery.",
    src: "/videos/viddd.mp4",
  },
  {
    title: "Gold Mining in Uganda",
    description: "Explore Uganda's rich gold mining heritage and how HRH Gold Invest supports ethical sourcing.",
    src: "/videos/vid3.mp4",
  },
  {
    title: "Why Invest in Gold in 2026",
    description: "Our experts explain why gold remains the smartest investment for wealth preservation.",
    src: "/videos/vid6.mp4",
  },
];

const Videos = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      image={heroGold}
      subtitle="Video Gallery"
      title={<>Watch Our <span className="gold-text-gradient">Videos</span></>}
      description="See HRH Gold Invest in action — from gold operations to client testimonials and market insights."
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="relative w-full aspect-video bg-muted">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                    poster=""
                  >
                    <source src={v.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Video {i + 1}</span>
                  <h2 className="font-serif text-xl font-bold text-foreground mt-1 mb-2">{v.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                </div>
              </div>
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
