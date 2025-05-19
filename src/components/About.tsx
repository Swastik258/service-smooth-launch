
import { CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    "Expert team with years of experience",
    "Tailored solutions for your business needs",
    "Transparent communication throughout projects",
    "Commitment to quality and client satisfaction",
    "Ongoing support after project completion",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=80"
              alt="Our team working together"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, ServPro has been dedicated to providing exceptional services to businesses across various industries. 
              Our mission is to help our clients achieve their business goals through innovative solutions and expert guidance.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-brand-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            
            <p className="text-lg text-gray-600">
              We pride ourselves on building long-term relationships with our clients, becoming trusted partners in their success journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
