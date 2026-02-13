import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles = [
  {
    title: "Gold Prices Hit New Highs: What It Means for Investors",
    excerpt: "Global gold prices have reached record levels amid economic uncertainty. Here's what investors in Uganda and beyond should know about the current market conditions.",
    content: "Gold prices have surged past $2,800 per ounce in early 2026, driven by geopolitical tensions, central bank buying, and concerns over inflation. For Ugandan investors, this presents both an opportunity and a challenge. On one hand, existing gold holdings have appreciated significantly. On the other, new investors face higher entry points. Analysts suggest that the upward trend is likely to continue through 2026, supported by sustained demand from Asian central banks and ongoing de-dollarization trends. HRH Gold Invest recommends a dollar-cost averaging approach for new investors looking to enter the market at these levels.",
    date: "Feb 10, 2026",
    readTime: "5 min read",
    author: "HRH Research Team",
    category: "Market Trends",
  },
  {
    title: "Why Uganda Is Becoming a Key Player in African Gold Trade",
    excerpt: "With rich mineral deposits and improving trade infrastructure, Uganda is positioning itself as a significant hub for gold trading across East Africa.",
    content: "Uganda's gold sector has seen remarkable growth over the past five years. The country exported over $2.5 billion worth of gold in 2025, making it one of Africa's top gold exporters. The government's efforts to formalize artisanal mining, establish gold refineries, and improve regulatory frameworks have attracted international attention. New licensing requirements ensure traceability and ethical sourcing, while tax incentives have encouraged investment in processing facilities. Uganda's strategic location and growing infrastructure make it an ideal transit hub for gold from the DRC, South Sudan, and Tanzania.",
    date: "Feb 5, 2026",
    readTime: "7 min read",
    author: "Market Analysis Desk",
    category: "Uganda Gold",
  },
  {
    title: "5 Strategies for First-Time Gold Investors",
    excerpt: "Thinking about investing in gold? These five proven strategies will help you get started on the right foot and build a solid gold portfolio.",
    content: "1. Start Small: Begin with small purchases (1-10 grams) to understand the market. 2. Buy Physical Gold: Physical gold bars and coins offer direct ownership without counterparty risk. 3. Dollar-Cost Average: Invest a fixed amount monthly regardless of price fluctuations. 4. Diversify Your Holdings: Mix gold bars, coins, and jewelry-grade gold for flexibility. 5. Work with Trusted Dealers: Partner with certified companies like HRH Gold Invest that provide purity certificates and transparent pricing. Remember, gold is a long-term investment — patience and discipline are key to building meaningful wealth through precious metals.",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    author: "Investment Advisory",
    category: "Investment Tips",
  },
  {
    title: "Understanding Gold Purity: Karats, Fineness, and What to Look For",
    excerpt: "A comprehensive guide to understanding gold purity measurements, certifications, and how to ensure you're getting genuine, quality gold.",
    content: "Gold purity is measured in karats (K) or fineness (parts per thousand). 24K gold is 99.9% pure, while 22K is 91.6% pure. In the investment world, .999 fine gold bars are the standard. When buying gold, always look for hallmarks, assay certificates, and buy from reputable dealers. XRF (X-ray fluorescence) testing is the gold standard for non-destructive purity verification. At HRH Gold Invest, every piece is tested using Olympus Vanta XRF analyzers, and full documentation is provided. Be wary of deals that seem too good to be true — counterfeit gold is a growing concern in unregulated markets.",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    author: "Technical Team",
    category: "Education",
  },
  {
    title: "The Role of Central Banks in Gold Markets",
    excerpt: "Central banks around the world are increasing their gold reserves. Learn how this trend affects global gold prices and what it means for individual investors.",
    content: "Central banks purchased over 1,100 tonnes of gold in 2025, the third consecutive year of massive buying. China, India, Poland, and Turkey led the charge, diversifying reserves away from the US dollar. This structural shift has fundamentally changed the gold market dynamics, creating a price floor that supports higher valuations. For individual investors, this means gold is increasingly recognized as a strategic reserve asset by the world's most sophisticated financial institutions. The trend shows no signs of slowing — if anything, geopolitical fragmentation is accelerating central bank gold accumulation.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    author: "HRH Research Team",
    category: "Market Trends",
  },
  {
    title: "Gold vs. Other Safe Haven Assets in 2026",
    excerpt: "How does gold compare to bonds, real estate, and cryptocurrency as a safe haven? We analyze performance data and expert opinions for the year ahead.",
    content: "In 2025, gold returned 28% compared to 4% for US Treasury bonds, 8% for global real estate, and -15% for Bitcoin. Gold's outperformance highlights its unique role as a true safe haven during times of uncertainty. Unlike bonds, gold has no credit risk. Unlike real estate, it's highly liquid and portable. Unlike cryptocurrency, it has 5,000 years of track record as a store of value. For 2026, analysts expect gold to continue outperforming traditional safe havens as inflation remains elevated and geopolitical risks persist. HRH Gold Invest recommends allocating 10-20% of investment portfolios to physical gold.",
    date: "Jan 8, 2026",
    readTime: "7 min read",
    author: "Market Analysis Desk",
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

        <div className="space-y-8">
          {articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">{a.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {a.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {a.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" /> {a.author}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{a.excerpt}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{a.content}</p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1 cursor-pointer hover:underline">
                    Share this article <ArrowRight className="w-3 h-3" />
                  </span>
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
