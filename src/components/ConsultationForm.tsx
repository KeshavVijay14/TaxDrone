
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send } from "lucide-react";
import { useState } from "react";

export const ConsultationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add your form submission logic here
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-primary font-semibold">Get Expert Help</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Schedule a Free Consultation</h2>
          <p className="text-gray-600">
            Our tax experts are ready to help you optimize your finances and ensure compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <div className="space-y-6 p-6 bg-white rounded-2xl shadow-lg animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="How can we help you?"
                  className="w-full min-h-[120px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full group">
                Send Request
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-100">
              <Phone className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="text-gray-600 mb-4">
                Speak with our experts right away for immediate assistance
              </p>
              <Button variant="outline" className="w-full">
                +1 (555) 123-4567
              </Button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-fade-in delay-200">
              <Mail className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">
                Send us your queries and we'll respond within 24 hours
              </p>
              <Button variant="outline" className="w-full">
                support@taxdrone.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
