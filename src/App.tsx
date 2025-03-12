import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/cartContext"; 
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import Index from "./pages/Index";
import PlanDetail from "./pages/plan/planDetail";  
import Cart from "./pages/cart";  
import Checkout from "./pages/checkout";  
import SignIn from "./pages/auth/signIn";  
import Profile from "./pages/auth/profile"; 
import NotFound from "./pages/NotFound";

// Load Clerk publishable key from env
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => (
  <>
    <SignedIn>{children}</SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
);

const queryClient = new QueryClient();

const App = () => (
  <ClerkProvider publishableKey={clerkKey}>
    <QueryClientProvider client={queryClient}>
      <CartProvider> {/* Wrap entire app to provide cart context */}
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/plans/:planName" element={<PlanDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;
