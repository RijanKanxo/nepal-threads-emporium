
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Store, Star } from "lucide-react";

// Mock seller data
const sellers = [
  {
    id: 1,
    name: "Himalayan Threads",
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    productCount: 42,
    specialty: "Traditional Clothing",
    description: "Specializing in handcrafted traditional Nepalese clothing with authentic Dhaka fabric patterns.",
  },
  {
    id: 2,
    name: "Urban Nepal",
    image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    productCount: 37,
    specialty: "Contemporary Fashion",
    description: "Modern fashion inspired by Nepali culture, designed for the urban youth and young professionals.",
  },
  {
    id: 3,
    name: "Kathmandu Crafts",
    image: "https://images.unsplash.com/photo-1605521242908-93806c15a5ce?q=80&w=1820&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    productCount: 51,
    specialty: "Handmade Accessories",
    description: "Artisanal accessories including pashmina, handwoven bags, and traditional Nepali jewelry.",
  }
];

const FeaturedSellers = () => {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Sellers</h2>
            <p className="text-muted-foreground">
              Meet the talented artisans behind our products
            </p>
          </div>
          <Link 
            to="/sellers" 
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View All Sellers
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface SellerCardProps {
  seller: {
    id: number;
    name: string;
    image: string;
    rating: number;
    productCount: number;
    specialty: string;
    description: string;
  };
}

const SellerCard = ({ seller }: SellerCardProps) => {
  return (
    <Card className="seller-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <CardContent className="p-0">
        <div className="flex flex-col">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={seller.image}
              alt={seller.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <Link to={`/seller/${seller.id}`}>
                <h3 className="text-xl font-bold text-white">{seller.name}</h3>
              </Link>
              <div className="flex items-center mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm text-white">{seller.rating}</span>
                <span className="mx-2 text-xs text-white">•</span>
                <span className="text-sm text-white">{seller.productCount} Products</span>
              </div>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-primary">{seller.specialty}</p>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {seller.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <Link to={`/seller/${seller.id}`}>
                <Button variant="outline" size="sm" className="gap-1">
                  <Store className="h-4 w-4" />
                  Visit Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedSellers;
