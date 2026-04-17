const FinalCtaSection = () => {
  return (
    <section className="py-28 md:py-36 lg:py-44 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-[42px] md:text-5xl font-bold text-foreground mb-10 leading-tight">
          Ready for More Customers with Less Work?
        </h2>
        <a
          href="https://calendar.google.com/appointments/schedules/AcZssZ3NwgEQmpcSZqR00c6hyp3_hBzyJXhGRW0Kni4CoBEOwdcM_D7nwQ8N5SQ65iKQj8Z9nBlAb_5F"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
        >
          Book a Discovery Call
        </a>
      </div>
    </section>
  );
};

export default FinalCtaSection;
