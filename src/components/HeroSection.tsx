import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToReel = () => {
    document.getElementById("sample-reel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-overlay)" }}
      />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 opacity-0 animate-fade-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-primary-foreground leading-[1.1] mb-6">
          AI-Powered Video Ads That Convert
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          High-performing content for DTC brands and local businesses—without the production overhead
        </p>
        <button
          onClick={scrollToReel}
          className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
        >
          See Sample Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
