
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  const benefits = [
    "Expert Tax Consultation",
    "24/7 Support",
    "Secure Data Handling",
    "Fast Processing"
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-sky-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                Trusted by 10,000+ businesses
              </span>
            </div>
            
            <h1 className="animate-slide-up text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Smart Tax Solutions for 
              <span className="text-primary block mt-2">Modern Businesses</span>
            </h1>
            
            <p className="animate-slide-up delay-100 text-xl text-gray-600 dark:text-gray-300">
              Streamline your tax filing process with our intelligent platform. Save time, reduce errors, and maximize returns.
            </p>
            
            <div className="animate-slide-up delay-200 grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span className="text-gray-700 dark:text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="animate-slide-up delay-200 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Start Free Consultant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
            </div>
          </div>
          
          <div className="hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
                alt="Team collaboration"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
