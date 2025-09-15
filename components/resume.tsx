import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar } from "lucide-react"

export function Resume() {
  const experiences = [
    {
      title: "Product Manager",
      company: "Dev Launchers",
      location: "Austin, TX",
      period: "02/2025 – Present",
      achievements: [
        "Automated academic program updates through API integration, cutting manual errors by 40%",
        "Improved operational response times by 50% through process optimization",
        "Increased student engagement by 20% through large-scale events",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Nexus Solutions",
      location: "Lagos, NG",
      period: "06/2022 – 05/2023",
      achievements: [
        "Launched workflow automation platforms, reducing client onboarding time by 50%",
        "Built KPI tracking systems that boosted conversions by 25%",
        "Conducted competitive analysis that secured 3 enterprise partnerships",
      ],
    },
    {
      title: "Student Systems Administrator",
      company: "University of Houston",
      location: "Houston, TX",
      period: "09/2023 – 12/2024",
      achievements: [
        "Developed supply chain analytics platform, reducing delivery delays by 20%",
        "Automated workflows eliminating 90% of manual processes",
        "Achieved $500K annual savings through logistics optimization",
      ],
    },
    {
      title: "Strategic Project Manager",
      company: "The Ibeto Group",
      location: "Victoria Island, Lagos",
      period: "10/2017 – 06/2022",
      achievements: [
        "Directed enterprise-scale supply chain and infrastructure projects",
        "Delivered cost savings through logistics optimization and process redesign",
      ],
    },
  ]

  const education = [
    {
      degree: "M.S. Engineering Management",
      school: "University of Houston",
      location: "Houston, TX",
      period: "12/2024",
      gpa: "3.82/4.0",
    },
    {
      degree: "B.S. Technology",
      school: "University of Nigeria",
      location: "",
      period: "10/2017",
      gpa: "3.2/4.0",
    },
  ]

  const certifications = [
    "Six Sigma Green Belt",
    "Agile Project Management",
    "Supply Chain & Analytics",
    "AI for Product Management",
    "Data Engineering Foundations",
    "Data Engineer Associate",
  ]

  const projects = [
    {
      title: "EV Charging (Amazon Hub)",
      achievements: [
        "Delivered $3M project 15% under budget, avoiding $450K in penalties",
      ],
    },
    {
      title: "Process Optimization (FK1)",
      achievements: [
        "$5M coating project, $1M savings, defects <1%",
      ],
    },
    {
      title: "Six Sigma Repair",
      achievements: [
        "Improved delivery by 12%, cut churn by 15%, saved $200K",
      ],
    },
    {
      title: "Pharma MIS",
      achievements: [
        "Reduced medication errors by 30%, efficiency up 20%, IRR 30%",
      ],
    },
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Technical Product Manager with 5+ years of experience launching SaaS products and managing cross-functional teams.
            Proven impact increasing user engagement, reducing operational costs, and securing enterprise contracts. MS in Engineering
            Management from the University of Houston. Certified Six Sigma Green Belt and Agile Project Management Professional.
          </p>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500 mt-2 md:mt-0">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-lg text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  {edu.location && <p className="text-gray-500">{edu.location}</p>}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500">{edu.period}</span>
                    <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Key Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
