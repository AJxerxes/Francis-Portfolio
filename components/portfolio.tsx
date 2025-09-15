import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "Chromium Browser Sleep Extension",
      description:
        "A Chromium-based extension that hibernates inactive tabs to free memory and improve performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "Chromium Extensions", "Manifest V3"],
      impact: [
        "Reduces memory usage by suspending idle tabs",
        "Improves browser responsiveness on low-RAM systems",
      ],
      github: "https://github.com/AJxerxes/Chromium-Browser-Sleep-Extension",
      demo: "https://github.com/AJxerxes/Chromium-Browser-Sleep-Extension",
    },
    {
      title: "IdeaSpace - Community Collaboration Platform",
      description:
        "Led product development for a community-driven idea collaboration platform, increasing active users by 40% and idea submissions by 140% within 8 weeks.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "GitHub Projects"],
      impact: [
        "40% increase in active users",
        "140% increase in idea submissions",
        "60% boost in idea-to-project adoption",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Comprehensive Pharmaceutical Management System (CPMIS)",
      description:
        "Developed a software solution to improve pharmaceutical supply chain management, reducing medication errors by 30% and increasing operational efficiency by 20%.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      impact: ["30% reduction in medication errors", "$2M in annual liability cost savings", "30% IRR achieved"],
      github: "#",
      demo: "#",
    },
    {
      title: "EV Charging Infrastructure - Amazon Houston Hub",
      description:
        "Strategic management of $3M EV infrastructure project, delivered 15% under budget while enhancing sustainability metrics by 25%.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Project Management", "Vendor Coordination", "Budget Management"],
      impact: [
        "$450K saved in compliance penalties",
        "25% improvement in sustainability metrics",
        "17-week deadline met",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Healthcare Security Platform",
      description:
        "Led cross-functional launch of tokenization for 10K+ patient records, reducing fraud-related support tickets by 15% within 6 weeks.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Security Tokenization", "HIPAA Compliance", "API Integration"],
      impact: ["15% reduction in fraud tickets", "CCPA/HIPAA compliance achieved", "30% reduction in sprint delays"],
      github: "#",
      demo: "#",
    },
    {
      title: "Supply Chain Analytics Platform",
      description:
        "Orchestrated cross-functional launch of a $5M analytics platform achieving 30% client adoption in 6 months.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "APIs", "Analytics", "KPI Dashboards"],
      impact: ["30% client adoption in 6 months", "3 enterprise contracts secured", "$500K annual cost savings"],
      github: "#",
      demo: "#",
    },
    {
      title: "Six Sigma Process Optimization",
      description:
        "Improved on-time delivery by 12% via DMAIC methodology, reducing client churn by 15% and saving $200K in lost contracts.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Six Sigma DMAIC", "Process Optimization", "Quality Control"],
      impact: ["12% improvement in on-time delivery", "15% reduction in client churn", "$200K saved in contracts"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my key projects and achievements in product management, technical leadership, and business
            impact across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Impact:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.impact.map((impact, impactIndex) => (
                      <li key={impactIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Details
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
