import { Play } from "lucide-react";

const SampleReelSection = () => {
  return (
    <section id="sample-reel" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-12">
          From Brief to Broadcast in 72 Hours
        </h2>
        <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 border border-border/50 flex flex-col items-center justify-center mb-8 backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110">
            <Play className="w-7 h-7 text-accent ml-0.5" strokeWidth={1.5} />
          </div>
          <p className="text-foreground text-lg font-medium tracking-wide">
            Sample Reel Coming Soon
          </p>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          High-converting UGC-style ads for supplements, skincare, and local service businesses
        </p>
      </div>
    </section>
  );
};

export default SampleReelSection;
