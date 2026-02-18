import ScrollReveal from "./ScrollReveal";

interface PageHeroProps {
  image: string;
  subtitle: string;
  title: React.ReactNode;
  description: string;
}

const PageHero = ({ image, subtitle, title, description }: PageHeroProps) => (
  <section className="relative pt-24 min-h-[60vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
      />
      <div className="absolute inset-0 bg-black/60" />
    </div>
    <div className="container mx-auto px-4 relative z-10 py-20">
      <ScrollReveal>
        <div className="max-w-3xl">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
            {subtitle}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">{description}</p>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default PageHero;
