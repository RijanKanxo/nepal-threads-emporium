
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const elements = parallaxRef.current.querySelectorAll('.parallax-layer');
        
        elements.forEach((el, index) => {
          const speed = 0.1 * (index + 1);
          const yPos = -scrollY * speed;
          (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden bg-background py-10 md:py-16">
      <div className="container px-4 md:px-6">
        {/* Animated Logo */}
        <div className="mb-8 flex flex-col items-center justify-center">
          <div className="animate-bounce overflow-hidden rounded-full shadow-lg p-2 bg-white mb-4">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50" fill="url(#gradient)" />
              <path 
                d="M30 40 L30 70 L40 70 L40 60 L60 60 L60 70 L70 70 L70 40 L60 40 L60 50 L40 50 L40 40 Z" 
                fill="white" 
                className="animate-pulse"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9b87f5" />
                  <stop offset="1" stopColor="#e94057" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="relative">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-center mb-2">
              <span className="inline-block transform transition-transform hover:scale-110 duration-300">व</span>
              <span className="inline-block transform transition-transform hover:scale-110 duration-300">स्</span>
              <span className="inline-block transform transition-transform hover:scale-110 duration-300">त्</span>
              <span className="inline-block transform transition-transform hover:scale-110 duration-300">र</span>
            </h1>
            <p className="text-sm text-gray-500 text-center">Nepal's Best Fashion Marketplace</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Nepal&apos;s Finest 
                <span className="text-nepal-purple"> Fashion</span>
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Connect with talented Nepalese designers and find unique clothing directly from local makers.
                From traditional to contemporary styles, all in one marketplace.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/categories">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Login
                </Button>
              </Link>
            </div>
          </div>

          {/* Parallax Ghibli-style Animation */}
          <div ref={parallaxRef} className="relative h-[400px] w-full overflow-hidden rounded-xl border shadow-xl">
            {/* Sky layer */}
            <div className="parallax-layer absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-200"></div>
            
            {/* Mountain layer */}
            <div className="parallax-layer absolute bottom-0 left-0 w-full h-64">
              <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
                <path fill="#9b87f5" fill-opacity="0.5" d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,85.3C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
              <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
                <path fill="#e94057" fill-opacity="0.3" d="M0,128L48,138.7C96,149,192,171,288,176C384,181,480,171,576,144C672,117,768,75,864,64C960,53,1056,75,1152,112C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            
            {/* Temple layer */}
            <div className="parallax-layer absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-48">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="30" y="60" width="40" height="40" fill="#5a3b2c" />
                <polygon points="20,60 50,30 80,60" fill="#7e4e32" />
                <rect x="40" y="70" width="8" height="15" fill="#f0f0f0" />
                <rect x="55" y="70" width="8" height="15" fill="#f0f0f0" />
                <rect x="45" y="90" width="12" height="10" fill="#f0f0f0" />
              </svg>
            </div>
            
            {/* River layer */}
            <div className="parallax-layer absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-600 to-blue-400 opacity-70">
              <div className="absolute inset-0 animate-pulse">
                <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
                  <path fill="#fff" fill-opacity="0.3" d="M0,128L48,144C96,160,192,192,288,202.7C384,213,480,203,576,165.3C672,128,768,64,864,53.3C960,43,1056,85,1152,122.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>
            </div>
            
            {/* Character with Nepali clothes */}
            <div className="parallax-layer absolute bottom-28 right-12 w-20 h-32 animate-bounce" style={{animationDuration: '3s'}}>
              <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Body - Daura Surwal */}
                <ellipse cx="50" cy="45" rx="22" ry="25" fill="#f8c291" /> {/* Head */}
                <rect x="40" y="70" width="20" height="60" fill="#e94057" /> {/* Daura (upper dress) */}
                <rect x="40" y="130" width="20" height="30" fill="#fff" /> {/* Surwal (pants) */}
                
                {/* Face */}
                <circle cx="42" cy="40" r="3" fill="#000" /> {/* Left eye */}
                <circle cx="58" cy="40" r="3" fill="#000" /> {/* Right eye */}
                <path d="M45,50 Q50,55 55,50" stroke="#000" strokeWidth="2" fill="none" /> {/* Smile */}
                
                {/* Dhaka Topi (traditional hat) */}
                <rect x="35" y="15" width="30" height="10" fill="#9b87f5" rx="2" />
                <rect x="37" y="10" width="26" height="5" fill="#f97316" />
                
                {/* Arms with traditional bracelets */}
                <rect x="25" y="75" width="15" height="5" fill="#e94057" /> {/* Left arm */}
                <rect x="60" y="75" width="15" height="5" fill="#e94057" /> {/* Right arm */}
                <circle cx="25" cy="77.5" r="3" fill="#ffd700" /> {/* Left bracelet */}
                <circle cx="75" cy="77.5" r="3" fill="#ffd700" /> {/* Right bracelet */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
