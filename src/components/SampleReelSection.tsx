const SampleReelSection = () => {
  return (
    <section id="sample-reel" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          From Brief to Broadcast in 72 Hours
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          High-converting UGC-style ads for DTC brands and local businesses
        </p>
        <div className="w-full max-w-[800px] mx-auto my-10 aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
          <iframe
            src="https://www.youtube.com/embed/eH3zRX8irGs"
            title="Illumivare Sample Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SampleReelSection;
