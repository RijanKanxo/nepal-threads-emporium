
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-nepal-purple to-nepal-red">
                Nepal Threads
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground md:max-w-xs">
              Connecting Nepalese fashion creators with customers worldwide. Discover unique, handcrafted clothing and accessories.
            </p>
            <div className="mt-6 flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/sellers" className="text-sm text-muted-foreground hover:text-foreground">
                  Featured Sellers
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-sm text-muted-foreground hover:text-foreground">
                  Deals & Discounts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium">Account</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-muted-foreground hover:text-foreground">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/seller/register" className="text-sm text-muted-foreground hover:text-foreground">
                  Become a Seller
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-medium">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe to get special offers, free giveaways, and new arrivals.
            </p>
            <div className="mt-4 flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="h-10"
              />
              <Button className="h-10 px-4">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Nepal Threads Emporium. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:justify-end">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
