import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { GitHubProjects } from "@/components/github-projects"
import { Resume } from "@/components/resume"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Portfolio />
      <GitHubProjects />
      <Resume />
      <Blog />
      <Contact />
    </main>
  )
}
