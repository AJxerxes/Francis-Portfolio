export function Resume() {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Francis Anigbogu, MS</h1>
          <p className="text-gray-700">Technical Product Manager | Austin, TX</p>
          <div className="flex flex-wrap justify-center gap-3 mt-3 text-blue-600">
            <a className="underline" href="https://francis-portfolio-s77p.vercel.app" target="_blank" rel="noopener noreferrer">Portfolio</a>
            <span className="text-gray-400">•</span>
            <a className="underline" href="https://www.linkedin.com/in/francis-anigbogu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <span className="text-gray-400">•</span>
            <a className="underline" href="https://github.com/AJxerxes" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="text-gray-400">•</span>
            <a className="underline" href="mailto:emekanigbogu@proton.me">emekanigbogu@proton.me</a>
            <span className="text-gray-400">•</span>
            <span>(346) 490-4231</span>
          </div>
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-700">
              Technical Product Manager with 5+ years of experience launching SaaS products and managing cross-functional
              teams. MS in Engineering Management from the University of Houston. Proven track record of improving user
              engagement, reducing operational costs, and securing enterprise contracts. Certified Six Sigma Green Belt
              and Agile Project Management Professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900">Product Manager – Dev Launchers</h3>
                <p className="text-sm text-gray-500">Austin, TX | 02/2025 – Present</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                  <li>Automated academic program updates through API integration, cutting manual errors by 40%</li>
                  <li>Improved operational response times by 50% through process optimization</li>
                  <li>Increased student engagement by 20% through large-scale events</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Associate Product Manager – Nexus Solutions</h3>
                <p className="text-sm text-gray-500">Lagos, NG | 06/2022 – 05/2023</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                  <li>Launched workflow automation platforms, reducing client onboarding time by 50%</li>
                  <li>Built KPI tracking systems that boosted conversions by 25%</li>
                  <li>Conducted competitive analysis that secured 3 enterprise partnerships</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Student Systems Administrator – University of Houston</h3>
                <p className="text-sm text-gray-500">Houston, TX | 09/2023 – 12/2024</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                  <li>Developed supply chain analytics platform, reducing delivery delays by 20%</li>
                  <li>Automated workflows eliminating 90% of manual processes</li>
                  <li>Achieved $500K annual savings through logistics optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Strategic Project Manager – The Ibeto Group</h3>
                <p className="text-sm text-gray-500">Victoria Island, Lagos | 10/2017 – 06/2022</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2 space-y-1">
                  <li>Directed enterprise-scale supply chain and infrastructure projects</li>
                  <li>Delivered cost savings through logistics optimization and process redesign</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Highlights</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><span className="font-semibold">EV Charging (Amazon Hub):</span> Delivered $3M project 15% under budget, avoiding $450K in penalties</li>
              <li><span className="font-semibold">Process Optimization (FK1):</span> $5M coating project, $1M savings, defects &lt;1%</li>
              <li><span className="font-semibold">Six Sigma Repair:</span> Improved delivery by 12%, cut churn by 15%, saved $200K</li>
              <li><span className="font-semibold">Pharma MIS:</span> Reduced medication errors by 30%, efficiency up 20%, IRR 30%</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Education</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li><span className="font-semibold">M.S. Engineering Management</span>, University of Houston, 12/2024, GPA: 3.82/4.0</li>
              <li><span className="font-semibold">B.S. Technology</span>, University of Nigeria, 10/2017, GPA: 3.2/4.0</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Certifications</h2>
            <p className="text-gray-700">
              Six Sigma Green Belt • Agile Project Management • Supply Chain & Analytics • AI for Product Management •
              Data Engineering Foundations • Data Engineer Associate
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Skills</h2>
            <p className="text-gray-700"><span className="font-semibold">Product:</span> Agile • Lean Six Sigma • Roadmapping • KPI Tracking</p>
            <p className="text-gray-700"><span className="font-semibold">Tech:</span> SQL • Python • Power BI • Tableau • Salesforce • SAP ERP • JIRA • GitHub</p>
            <p className="text-gray-700"><span className="font-semibold">Leadership:</span> Cross-functional Teams • User Research • Stakeholder Engagement</p>
          </section>
        </div>
      </div>
    </section>
  )
}
