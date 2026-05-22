import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logoImg from "@/assets/logo-hrh.png";
import GoldPriceTicker from "./GoldPriceTicker";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gold Investment", path: "/investment" },
  { name: "Buy & Sell", path: "/buy-sell" },
  { name: "Insights", path: "/blog" },
  { name: "Videos", path: "/videos" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollStopTimer = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isMobile = window.innerWidth < 1024;
      if (current < 10) {
        setTickerVisible(true);
        setNavHidden(false);
      } else if (current < lastScrollY.current) {
        setTickerVisible(true);
        setNavHidden(false);
      } else {
        // Scrolling DOWN
        // On mobile, keep ticker visible/sticky; on desktop hide it
        setTickerVisible(isMobile ? true : false);
        setNavHidden(true);
      }
      lastScrollY.current = current;

      // When the user stops scrolling, reveal the nav again
      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
      scrollStopTimer.current = window.setTimeout(() => {
        setNavHidden(false);
        if (window.innerWidth < 1024) setTickerVisible(true);
      }, 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollStopTimer.current) window.clearTimeout(scrollStopTimer.current);
    };
  }, []);

  return (
    <>
      {/* Gold price ticker — always sticky on mobile; hides on desktop while scrolling down */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-background/95 backdrop-blur-md"
        style={{
          maxHeight: tickerVisible ? "3rem" : "0",
          opacity: tickerVisible ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.3s ease",
        }}
      >
        <GoldPriceTicker />
      </div>

      <nav
        className="fixed left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300 ease-out"
        style={{
          top: tickerVisible ? "var(--ticker-h, 2.25rem)" : "0",
          transform: navHidden ? "translateY(-120%)" : "translateY(0)",
        }}
      >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="HRH Gold Invest" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5">
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

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <a href="tel:+256709948920" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> +256 709 948920
          </a>
          <Button asChild size="sm" className="gold-gradient text-primary-foreground font-semibold hover:opacity-90">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
    </>
  );
};

export default Navbar;
