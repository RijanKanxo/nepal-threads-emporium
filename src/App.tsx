
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Sellers from "./pages/Sellers";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          {/* Placeholder routes to prevent 404s */}
          <Route path="/category/:category" element={<Categories />} />
          <Route path="/seller/:seller" element={<Sellers />} />
          <Route path="/wishlist" element={<Index />} />
          <Route path="/seller/dashboard" element={<Index />} />
          <Route path="/new-arrivals" element={<Index />} />
          <Route path="/deals" element={<Index />} />
          <Route path="/products" element={<Index />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/seller/signup" element={<Login />} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/reset-password" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
