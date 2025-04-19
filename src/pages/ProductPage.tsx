
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShoppingBag, ChevronLeft, Star, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// Mock product data (would come from API in a real app)
const products = [
  {
    id: 1,
    name: "Traditional Dhaka Shirt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1603251579711-3e9c81d6ec22?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Himalayan Threads",
    category: "Traditional",
    description: "Handwoven Dhaka fabric transformed into a modern shirt. Each piece is unique with traditional Nepali patterns and comfortable cotton blend.",
    colors: ["Red", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
  {
    id: 2,
    name: "Modern Nepali Fusion Dress",
    price: 3499,
    image: "https://images.unsplash.com/photo-1607335614551-69176b929f8f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Urban Nepal",
    category: "Fusion",
    description: "A contemporary take on traditional Nepali attire. This fusion dress combines modern styling with cultural elements from Nepal's rich heritage.",
    colors: ["Purple", "Green", "Maroon"],
    sizes: ["S", "M", "L"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
  {
    id: 3,
    name: "Hand-woven Pashmina Shawl",
    price: 4999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Kathmandu Crafts",
    category: "Accessories",
    description: "Authentic hand-woven pashmina shawl made from the finest Himalayan cashmere. Known for its exceptional warmth and softness.",
    colors: ["Cream", "Blue", "Red", "Black"],
    sizes: ["One Size"],
    rating: 4.9,
    reviews: 217,
    inStock: true,
  },
  {
    id: 4,
    name: "Himalayan Hemp Backpack",
    price: 1999,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seller: "Eco Nepal",
    category: "Accessories",
    description: "Eco-friendly backpack made from sustainable Himalayan hemp. Durable, water-resistant, and perfect for everyday use or trekking.",
    colors: ["Natural", "Brown", "Green"],
    sizes: ["Standard"],
    rating: 4.7,
    reviews: 76,
    inStock: true,
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Find the product by ID
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/" className="text-primary hover:underline">Return to Home</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to payment page...",
    });
    // In a real app, this would redirect to checkout
    setTimeout(() => {
      window.location.href = "/checkout";
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 py-8 mx-auto">
        <Link to="/" className="inline-flex items-center text-sm mb-6 hover:text-primary transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative group">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-lg object-cover aspect-square"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm transition-opacity hover:bg-white/90"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              <Link to={`/category/${product.category.toLowerCase()}`} className="inline-block">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {product.category}
                </span>
              </Link>
            </div>

            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            <div className="flex items-center mt-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-bold mb-4">NPR {product.price}</p>
            
            <p className="text-gray-600 mb-6">{product.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Colors</h3>
              <div className="flex space-x-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1 rounded-full border ${selectedColor === color ? 'border-primary' : 'border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${selectedSize === size ? 'border-primary bg-primary/10' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity === 1}
                >
                  -
                </Button>
                <span className="w-10 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button className="w-1/2 space-x-2" onClick={handleAddToCart}>
                <ShoppingBag className="h-4 w-4" />
                <span>Add to Cart</span>
              </Button>
              <Button 
                className="w-1/2" 
                variant="secondary"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>

            <div className="mt-6">
              <div className="flex items-center text-sm text-gray-500">
                <Link 
                  to={`/seller/${product.seller.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-primary hover:underline"
                >
                  Sold by: {product.seller}
                </Link>
                <span className="mx-2">•</span>
                <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
