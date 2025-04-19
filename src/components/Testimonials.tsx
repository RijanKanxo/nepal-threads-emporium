
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Anjali Sharma",
    role: "Fashion Enthusiast",
    content: "Nepal Threads has transformed how I shop for traditional clothing. The quality and authenticity of the products are exceptional, and I love supporting local artisans directly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Raj Tamang",
    role: "Customer",
    content: "As someone living abroad, Nepal Threads helps me stay connected to my culture through authentic Nepali fashion. The platform is easy to use, and shipping is reliable.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Maya Gurung",
    role: "Seller",
    content: "Becoming a seller on Nepal Threads has allowed me to reach customers I never could have on my own. Their platform has significantly expanded my business and connected me with fashion lovers worldwide.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">What Our Community Says</h2>
          <p className="mt-2 text-muted-foreground">
            Hear from our satisfied customers and successful sellers
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-background rounded-lg border p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-nepal-purple">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">"{testimonial.content}"</p>
      <Separator className="my-4" />
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
