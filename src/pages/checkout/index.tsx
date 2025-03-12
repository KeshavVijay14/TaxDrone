import { useCart } from "@/context/cartContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { Trash } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Checkout = () => {
  const { cart, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const { user } = useUser(); // Get user details from Clerk

  const total = cart.reduce((sum, plan) => sum + Number(plan.price), 0);

  return (
    <SignedIn>
      <Navbar/>
      <div className="max-w-3xl my-20 mx-auto p-6 md:p-8 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

        {/* User Information */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6 flex items-center gap-4">
          {user?.imageUrl && (
            <img src={user.imageUrl} alt="User Profile" className="w-12 h-12 rounded-full" />
          )}
          <div>
            <p className="text-lg font-semibold">{user?.fullName || "User"}</p>
            <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress || "No Email"}</p>
            {user?.primaryPhoneNumber && (
              <p className="text-gray-600">{user.primaryPhoneNumber.phoneNumber}</p>
            )}
          </div>
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <ul className="space-y-4 mb-6">
              {cart.map((plan, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="text-gray-600">${plan.price} / month</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromCart(plan.name)}
                  >
                    <Trash className="w-5 h-5" />
                  </Button>
                </li>
              ))}
            </ul>

            {/* Total & Actions */}
            <div className="flex justify-between items-center text-lg font-semibold mb-6">
              <span>Total:</span>
              <span className="text-primary">${total}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Button
                onClick={() => {
                  clearCart();
                  navigate("/");
                }}
                className="w-full md:w-1/2"
              >
                Complete Purchase
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/cart")}
                className="w-full md:w-1/2"
              >
                Back to Cart
              </Button>
            </div>
          </>
        )}
      </div>
      <Footer/>
    </SignedIn>
  );
};

export default Checkout;
