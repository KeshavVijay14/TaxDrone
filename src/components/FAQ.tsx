
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What tax services do you offer?",
      answer: "We offer comprehensive tax services including tax planning, compliance, return preparation, and advisory services for businesses of all sizes."
    },
    {
      question: "How can I schedule a consultation?",
      answer: "You can schedule a free consultation through our online form, or by calling us directly. One of our tax experts will get back to you within 24 hours."
    },
    {
      question: "What makes TaxDrone different?",
      answer: "We combine expert tax knowledge with cutting-edge technology to provide efficient, accurate, and personalized tax solutions for modern businesses."
    },
    {
      question: "How secure is my financial information?",
      answer: "We maintain the highest level of security standards to protect your data, using bank-level encryption and secure cloud storage systems."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold">FAQ</span>
          <h2 className="text-3xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
