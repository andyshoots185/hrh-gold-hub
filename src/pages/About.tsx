import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import consultationImg from "@/assets/consultation.jpg";

const values = [
  { icon: Shield, title: "Integrity", desc: "We conduct every transaction with honesty and ethical standards." },
  { icon: Users, title: "Customer First", desc: "Our clients' success and satisfaction drive everything we do." },
  { icon: Eye, title: "Transparency", desc: "Clear processes, fair pricing, and open communication at all times." },
  { icon: Award, title: "Excellence", desc: "We strive for the highest quality in service and professionalism." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      image={consultationImg}
      subtitle="About Us"
      title={<>Your Trusted <span className="gold-text-gradient">Gold Partner</span></>}
      description="HRH Gold Invest is a premier Ugandan gold trading company committed to providing secure, transparent, and professional gold services."
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <ScrollReveal>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Uganda's most trusted gold trading company by delivering exceptional service, fair pricing, and secure transactions that empower our clients to build lasting wealth through gold.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center shrink-0">
                <Eye className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become East Africa's leading gold investment company, recognized globally for our integrity, professionalism, and commitment to client success.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-8 text-center">Our <span className="gold-text-gradient">Core Values</span></h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">What Makes Us <span className="gold-text-gradient">Different</span></h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Unlike other gold dealers, HRH Gold Invest combines local expertise with international standards. Our team ensures every transaction is handled with the utmost care and transparency.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We pride ourselves on building long-term relationships with our clients, offering personalized service, competitive pricing, and a secure trading environment.
            </p>
            <Button asChild className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
    <CTABanner title="Ready to Partner with Us?" subtitle="Experience the HRH Gold Invest difference. Contact us today." primaryLabel="Contact Us" />
    <Footer />
  </div>
);

export default About;
