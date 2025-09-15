import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Users } from "lucide-react"

export function About() {
  const skills = [
    "JIRA",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Salesforce CRM",
    "SAP ERP",
    "SAP Predictive Analytics",
    "Ms. Project",
    "SAP Lumira",
    "SAP BW",
    "SAP HANA",
    "Agile",
    "Lean Six Sigma",
    "KPI Tracking",
  ]

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Led development of Java-based platforms and API integrations, reducing delivery delays by 20%",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data-Driven Solutions",
      description: "Automated 90% of academic program updates, reducing manual errors by 40%",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Business Impact",
      description: "Delivered $5M+ projects with measurable ROI and cost savings exceeding $1M annually",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-functional Collaboration",
      description:
        "Aligned stakeholders across 5+ teams to accelerate security roadmaps and reduce sprint delays by 30%",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a Technical Product Management Professional with a Master's in Engineering Management from the
            University of Houston. I specialize in bridging the gap between technical execution and business goals, with
            a proven track record of delivering high-impact solutions that drive revenue growth and operational
            efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="text-blue-600 mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/profile.jpg"
                alt="Francis Anigbogu - Professional"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/francis-casual.jpg"
                alt="Francis Anigbogu - Casual"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/francis-formal.jpg"
                alt="Francis Anigbogu - Executive"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
