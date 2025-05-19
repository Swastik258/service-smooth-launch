
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, PenTool, BarChart } from "lucide-react";

const serviceData = [
  {
    title: "Business Consulting",
    description:
      "Strategic guidance and solutions to help your business grow, optimize operations and achieve long-term goals.",
    icon: Shield,
  },
  {
    title: "Web Development",
    description:
      "Custom website development with responsive design, modern UI/UX, and functionality tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Brand Identity",
    description:
      "Creative design services that help establish your unique brand identity through logo design, visual assets and brand guidelines.",
    icon: PenTool,
  },
  {
    title: "Marketing Strategy",
    description:
      "Data-driven marketing plans that help you reach your target audience and achieve measurable business results.",
    icon: BarChart,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional services to help your business succeed in today's competitive market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-100 text-brand-600 mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
