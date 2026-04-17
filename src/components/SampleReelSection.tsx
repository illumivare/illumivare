const SampleReelSection = () => {
  return (
    <section id="sample-reel" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-12">
          From Brief to Broadcast in 72 Hours
        </h2>
        <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl mb-8 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5">
          <iframe
            src="https://www.youtube.com/embed/eH3zRX8irGs"
            title="Illumivare Sample Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          High-converting UGC-style ads for supplements, skincare, and local service businesses
        </p>
      </div>
    </section>
  );
};

export default SampleReelSection;
