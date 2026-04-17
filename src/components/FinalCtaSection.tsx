const FinalCtaSection = () => {
  return (
    <section className="py-[60px] md:py-20 lg:py-28 px-6 md:px-12 lg:px-20 bg-[hsl(214,100%,96%)]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[28px] md:text-[40px] font-extrabold text-foreground mb-10 leading-tight tracking-tight">
          Ready for More Customers with Less Work?
        </h2>
        <a
          href="https://calendar.app.google/La2JAcwhtjFGxvSv9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-12 py-[22px] text-[22px] font-semibold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
