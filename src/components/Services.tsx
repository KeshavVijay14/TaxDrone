
import { CheckCircle2 } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize liabilities and maximize savings for your business",
      features: ["Custom tax strategies", "Risk assessment", "Compliance review"]
    },
    {
      title: "Financial Advisory",
      description: "Expert financial guidance to help your business make informed decisions",
      features: ["Business analysis", "Growth planning", "Investment advice"]
    },
    {
      title: "Tax Compliance",
      description: "Ensure your business meets all tax obligations and regulatory requirements",
      features: ["Return preparation", "Deadline management", "Audit support"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold">Our Services</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 dark:text-white">Comprehensive Tax Solutions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We provide end-to-end tax and financial services to help your business thrive
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
