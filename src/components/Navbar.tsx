import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gold Investment", path: "/investment" },
  { name: "Buy & Sell", path: "/buy-sell" },
  { name: "Insights", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold gold-text-gradient">HRH</span>
          <span className="font-serif text-lg text-foreground hidden sm:inline">Gold Invest</span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+256709948920" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> +256 709 948920
          </a>
          <Button asChild size="sm" className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4 px-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.name}
            </Link>
          ))}
          <Button asChild size="sm" className="mt-3 w-full gold-gradient text-primary-foreground font-semibold">
            <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
