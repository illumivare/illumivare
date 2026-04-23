import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToReel = () => {
    document.getElementById("sample-reel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 md:py-20">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 opacity-0 animate-fade-up">
        <h1 className="text-[36px] md:text-[56px] font-extrabold tracking-tight text-primary-foreground leading-[1.1] mb-6">
          AI-Powered Video Ads That Convert
        </h1>
        <p className="text-base md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          High-performing content for DTC brands and local businesses—without the production overhead
        </p>
        <button
          onClick={scrollToReel}
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-10 py-[18px] text-lg font-semibold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        >
          See Sample Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
