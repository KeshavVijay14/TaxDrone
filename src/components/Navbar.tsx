
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">TaxDrone</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#services" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary px-3 py-2 transition-colors">Testimonials</a>
              <Button variant="default">Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#services" className="text-gray-600 hover:text-primary block px-3 py-2">Services</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary block px-3 py-2">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary block px-3 py-2">Testimonials</a>
            <Button variant="default" className="w-full mt-4">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
