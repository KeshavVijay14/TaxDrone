import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold">Get Expert Help</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Schedule a Free Consultation</h2>
          <p className="text-gray-600">
            Our tax experts are ready to help you optimize your finances and ensure compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="space-y-6 p-6 bg-white rounded-2xl shadow-lg animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  className="w-full"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="How can we help you?"
                  className="w-full min-h-[120px]"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full group" disabled={loading}>
                {loading ? "Sending..." : "Send Request"}
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">
                Speak with our experts right away for immediate assistance.
              </p>
              <a href="tel:+15551234567">
                <Button variant="outline" className="w-full">
                  +1 (555) 123-4567
                </Button>
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send us your queries and we'll respond within 24 hours.
              </p>
              <a href="mailto:support@taxdrone.com">
                <Button variant="outline" className="w-full">
                  support@taxdrone.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
