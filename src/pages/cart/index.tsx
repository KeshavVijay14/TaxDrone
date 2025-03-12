import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import { Trash, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, plan) => sum + Number(plan.price), 0);

  const handleRemove = (planName: string) => {
    removeFromCart(planName);
    toast.success(`${planName} removed from cart.`);
  };

  const handleClearCart = () => {
    if (cart.length === 0) return;
    clearCart();
    toast.info("Cart cleared.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-3xl w-full bg-white/90 dark:bg-gray-800/80 shadow-2xl rounded-3xl p-8 backdrop-blur-lg transition-all">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-2">
          <ShoppingCart className="w-8 h-8 text-primary" /> Your Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-300 text-lg">Your cart is empty.</p>
            <Button onClick={() => navigate("/")} className="mt-6 px-6 py-3">
              Browse Plans
            </Button>
          </div>
        ) : (
          <>
            <ul className="space-y-4 mb-6">
              <AnimatePresence>
                {cart.map((plan, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center justify-between bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer hover:ring-2 hover:ring-primary"
                    onClick={() => navigate(`/plans/${plan.name.toLowerCase()}`)}
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">${plan.price} / month</p>
                    </div>
                    <Button variant="destructive" size="icon" onClick={(e) => { 
                      e.stopPropagation(); 
                      handleRemove(plan.name); 
                    }}>
                      <Trash className="w-5 h-5" />
                    </Button>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="flex justify-between items-center text-xl font-semibold border-t pt-4 border-gray-300 dark:border-gray-600 mb-4">
              <span>Total:</span>
              <span>${total}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleClearCart} variant="destructive" className="w-full sm:w-auto flex-1 py-3">
                Clear Cart
              </Button>
              <Button onClick={() => navigate("/checkout")} className="w-full sm:w-auto flex-1 py-3">
                Checkout
              </Button>
            </div>

            {cart.length > 0 && (
              <Button variant="outline" onClick={() => navigate("/")} className="mt-6 w-full py-3">
                Back to Plans
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
