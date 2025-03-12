import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Plans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("Professional"); // Default selection

  const plans = [
    {
      name: "Basic",
      price: "299",
      description: "Perfect for small businesses",
      features: ["Tax Return Filing", "Basic Tax Planning", "Email Support", "Annual Review"]
    },
    {
      name: "Professional",
      price: "599",
      description: "Ideal for growing companies",
      features: ["Everything in Basic", "Quarterly Tax Planning", "Priority Support", "Compliance Review", "Financial Advisory"],
      popular: true // Only this plan has "Most Popular"
    },
    {
      name: "Enterprise",
      price: "999",
      description: "For large organizations",
      features: ["Everything in Professional", "Monthly Tax Planning", "24/7 Dedicated Support", "Audit Support", "Custom Solutions", "International Tax"]
    }
  ];

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
  };

  const handleNavigate = () => {
    if (selectedPlan) {
      navigate(`/plans/${selectedPlan.toLowerCase()}`);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold">Pricing Plans</span>
          <h2 className="text-3xl font-bold mt-2 mb-4 dark:text-white">Choose Your Perfect Plan</h2>
          <p className="text-gray-600 dark:text-gray-300">Flexible pricing options tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <div
                key={index}
                className={`relative p-8 rounded-2xl shadow-lg transition-shadow animate-fade-in flex flex-col cursor-pointer hover:ring-2 hover:ring-primary hover:shadow-xl ${
                  isSelected ? "ring-2 ring-primary bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-gray-900"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleSelectPlan(plan.name)}
              >
                {/* "Most Popular" tag ONLY for "Professional" plan */}
                {plan.name === "Professional" && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                )}

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold dark:text-white">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-300">/month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="text-primary h-5 w-5 shrink-0" />
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={isSelected ? "default" : "outline"}
                  className="w-full mt-auto"
                  onClick={handleNavigate}
                  disabled={!isSelected}
                >
                  Get Started
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
