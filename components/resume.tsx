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
      period: "07/2025 - Current",
      achievements: [
        "Led product development for IdeaSpace, increasing active users by 40% and idea submissions by 140% within 8 weeks",
        "Collaborated with designers and engineers to launch key features, cutting idea submission time by 30%",
        "Conducted user research and implemented engagement KPIs, boosting idea-to-project adoption by 60%",
        "Managed Agile sprints using GitHub Projects, ensuring clear specs and timely delivery",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Black Men's Health Clinic (BMHC)",
      location: "Austin, TX",
      period: "02/2025 - Current",
      achievements: [
        "Accelerated Security Roadmap: Led cross-functional launch of tokenization for 10K+ patient records",
        "Reduced fraud-related support tickets by 15% within 6 weeks ensuring CCPA/HIPAA compliance",
        "Drove stakeholder alignment across 5 teams to prioritize HIPAA-compliant login enhancements",
        "Cut sprint cycle delays by 30% through improved stakeholder alignment",
      ],
    },
    {
      title: "Student Systems Administrator",
      company: "University of Houston",
      location: "Houston, TX",
      period: "09/2023 - 12/2024",
      achievements: [
        "Led event operations for university-wide initiatives, increasing student engagement by 20%",
        "Automated 90% of academic program updates through API integration",
        "Reduced manual errors by 40% and boosted operational response times by 50%",
        "Enabled data-driven decision-making for student services",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Nexus Solutions",
      location: "Lagos, NG",
      period: "06/2022 – 05/2023",
      achievements: [
        "Orchestrated cross-functional launch of a $5M analytics platform (Java/API)",
        "Achieved 30% client adoption in 6 months directly influencing product-market fit",
        "Partnered with Sales to craft technical proposals and KPI dashboards",
        "Secured 3 enterprise contracts and expanded enterprise footprint",
      ],
    },
    {
      title: "IT & Database Administrator",
      company: "The Ibeto Group",
      location: "Victoria Island, Lagos",
      period: "10/2017 - 06/2022",
      achievements: [
        "Enhanced client retention by 35% by maintaining 99.9% system uptime",
        "Led end-to-end development of Java-based logistics platform",
        "Reduced delivery delays by 20% generating $500K in annual cost savings",
        "Drove UX improvements resulting in 2 contract renewals and higher NPS",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science - Engineering Management",
      school: "University of Houston",
      location: "Houston, TX",
      period: "12/2024",
      gpa: "3.82/4.0",
    },
    {
      degree: "Bachelor of Science - Technology",
      school: "UNN",
      location: "",
      period: "10/2017",
      gpa: "3.2/4.0",
    },
  ]

  const certifications = [
    "Joint Certification for Project Management and Six Sigma Green Belt (PMSS) - December 2024",
    "Supply Chain and Analytics Certificate (SCA) - December 2024",
    "Atlassian Agile Project Management Professional Certificate",
    "AI for Product Management - Pendo.io",
    "Data Engineering Foundations",
    "Data Engineer Associate, DataCamp",
  ]

  const projects = [
    {
      title: "Electric Vehicle Charging Stations Project – Amazon Houston Hub",
      achievements: [
        "Delivered $3M EV infrastructure project 15% under budget, avoiding $450K in compliance penalties",
        "Aligned 8 vendors to meet 17-week deadline, enhancing sustainability metrics by 25%",
      ],
    },
    {
      title: "Process Optimization OPF Project - FK1 Coating",
      achievements: [
        "Managed $5M coating process optimization project achieving $1M in cost savings",
        "Reduced defect rates to <1% through ISO-compliant quality control",
      ],
    },
    {
      title: "Six Sigma Project - SZ1 Monitor Repair Process Improvement",
      achievements: [
        "Improved on-time delivery by 12% via DMAIC, reducing client churn by 15%",
        "Saved $200K in lost contracts through process improvements",
      ],
    },
    {
      title: "Comprehensive Pharmaceutical Management Information System (CPMIS)",
      achievements: [
        "Reduced medication errors by 30%, saving $2M in annual liability costs",
        "Achieved 30% IRR with projected payback period of 2.5 years",
      ],
    },
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Technical Product Management Professional with 7+ years in IT and systems leadership, delivering $5M+ SaaS
            platforms and driving measurable business impact.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Projects</h3>
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
