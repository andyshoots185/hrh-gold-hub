import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowRight, Clock, User } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import goldInvestmentImg from "@/assets/gold-investment.jpg";

const articles = [
  {
    title: "Gold Prices Hit New Highs: What It Means for Investors",
    excerpt: "Global gold prices have reached record levels amid economic uncertainty.",
    content: "Gold prices have surged past $2,800 per ounce in early 2026, driven by geopolitical tensions, central bank buying, and concerns over inflation. For Ugandan investors, this presents both an opportunity and a challenge. Analysts suggest the upward trend is likely to continue through 2026, supported by sustained demand from Asian central banks and ongoing de-dollarization trends. HRH Gold Invest recommends a dollar-cost averaging approach for new investors.",
    date: "Feb 10, 2026", readTime: "5 min read", author: "HRH Research Team", category: "Market Trends",
  },
  {
    title: "Why Uganda Is Becoming a Key Player in African Gold Trade",
    excerpt: "With rich mineral deposits and improving infrastructure, Uganda is positioning itself as a significant hub.",
    content: "Uganda's gold sector has seen remarkable growth over the past five years. The country exported over $2.5 billion worth of gold in 2025, making it one of Africa's top gold exporters. New licensing requirements ensure traceability and ethical sourcing, while tax incentives have encouraged investment in processing facilities.",
    date: "Feb 5, 2026", readTime: "7 min read", author: "Market Analysis Desk", category: "Uganda Gold",
  },
  {
    title: "5 Strategies for First-Time Gold Investors",
    excerpt: "These five proven strategies will help you get started on the right foot.",
    content: "1. Start Small with 1-10 grams. 2. Buy Physical Gold for direct ownership. 3. Dollar-Cost Average monthly. 4. Diversify across bars, coins, and grades. 5. Work with Trusted Dealers like HRH Gold Invest. Patience and discipline are key to building meaningful wealth through precious metals.",
    date: "Jan 28, 2026", readTime: "6 min read", author: "Investment Advisory", category: "Investment Tips",
  },
  {
    title: "Understanding Gold Purity: Karats, Fineness, and What to Look For",
    excerpt: "A guide to understanding gold purity measurements and certifications.",
    content: "Gold purity is measured in karats (K) or fineness. 24K gold is 99.9% pure. In the investment world, .999 fine gold bars are the standard. Always look for hallmarks, assay certificates, and buy from reputable dealers. At HRH Gold Invest, every piece is tested using Olympus Vanta XRF analyzers with full documentation.",
    date: "Jan 20, 2026", readTime: "8 min read", author: "Technical Team", category: "Education",
  },
  {
    title: "The Role of Central Banks in Gold Markets",
    excerpt: "Central banks are increasing their gold reserves. Learn what it means for you.",
    content: "Central banks purchased over 1,100 tonnes of gold in 2025, the third consecutive year of massive buying. China, India, Poland, and Turkey led the charge. This structural shift creates a price floor supporting higher valuations. The trend shows no signs of slowing as geopolitical fragmentation accelerates.",
    date: "Jan 15, 2026", readTime: "6 min read", author: "HRH Research Team", category: "Market Trends",
  },
  {
    title: "Gold vs. Other Safe Haven Assets in 2026",
    excerpt: "How does gold compare to bonds, real estate, and cryptocurrency?",
    content: "In 2025, gold returned 28% compared to 4% for US Treasury bonds, 8% for global real estate, and -15% for Bitcoin. Gold's outperformance highlights its unique role as a true safe haven. For 2026, HRH Gold Invest recommends allocating 10-20% of investment portfolios to physical gold.",
    date: "Jan 8, 2026", readTime: "7 min read", author: "Market Analysis Desk", category: "Analysis",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      image={goldInvestmentImg}
      subtitle="Market Insights"
      title={<>Gold Market <span className="gold-text-gradient">Insights</span></>}
      description="Stay informed with the latest gold market trends, investment tips, and Uganda gold trade news."
    />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {articles.map((a, i) => (
            <ScrollReveal key={a.title} delay={i * 0.08}>
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">{a.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="w-3 h-3" /> {a.date}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {a.readTime}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><User className="w-3 h-3" /> {a.author}</span>
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
