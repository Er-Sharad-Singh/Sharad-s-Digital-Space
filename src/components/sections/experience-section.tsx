import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    role: "Web Devlopment Trainee",
    company: "Softpro India",
    date: "Sep 2024 - Nov 2024",
    description: "MERN Stack Devloper"
  },
  {
    role: "Web Devlopment Trainee",
    company: "Skill Chase",
    date: "Aug 2024 - Oct 2024",
    description: ""
  },
]

export function ExperienceSection() {
  return (
    <Section id="experience" className="bg-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          My professional journey and roles I've undertaken.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="group overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                <p className="text-muted-foreground font-semibold">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.date}</p>
              </div>
            </CardHeader>
            {exp.description && (
              <CardContent>
                <p>{exp.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  )
}
