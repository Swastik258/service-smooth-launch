
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-brand-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Business?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get in touch with us today for a free consultation and discover how our services can help you achieve your business goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="secondary" className="text-brand-600">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
