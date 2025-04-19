
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Heart, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

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
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  
  const handleProductClick = (productId: number) => {
    setExpandedProduct(productId);
    // Scroll to the product
    setTimeout(() => {
      const element = document.getElementById(`product-${productId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleBackdropClick = () => {
    setExpandedProduct(null);
  };

  return (
    <section className="py-12 relative">
      <AnimatePresence>
        {expandedProduct !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          >
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {expandedProduct && <ExpandedProductCard 
                product={products.find(p => p.id === expandedProduct)!} 
                onClose={() => setExpandedProduct(null)} 
              />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => handleProductClick(product.id)}
              id={`product-${product.id}`}
            />
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
  onClick: () => void;
  id: string;
}

const ProductCard = ({ product, onClick, id }: ProductCardProps) => {
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Animation and toast notification
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
      }}
    >
      <Card 
        className="product-card group cursor-pointer bg-opacity-90 backdrop-blur-sm"
        onClick={handleCardClick}
      >
        <CardContent className="p-0">
          <div 
            className="relative overflow-hidden" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden">
              <motion.img
                src={product.image}
                alt={product.name}
                className="product-image"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            
            {/* Favorite button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80 opacity-70 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-white/80"
              onClick={(e) => e.stopPropagation()}
            >
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to favorites</span>
            </Button>
            
            {/* Add to cart button with animation */}
            <motion.div
              className="absolute bottom-4 right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="default"
                size="icon"
                className="h-10 w-10 rounded-full shadow-lg"
                onClick={handleAddToCart}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          <div className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium leading-none group-hover:text-primary">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  <Link to={`/seller/${product.seller.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary" onClick={(e) => e.stopPropagation()}>
                    {product.seller}
                  </Link>
                </p>
              </div>
              <p className="font-bold">NPR {product.price}</p>
            </div>
            <div className="mt-2">
              <Link 
                to={`/category/${product.category.toLowerCase()}`} 
                className="inline-block"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                  {product.category}
                </span>
              </Link>
            </div>
            
            {/* Buy now button */}
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 'auto' : 0 
              }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                to={`/product/${product.id}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Buy Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ExpandedProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    seller: string;
    category: string;
  };
  onClose: () => void;
}

const ExpandedProductCard = ({ product, onClose }: ExpandedProductCardProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    onClose();
  };

  const handleBuyNow = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <motion.div
      className="bg-card rounded-xl overflow-hidden shadow-2xl"
      layoutId={`expanded-product-${product.id}`}
    >
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative h-full">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 text-white"
            onClick={onClose}
          >
            ×
          </Button>
        </div>
        <div className="p-8 flex flex-col">
          <div className="mb-4">
            <Link 
              to={`/category/${product.category.toLowerCase()}`}
              className="inline-block"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                {product.category}
              </span>
            </Link>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p className="text-muted-foreground mb-2">
            By <Link to={`/seller/${product.seller.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary hover:underline">{product.seller}</Link>
          </p>
          
          <div className="mt-auto">
            <p className="text-3xl font-bold mb-6">NPR {product.price}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button 
                variant="default" 
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button 
                variant="secondary" 
                className="w-full"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts;
