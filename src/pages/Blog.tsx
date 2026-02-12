import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "Gold Prices Hit New Highs: What It Means for Investors",
    excerpt: "Global gold prices have reached record levels amid economic uncertainty. Here's what investors in Uganda and beyond should know about the current market conditions.",
    date: "Feb 10, 2026",
    category: "Market Trends",
  },
  {
    title: "Why Uganda Is Becoming a Key Player in African Gold Trade",
    excerpt: "With rich mineral deposits and improving trade infrastructure, Uganda is positioning itself as a significant hub for gold trading across East Africa.",
    date: "Feb 5, 2026",
    category: "Uganda Gold",
  },
  {
    title: "5 Strategies for First-Time Gold Investors",
    excerpt: "Thinking about investing in gold? These five proven strategies will help you get started on the right foot and build a solid gold portfolio.",
    date: "Jan 28, 2026",
    category: "Investment Tips",
  },
  {
    title: "Understanding Gold Purity: Karats, Fineness, and What to Look For",
    excerpt: "A comprehensive guide to understanding gold purity measurements, certifications, and how to ensure you're getting genuine, quality gold.",
    date: "Jan 20, 2026",
    category: "Education",
  },
  {
    title: "The Role of Central Banks in Gold Markets",
    excerpt: "Central banks around the world are increasing their gold reserves. Learn how this trend affects global gold prices and what it means for individual investors.",
    date: "Jan 15, 2026",
    category: "Market Trends",
  },
  {
    title: "Gold vs. Other Safe Haven Assets in 2026",
    excerpt: "How does gold compare to bonds, real estate, and cryptocurrency as a safe haven? We analyze performance data and expert opinions for the year ahead.",
    date: "Jan 8, 2026",
    category: "Analysis",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-28 pb-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Market Insights</p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Gold Market <span className="gold-text-gradient">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest gold market trends, investment tips, and Uganda gold trade news from our expert team.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">{a.category}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3 line-clamp-2">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{a.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {a.date}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
    <CTABanner title="Want Expert Gold Advice?" subtitle="Our team is ready to help you make informed investment decisions." primaryLabel="Contact Our Experts" />
    <Footer />
  </div>
);

export default Blog;
