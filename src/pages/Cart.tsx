
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  // This is a placeholder for the Cart page
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>
        <p>Cart content will go here</p>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
