
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-brand-50 py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Professional Services <br />
            <span className="text-brand-600">For Your Business</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            We provide high quality business solutions tailored to your needs. 
            Our expert team is ready to help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80"
            alt="Business professionals working together"
            className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
