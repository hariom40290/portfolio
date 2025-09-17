"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web Design", "UI/UX", "E-Commerce"];

  const projects = [
    {
      id: 1,
      title: "Fusion24x7",
      category: "Web Design",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "An all-in-one business management platform with CRM, HR, tasks, and collaboration tools, designed with modern UI/UX.",
      tags: ["Web Design", "UI/UX", "Dashboard"],
      live: "https://fusion24x7.com",
      details: {
        overview: `Fusion24X7 is an all-in-one Business Management Platform developed at Agami Technologies.
It replaces multiple tools with a single smart platform designed to manage CRM, HR, Tasks, Collaboration, and Asset Tracking.`,
        role: `As a UI/UX Designer, I focused on intuitive dashboards, user flows, responsive UI, and consistent design language.`,
        features: [
          "CRM & Lead Management → pipelines, stages, lead tracking dashboard.",
          "Task & Workflow Management → Kanban boards, task assignment, dashboards.",
          "HR & People Ops → payroll, leave tracking, performance review screens.",
          "Team Chat → modern chat UI with mentions & file sharing.",
          "Asset & Expense Tracking → allocation dashboards, reimbursement workflows.",
        ],
      },
    },
   {
  id: 2,
  title: "OctoQuill",
  category: "Web Design",
  image:
    "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
  description:
    "Smart email & API management platform with seamless integration and modern UI/UX.",
  tags: ["Web Design", "UI/UX", "Dashboard", "API Management"],
  live: "https://octoquill.com",
  details: {
    overview: `OctoQuill is a smart email & API management platform designed for businesses and developers.
It provides seamless integration of multiple email accounts, API keys, logs, and tracking in one intuitive dashboard.
The platform focuses on automation, scalability, and monitoring with a clean UI/UX for effortless usage.`,
    role: `At Agami Technologies, I worked as a UI/UX Designer on this project. My contributions included:

- Designing the sidebar navigation for easy access to modules like Accounts, API Keys, Logs, Tracking, and Webhooks.
- Creating dashboard layouts for account status, API details, and activity logs.
- Building user flows & wireframes to streamline developer interactions with APIs and integrations.
- Ensuring consistency in design language across the web app.
- Delivering a responsive and modern design for desktop and tablet views.`,
    features: [
      "Accounts Management: Designed UI to add, view, and track multiple email providers (IMAP/SMTP) with Active/Inactive status.",
      "API Key Module: Simple, intuitive interface for generating and managing API keys.",
      "Logs Dashboard: Clear visualization of recent logs and activities for quick monitoring.",
      "Tracking & Webhooks: Designed flow for real-time tracking and webhook setup.",
      "User Management: Easy member access & role-based permission system.",
    ],
  },
}
,
    {
  id: 3,
  title: "Decorait",
  category: "E-Commerce",
  image:
    "https://images.pexels.com/photos/396551/pexels-photo-396551.jpeg?auto=compress&cs=tinysrgb&w=600",
  description:
    "AI-powered B2B2C décor ecosystem platform with e-commerce, digital catalogues, and collaboration tools.",
  tags: ["E-Commerce", "UI/UX", "AI Platform"],
  live: "https://decorait.in/",
  details: {
    overview: `Decorait is an AI-enabled B2B2C platform that interconnects the entire décor ecosystem — from interior designers and retailers to distributors and brands. 
It empowers businesses with AI-powered product curation, dynamic preference matching, SEO-optimized content, and digital catalogues. 
The goal is to enhance collaboration, profitability, and online presence for the décor industry.`,
    role: `As a UI/UX Designer, I worked on creating a premium e-commerce experience and business ecosystem flows. My contributions included:

- Designing shopping flows for customers, retailers, distributors, and brands.  
- Creating responsive product catalogues and dashboards.  
- Building intuitive checkout flows and subscription-based pricing pages.  
- Ensuring consistency across B2B (TRADE), B2C (PRO), and AI-curation modules.`,
    features: [
      "AI-powered style diagnosis & product curation for designers.",
      "Digital catalogues ensuring accurate and seamless product data.",
      "Dynamic preference matching with personalized recommendations.",
      "SEO-optimized product content for higher search rankings.",
      "E-commerce flows for customers, retailers, and distributors.",
      "Flexible pricing plans (Basic, Core, Premium, Unlimited).",
      "Responsive layouts for mobile, tablet, and desktop.",
    ],
  },
}
,
    // {
    //   id: 4,
    //   title: "Patel Lab",
    //   category: "Web Design",
    //   description:
    //     "Professional diagnostic lab website built for trust, simplicity, and easy information access.",
    //   tags: ["Healthcare", "Web Design", "UI/UX"],
    //   live: "https://patellab.com/",
    //   details: {
    //     overview: `Patel Lab is a diagnostic center website built to provide patients easy access to information and services.`,
    //     role: `Worked on healthcare-focused UI, simplifying lab services and reports access.`,
    //     features: [
    //       "Simple and professional design for trust.",
    //       "Easy-to-navigate test and service listings.",
    //       "Mobile-optimized for patients on the go.",
    //     ],
    //   },
    // },
   {
  id: 5,
  title: "Nukkart",
  category: "E-Commerce",
  image:
    "https://images.pexels.com/photos/5632401/pexels-photo-5632401.jpeg?auto=compress&cs=tinysrgb&w=600",
  description:
    "Hyperlocal marketplace platform that connects customers with nearby stores for instant deliveries and easy shopping.",
  tags: ["Marketplace", "E-Commerce", "UI/UX", "Delivery"],
  live: "https://nukkart.in/",
  details: {
    overview: `Nukkart is a hyperlocal marketplace designed to bring neighborhood stores online. 
It enables customers to order daily essentials, groceries, and other items directly from trusted local shops with fast doorstep delivery. 
The platform focuses on speed, convenience, and supporting small businesses with a modern digital presence.`,

    role: `As a UI/UX Designer, I focused on creating seamless marketplace experiences, including:

- Designing the customer-facing app interface for browsing, ordering, and checkout.
- Building store pages with product showcases for local vendors.
- Creating vendor-side flows for order management and delivery tracking.
- Ensuring responsive and intuitive UI across mobile and desktop.`,

    features: [
      "Instant essentials delivery with under-30-minute promise.",
      "Voice ordering system for hands-free shopping.",
      "Store owner partnership dashboard for efficient management.",
      "Clean and responsive product catalog design.",
      "Bright and vibrant UI/UX to encourage user engagement.",
    ],
  },
}
,
   {
  id: 7,
  title: "IT Learning Institute",
  category: "Web Design",
  image:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
  description:
    "Educational institute website built for IT Learning Institute, focusing on coding education, placements, and career growth.",
  tags: ["Education", "Web Design", "UI/UX"],
  live: "https://itlearning.epizy.com", // 👈 आप असली live link डाल सकते हैं
  details: {
    overview: `IT Learning Institute is Gwalior’s most trusted coding and IT training platform, 
offering affordable, practical, and job-oriented courses. 
The website highlights their 100% placement support, verified certification system, online/offline classes, and success stories.`,

    role: `As a UI/UX Designer, my role included:

- Designing a modern education-focused website with clear navigation (Home, Courses, Placements, Verification, Contact).
- Creating course showcase layouts with pricing, ratings, and "Buy Now" / "Explore" CTAs.
- Structuring placement stories and student testimonials for credibility.
- Building certificate verification & download flow for students.
- Designing responsive layouts optimized for mobile and desktop.`,

    features: [
      "Homepage with institute overview and quick admission/registration options.",
      "Course catalog with categories, prices, and ratings.",
      "Placement stories and student success showcase.",
      "Certificate verification and download module.",
      "Responsive design with app download promotion.",
      "Contact forms and inquiry system.",
    ],
  },
}

  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <p className="text-sm text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of my latest live projects — blending creativity, strategy, and modern design to deliver impactful experiences.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border-purple-200 text-purple-700 hover:bg-purple-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-700"
                  >
                    {project.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
     <Dialog
  open={!!selectedProject}
  onOpenChange={() => setSelectedProject(null)}
>
  {selectedProject && (
    <>
      {/* Header */}
      <DialogHeader className="px-6 py-4 border-b border-gray-200">
        <DialogTitle className="text-2xl font-bold text-gray-900">
          {selectedProject.title}
        </DialogTitle>
        <p className="text-sm text-gray-500 mt-1">
          {selectedProject.category} • {selectedProject.tags.join(", ")}
        </p>
      </DialogHeader>

      {/* Body */}
      <DialogContent>
        <div className="space-y-6 text-gray-700">
          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              📌 Project Overview
            </h3>
            <p className="leading-relaxed whitespace-pre-line">
              {selectedProject.details.overview}
            </p>
          </div>

          {/* Role */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🎯 My Role
            </h3>
            <p className="leading-relaxed">{selectedProject.details.role}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 Key Features
            </h3>
            <ul className="list-disc list-inside space-y-1 pl-2">
              {selectedProject.details.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={() => setSelectedProject(null)}
          className="hover:bg-gray-100"
        >
          Close
        </Button>
        <a
          href={selectedProject.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            Visit Live Project
          </Button>
        </a>
      </div>
    </>
  )}
</Dialog>

    </section>
  );
};

export default Portfolio;
