"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img
            src="/images/profile.jpg"
            alt="Francis Anigbogu"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Francis Anigbogu</h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-4">Technical Product Management Professional</p>

        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          7+ years in IT and systems leadership, delivering $5M+ SaaS platforms that boosted client retention by 25% via
          API integrations. Six Sigma Green Belt certified with expertise in JIRA, SQL, Python.
        </p>

        <div className="flex justify-center space-x-4 mb-12">
          <Button asChild>
            <a href="mailto:emekanigbogu@proton.me">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/AJxerxes" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://linkedin.com/in/francis-anigbogu" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>

        <Button variant="ghost" onClick={scrollToAbout} className="animate-bounce">
          <ArrowDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  )
}
