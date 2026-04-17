const services = [
  {
    title: "Done-for-You Production",
    description: "UGC-style video ads delivered in 3 days—no creators, no crews, no waiting",
  },
  {
    title: "AI Training Workshops",
    description: "Teach your team to produce high-converting content in-house with AI tools",
  },
  {
    title: "Custom Implementation",
    description: "White-glove setup for agencies and brands scaling video ad production",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
          {services.map((service) => (
            <div
              key={service.title}
              className="text-center md:text-left p-8 rounded-xl bg-[hsl(220,14%,98%)] border border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-10 h-[2px] bg-accent mb-6 mx-auto md:mx-0" />
              <h3 className="text-2xl md:text-[26px] font-bold text-foreground mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-[1.7]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
