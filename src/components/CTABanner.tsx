import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
}

const CTABanner = ({
  title = "Start Trading Gold with Confidence",
  subtitle = "Join hundreds of satisfied clients who trust HRH Gold Invest for their gold trading and investment needs.",
  primaryLabel = "Get a Quote",
  primaryLink = "/contact",
  secondaryLabel = "Call Us Now",
  secondaryLink = "tel:+256709948920",
}: CTABannerProps) => (
  <section className="py-20 gold-gradient">
    <ScrollReveal>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90 font-semibold px-8">
            <Link to={primaryLink}>{primaryLabel}</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8">
            <a href={secondaryLink}><Phone className="w-4 h-4 mr-2" />{secondaryLabel}</a>
          </Button>
        </div>
      </div>
    </ScrollReveal>
  </section>
);

export default CTABanner;
