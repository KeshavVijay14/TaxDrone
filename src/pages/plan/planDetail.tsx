import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useCart } from "@/context/cartContext";
import { toast } from "sonner"; // Toast notifications
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plans = [
  {
    name: "Basic",
    price: "299",
    description: "Perfect for small businesses",
    features: ["Tax Return Filing", "Basic Tax Planning", "Email Support", "Annual Review"],
  },
  {
    name: "Professional",
    price: "599",
    description: "Ideal for growing companies",
    features: ["Everything in Basic", "Quarterly Tax Planning", "Priority Support", "Compliance Review", "Financial Advisory"],
  },
  {
    name: "Enterprise",
    price: "999",
    description: "For large organizations",
    features: ["Everything in Professional", "Monthly Tax Planning", "24/7 Dedicated Support", "Audit Support", "Custom Solutions", "International Tax"],
  },
];

export default function PlanDetail() {
  const { planName } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [plan, setPlan] = useState(null);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (planName) {
      const selectedPlan = plans.find((p) => p.name.toLowerCase() === planName.toLowerCase());
      setPlan(selectedPlan);
    }
  }, [planName]);

  useEffect(() => {
    if (plan) {
      setIsAdded(cart.some((item) => item.name === plan.name));
    }
  }, [cart, plan]);

  const handleAddToCart = () => {
    if (isAdded) {
      toast.warning(`${plan.name} plan is already in your cart!`);
      return;
    }

    addToCart(plan);
    toast.success(`${plan.name} plan added to cart successfully!`);
    setIsAdded(true);
  };

  if (!plan) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-800/80 shadow-xl rounded-3xl p-8 backdrop-blur-lg transition-all">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">{plan.name} Plan</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-6">{plan.description}</p>

        <div className="text-center text-5xl font-extrabold text-primary">
          ${plan.price} <span className="text-2xl text-gray-600 dark:text-gray-300">/month</span>
        </div>

        <ul className="my-8 space-y-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-200 text-lg">
              <Check className="text-primary h-6 w-6" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            onClick={handleAddToCart} 
            className={`w-full sm:w-auto flex-1 py-3 text-lg shadow-md hover:shadow-lg transition-all ${
              isAdded ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            disabled={isAdded}
          >
            {isAdded ? "Added" : "Add to Cart"}
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate("/")} 
            className="w-full sm:w-auto flex-1 py-3 text-lg shadow-md hover:shadow-lg"
          >
            Back to Plans
          </Button>
          {cart.length > 0 && (
            <Button 
              variant="default"
              onClick={() => navigate("/cart")}
              className="w-full sm:w-auto flex-1 py-3 text-lg shadow-md hover:shadow-lg bg-green-600 hover:bg-green-700"
            >
              Go to Cart 🛒
            </Button>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
