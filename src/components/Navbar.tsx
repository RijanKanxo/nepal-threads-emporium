
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ShoppingBag, 
  User, 
  Search, 
  Menu, 
  X,
  Heart,
  Store
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nepal-purple via-nepal-red to-nepal-gold">
            Vastra
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <>
            <div className="flex items-center space-x-6 min-w-[300px]">
              <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                Categories
              </Link>
              <Link to="/sellers" className="text-sm font-medium transition-colors hover:text-primary">
                Sellers
              </Link>
              <Link to="/new-arrivals" className="text-sm font-medium transition-colors hover:text-primary">
                New Arrivals
              </Link>
              <Link to="/deals" className="text-sm font-medium transition-colors hover:text-primary">
                Deals
              </Link>
            </div>

            <div className="flex w-96 max-w-sm">
              <div className="relative w-full">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full rounded-md pl-8 bg-white/5"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          )}
          
          {!isMobile && (
            <>
              <Link to="/wishlist">
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/seller/dashboard">
                <Button variant="ghost" size="icon">
                  <Store className="h-5 w-5" />
                </Button>
              </Link>
            </>
          )}

          <Link to="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background animate-fade-in">
          <div className="container flex flex-col h-full pt-16">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={toggleMenu}
            >
              <X className="h-5 w-5" />
            </Button>

            <div className="relative my-4 w-full">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full rounded-md pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col space-y-4 py-4">
              <Link 
                to="/categories" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Categories
              </Link>
              <Link 
                to="/sellers" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Sellers
              </Link>
              <Link 
                to="/new-arrivals" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                New Arrivals
              </Link>
              <Link 
                to="/deals" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Deals
              </Link>
              <Link 
                to="/wishlist" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Wishlist
              </Link>
              <Link 
                to="/seller/dashboard" 
                className="text-lg font-medium transition-colors hover:text-primary py-2"
                onClick={toggleMenu}
              >
                Seller Dashboard
              </Link>
            </div>
            
            <div className="mt-auto pb-8 flex justify-between">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="w-full ml-2">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
