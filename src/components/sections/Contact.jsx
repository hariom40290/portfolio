"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(serviceID, templateID, formData, publicKey);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    { icon: Mail, title: "Email", info: "hariom.designs23@gmail.com", description: "Send me an email anytime!" },
    { icon: Phone, title: "Phone", info: "+91 9870071432", description: "Available for calls and WhatsApp" },
    { icon: MapPin, title: "Location", info: "Morar, Gwalior (M.P.), India", description: "Open to remote & on-site opportunities" },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-purple-600 font-medium mb-1">{info.info}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
             <CardContent className="p-6 text-center">
  <h3 className="text-xl font-bold mb-2">Quick Response</h3>
  <p className="mb-4 opacity-90">
    I typically respond to all inquiries within 24 hours. You can reach me on WhatsApp or call directly:
  </p>
  <p className="text-purple-600 font-medium mb-4">+91 98700 71432</p>
  <div className="flex flex-col md:flex-row gap-4 justify-center">
    {/* WhatsApp Button */}
    <Button
      as="a"
      href="https://wa.me/919870071432"
      target="_blank"
      rel="noopener noreferrer"
      variant="secondary"
      className="w-full md:w-auto"
    >
      WhatsApp
    </Button>

    {/* Call Button */}
    <Button
      as="a"
      href="tel:+919870071432"
      variant="secondary"
      className="w-full md:w-auto"
    >
      Call
    </Button>
  </div>
</CardContent>

            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="What's this about?" required className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} required className="mt-1" />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white flex items-center justify-center"
                    disabled={isSending}
                  >
                    {isSending ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                      </svg>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
