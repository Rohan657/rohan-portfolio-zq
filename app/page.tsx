import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, MapPin, Calendar, Code, Database, Server, Wrench } from "lucide-react"

export default function Portfolio() {
  const skills = {
    backend: ["Java", "Spring Boot", "NodeJS", "Fastify", "Koa", "Rest API", "Hibernate", "JPA", "Prisma"],
    frontend: ["React", "NextJS", "TypeScript"],
    databases: ["MySQL", "MSSQL", "Azure Cosmos"],
    devtools: ["Eclipse", "Visual Studio Code", "JIRA", "Confluence", "Postman", "Azure", "GitHub"],
    devops: ["Docker", "Kubernetes", "Azure", "Terraform", "GitHub Actions"],
    versionControl: ["Git", "Github"],
  }

  const experience = [
    {
      title: "Software Engineer",
      company: "Scandinavian Airlines",
      location: "Stockholm, Sweden",
      period: "Oct 2024 – Present",
      achievements: [
        "Led backend development for 5+ enterprise-grade microservices handling 10M+ requests/month, improving latency by 35% via async processing and Redis caching.",
        "Collaborated seamlessly with cross-functional teams including developers, quality assurance, UX designers and product managers to align software development with user requirements.",
        "Oversaw sprint planning, task assignments, and progress tracking, ensuring timely completion of sprint goals with no spillover. Actively resolved blockers and dependencies to maintain smooth team operations.",
        "Directed sprint planning and code reviews for a team of 8 engineers, maintaining 95%+ on-time delivery with <2% production bug rate.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Tata Consultancy Services",
      location: "Stockholm, Sweden",
      period: "Jun 2022 – Sep 2024",
      achievements: [
        "Designed and implemented scalable backend services for payment authorization, processing 50K+ transactions daily with 99.99% uptime.",
        "Built admin dashboards using Next.js + Prisma + GraphQL, enabling real-time stats monitoring.",
        "Collaborated with product and data teams to A/B test features, contributing to a 12% increase in user conversion.",
        "Automated deployment pipelines using GitHub Actions and Terraform, reducing manual errors and deployment time by 70%.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Tata Consultancy Services",
      location: "Gurgaon, India",
      period: "Jan 2021 – Jun 2022",
      achievements: [
        "Wrote integration and unit tests (Jest, Postman) achieving 90%+ test coverage.",
        "Contributed to the migration of monolithic services to a microservice architecture, improving deployment flexibility and cutting system downtime by 25%.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">Rohan Ahuja</h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Full-Stack Software Engineer specializing in scalable backend systems and modern web applications
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/rohan-ahuja-se" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/Rohan657" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center text-slate-600">
            <MapPin className="mr-2 h-4 w-4" />
            <span>Stockholm, Sweden</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-blue-600" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5 text-green-600" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="mr-2 h-5 w-5 text-purple-600" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-orange-600" />
                  Development Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.devtools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="mr-2 h-5 w-5 text-red-600" />
                  DevOps & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.devops.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Github className="mr-2 h-5 w-5 text-slate-600" />
                  Version Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.versionControl.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600">{job.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                      <div className="flex items-center text-slate-600">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="flex items-center text-slate-600 mt-1">
                        <MapPin className="mr-1 h-4 w-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-slate-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>
          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="text-xl">Airline Cabin Upgrade Bidding System</CardTitle>
              <CardDescription>Full-Stack Bidding Platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    Designed and implemented a full-stack bidding platform allowing customers to bid for cabin upgrades
                    using credit cards (Adyen API) or loyalty points.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    Built secure backend services in Spring Boot, handling bid submissions, rule validations, payments,
                    and email confirmations; supported 10K+ bids/day with 99.9% uptime.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-slate-700">
                    Developed an internal admin portal in React.js with role-based access control to set flight-specific
                    base prices and bid rules, track bid activity per flight and user, and monitor historical logs for
                    auditing and compliance.
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge>Spring Boot</Badge>
                <Badge>React.js</Badge>
                <Badge>Adyen API</Badge>
                <Badge>Payment Processing</Badge>
                <Badge>Role-based Access</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Education</h2>
          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">Bachelor of Technology in Computer Engineering</CardTitle>
              <CardDescription className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                Graduated Sep 2020
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and innovative projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
              <a href="https://www.linkedin.com/in/rohan-ahuja-se" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn Profile
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-slate-900 hover:bg-slate-100">
              <a href="https://github.com/Rohan657" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-800 text-slate-400 text-center">
        <p>&copy; 2024 Rohan Ahuja. All rights reserved.</p>
      </footer>
    </div>
  )
}
