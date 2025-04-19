
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-12 bg-primary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Join Our Community</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Subscribe to our newsletter for the latest trends, exclusive deals, and updates from our Nepalese fashion community.
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button type="submit" className="w-full sm:w-auto">
              Subscribe 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
