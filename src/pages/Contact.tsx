import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-primary mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-professional max-w-3xl mx-auto">
            We'd love to hear from you. Our dedicated team is ready to provide exceptional service and answer any questions you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl heading-secondary mb-8">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 gradient-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-md)]">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <p className="text-professional">
                      123 Luxury Avenue<br />
                      Premium District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 gradient-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-md)]">
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <p className="text-professional">+1 (555) 123-4567</p>
                    <p className="text-professional">+1 (555) 765-4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 gradient-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-md)]">
                    <Mail className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-professional">contact@premiumstore.com</p>
                    <p className="text-professional">support@premiumstore.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 card-premium">
                  <div className="w-12 h-12 gradient-accent rounded-2xl flex items-center justify-center shadow-[var(--shadow-md)]">
                    <Clock className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-professional">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="card-premium hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Customer Support</h3>
                  <p className="text-sm text-professional mb-4">
                    Need help with your order or have questions about our products?
                  </p>
                  <Button className="btn-ghost-premium w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-premium hover-lift">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Sales Inquiry</h3>
                  <p className="text-sm text-professional mb-4">
                    Interested in bulk orders or exclusive partnerships?
                  </p>
                  <Button className="btn-ghost-premium w-full">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium">
              <CardContent className="p-10">
                <h2 className="text-3xl heading-secondary mb-8">
                  Send us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-premium"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="input-premium"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-base font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className="input-premium"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more about your inquiry..."
                      className="input-premium min-h-[200px] resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="btn-accent w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl heading-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-professional">
              Quick answers to common questions about our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your return policy?",
                answer: "We offer a 30-day return policy for all items in their original condition. Our premium concierge service handles all returns with white-glove care."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide to over 50 countries with complimentary shipping on all orders. Each item comes with premium packaging and tracking."
              },
              {
                question: "How do you ensure product authenticity?",
                answer: "Every product comes with a certificate of authenticity. We work exclusively with authorized dealers and verified manufacturers."
              },
              {
                question: "Do you offer customization services?",
                answer: "Yes, we offer personalization and bespoke customization services for select items. Contact our concierge team for exclusive options."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-premium hover-lift">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-lg mb-4">{faq.question}</h3>
                  <p className="text-professional">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;