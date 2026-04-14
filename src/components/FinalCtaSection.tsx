const FinalCtaSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Ready to Scale Your Ad Creative?
        </h2>
        <a
          href="mailto:hello@illumivare.com"
          className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-8 py-4 text-base font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
