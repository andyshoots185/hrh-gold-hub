import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-serif text-2xl font-bold gold-text-gradient mb-4">HRH Gold Invest</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Uganda's trusted partner in gold trading, buying, selling, and investment consulting. Building wealth through gold since day one.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "About Us", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Gold Investment", path: "/investment" },
              { name: "Buy & Sell Gold", path: "/buy-sell" },
              { name: "Market Insights", path: "/blog" },
              { name: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Gold Buying</li>
            <li>Gold Selling</li>
            <li>Gold Trading</li>
            <li>Investment Consulting</li>
            <li>Secure Transactions</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +256 709 948920</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@hrhgoldinvest.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5" /> Kampala, Uganda</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} HRH Gold Invest. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
