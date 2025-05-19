
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    image: "SJ",
    content:
      "ServPro transformed our business operations with their consulting services. Their strategic insights and tailored solutions helped us achieve our growth targets much faster than expected.",
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, GrowthCo",
    image: "MC",
    content:
      "The team at ServPro delivered an exceptional website that perfectly captures our brand identity. Their attention to detail and commitment to quality exceeded our expectations.",
  },
  {
    name: "Lisa Anderson",
    position: "Founder, StyleBrand",
    image: "LA",
    content:
      "Working with ServPro on our brand identity was a game-changer. They truly understood our vision and translated it into a cohesive brand strategy that resonates with our audience.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <Avatar className="h-16 w-16 border-2 border-brand-100">
                      <AvatarFallback className="bg-brand-100 text-brand-800">
                        {testimonial.image}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
