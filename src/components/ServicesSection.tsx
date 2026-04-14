import { Film, GraduationCap, Settings } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Done-for-You Production",
    description: "UGC-style video ads delivered in 3 days—no creators, no crews, no waiting",
  },
  {
    icon: GraduationCap,
    title: "AI Training Workshops",
    description: "Teach your team to produce high-converting content in-house with AI tools",
  },
  {
    icon: Settings,
    title: "Custom Implementation",
    description: "White-glove setup for agencies and brands scaling video ad production",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service) => (
            <div key={service.title} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-5">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
