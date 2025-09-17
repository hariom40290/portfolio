import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Lightbulb, Target, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Figma",
    "Adobe Photoshop",
    "HTML5",
    "CSS3",
    "Sass",
    "Responsive Design",
    "Wireframing & Prototyping",
    "UI/UX Design",
    "App Design",
    "Website PSD Conversion",
    "Email Template Design",
    "Keyframe Animation",
  ];

  const features = [
    {
      icon: Palette,
      title: "User-Centered Design",
      description:
        "Creating intuitive and responsive interfaces focused on enhancing user experience.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Approach",
      description:
        "Bringing creative ideas with modern tools like Figma and Adobe Suite to deliver impactful solutions.",
    },
    {
      icon: Target,
      title: "Strategic Execution",
      description:
        "Designing with a clear vision to meet client needs and business objectives effectively.",
    },
    {
      icon: Award,
      title: "Live Project Experience",
      description:
        "Worked on real-world projects like Fusion24X7, Octoquill, Decorait, and Patel Lab to deliver value-driven designs.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto">
            I&apos;m Hariom Kushwah, a dedicated UI/UX Designer with 2 years of
            experience. Currently working at Agami Technologies, I specialize in
            designing clean, user-friendly, and modern digital experiences that
            help businesses grow and engage users effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Designing Experiences That Connect
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                My journey started as a Web Designer at NxtLife Technologies,
                and now as a UI/UX Designer at Agami Technologies, I have worked
                on multiple live projects including Fusion24X7 (CRM),
                Octoquill, Decorait, and Patel Lab & Clinic.
              </p>
              <p>
                I focus on blending creativity with strategy — turning complex
                ideas into simple, elegant, and impactful designs. From
                wireframes to interactive prototypes, I ensure every product is
                user-friendly and aligned with business goals.
              </p>
              <p>
                My mission is to craft digital products that not only look
                modern but also solve real problems and deliver measurable
                results.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-purple-100 text-purple-700 hover:bg-purple-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800
"
                alt="UI/UX Designer workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
