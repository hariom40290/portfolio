import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Palette,
  Monitor,
  Smartphone,
  Users,
  Layout,
  Layers,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description:
        "Crafting user-friendly and engaging digital experiences with wireframes, prototypes, and usability testing.",
      features: [
        "Wireframing",
        "Prototyping",
        "User Flows",
        "Usability Testing",
      ],
      price: "Starting at $500",
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      description:
        "Modern, responsive websites built with clean code and optimized user interfaces.",
      features: [
        "Responsive Design",
        "HTML5 / CSS3 / Sass",
        "Landing Pages",
        "Website Redesign",
      ],
      price: "Starting at $800",
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description:
        "Intuitive mobile app designs for Android and iOS with a focus on smooth user journeys.",
      features: ["App UI Design", "Prototyping", "Interactive Flows", "Figma"],
      price: "Starting at $1,000",
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description:
        "Helping businesses build strong identities with logos, color systems, and style guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Color Schemes", "Typography"],
      price: "Starting at $600",
    },
    {
      icon: Layers,
      title: "Design Systems",
      description:
        "Building scalable and reusable design systems for consistency across digital products.",
      features: ["Component Libraries", "Style Guides", "Figma Systems", "Consistency Audits"],
      price: "Starting at $700",
    },
    {
      icon: Users,
      title: "Consultation & Strategy",
      description:
        "One-on-one consultation to align design decisions with user needs and business goals.",
      features: [
        "Design Audit",
        "Strategy Planning",
        "UX Research",
        "Client Workshops",
      ],
      price: "Starting at $50/hour",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            I help businesses and startups with creative, research-driven, and
            impactful design solutions. From UI/UX and web design to branding
            and consultation, I deliver designs that connect with users and
            achieve results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="text-2xl font-bold text-gray-900 mb-6">
                  {/* {service.price} */}
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let&apos;s discuss your project and find the
            best design approach.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-200 text-purple-700 hover:bg-purple-50"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
