
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, X } from "lucide-react";
import { motion } from "framer-motion";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Mock cart data - in a real app this would come from context/state management
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Traditional Dhaka Shirt",
    price: 2499,
    image: "https://images.unsplash.com/photo-1603251579711-3e9c81d6ec22?q=80&w=1974&auto=format&fit=crop",
    quantity: 1
  },
  {
    id: 2,
    name: "Modern Nepali Fusion Dress",
    price: 3499,
    image: "https://images.unsplash.com/photo-1607335614551-69176b929f8f?q=80&w=1964&auto=format&fit=crop",
    quantity: 1
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#1A1F2C] to-[#2C3E50]">
      <Navbar />
      <main className="flex-1 container py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
            <ShoppingBag className="h-8 w-8" />
            Your Shopping Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg bg-white/5 backdrop-blur-lg"
              >
                <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p className="text-xl text-gray-300">Your cart is empty</p>
                <Button className="mt-4 bg-nepal-purple hover:bg-nepal-purple/90">
                  Continue Shopping
                </Button>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white">{item.name}</h3>
                    <p className="text-nepal-purple font-bold">NPR {item.price}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8"
                    >
                      -
                    </Button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </motion.div>
              ))}

              <div className="mt-8 p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10">
                <div className="flex justify-between text-lg font-medium text-white mb-4">
                  <span>Total</span>
                  <span>NPR {total}</span>
                </div>
                <Button className="w-full bg-nepal-purple hover:bg-nepal-purple/90 text-white">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
