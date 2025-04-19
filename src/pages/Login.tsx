
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  TabsContent, 
  TabsList, 
  TabsTrigger, 
  Tabs 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ShoppingBag, Store } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container py-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Vastra</h1>
            <p className="text-muted-foreground">Sign in to continue your journey</p>
          </div>

          <Tabs defaultValue="buyer" className="w-full" onValueChange={(value) => setUserType(value as "buyer" | "seller")}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="buyer" className="flex items-center justify-center">
                <ShoppingBag className="mr-2 h-4 w-4" />
                <span>Buyer</span>
              </TabsTrigger>
              <TabsTrigger value="seller" className="flex items-center justify-center">
                <Store className="mr-2 h-4 w-4" />
                <span>Seller</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buyer">
              <Card>
                <CardHeader>
                  <CardTitle>Buyer Login</CardTitle>
                  <CardDescription>
                    Access your account to shop the best of Nepali fashion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/reset-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full">Login as Buyer</Button>
                  <div className="text-sm text-center pt-2">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="seller">
              <Card>
                <CardHeader>
                  <CardTitle>Seller Login</CardTitle>
                  <CardDescription>
                    Access your seller dashboard to manage your products
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="seller-email" className="text-sm font-medium">Email</label>
                    <Input id="seller-email" type="email" placeholder="your@business.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="seller-password" className="text-sm font-medium">Password</label>
                    <Input id="seller-password" type="password" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span>Remember me</span>
                    </label>
                    <Link to="/reset-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button className="w-full">Login as Seller</Button>
                  <div className="text-sm text-center pt-2">
                    Don't have a seller account?{" "}
                    <Link to="/seller/signup" className="text-primary hover:underline">
                      Register as Seller
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
