
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock product data
const products = [
  {
    id: 1,
    name: "Traditional Dhaka Shirt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1603251579711-3e9c81d6ec22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Himalayan Threads",
    category: "Traditional",
  },
  {
    id: 2,
    name: "Modern Nepali Fusion Dress",
    price: 3499,
    image: "https://images.unsplash.com/photo-1607335614551-69176b929f8f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Urban Nepal",
    category: "Fusion",
  },
  {
    id: 3,
    name: "Hand-woven Pashmina Shawl",
    price: 4999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Kathmandu Crafts",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Himalayan Hemp Backpack",
    price: 1999,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Eco Nepal",
    category: "Accessories",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Products</h2>
            <p className="text-muted-foreground">Discover our handpicked selection of Nepalese fashion</p>
          </div>
          <Link 
            to="/products" 
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View All Products
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    seller: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="product-card group">
      <CardContent className="p-0">
        <div className="relative">
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 opacity-70 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white/80"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="font-medium leading-none group-hover:text-primary">{product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground mt-1">
                <Link to={`/seller/${product.seller.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary">
                  {product.seller}
                </Link>
              </p>
            </div>
            <p className="font-bold">NPR {product.price}</p>
          </div>
          <div className="mt-2">
            <Link to={`/category/${product.category.toLowerCase()}`} className="inline-block">
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                {product.category}
              </span>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedProducts;
