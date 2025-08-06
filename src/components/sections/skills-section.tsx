import { Section } from "@/components/section"
import { SkillCard } from "@/components/skill-card"
import { Html5Icon } from "@/components/icons/html5-icon"
import { Css3Icon } from "@/components/icons/css3-icon"
import { JavascriptIcon } from "@/components/icons/javascript-icon"
import { ReactIcon } from "@/components/icons/react-icon"
import { NextjsIcon } from "@/components/icons/nextjs-icon"
import { NodejsIcon } from "@/components/icons/nodejs-icon"
import { TailwindCssIcon } from "@/components/icons/tailwind-css-icon"
import { Github } from "lucide-react"
import { CIcon } from "@/components/icons/c-icon"
import { CoreJavaIcon } from "@/components/icons/core-java-icon"
import { MongodbIcon } from "@/components/icons/mongodb-icon"
import { SqlIcon } from "@/components/icons/sql-icon"

const skills = [
  { name: "HTML5", icon: <Html5Icon className="w-full h-full" />, proficiency: 95 },
  { name: "CSS3", icon: <Css3Icon className="w-full h-full" />, proficiency: 90 },
  { name: "JavaScript", icon: <JavascriptIcon className="w-full h-full" />, proficiency: 85 },
  { name: "React", icon: <ReactIcon className="w-full h-full" />, proficiency: 85 },
  { name: "Next.js", icon: <NextjsIcon className="w-full h-full" />, proficiency: 75 },
  { name: "Node.js", icon: <NodejsIcon className="w-full h-full" />, proficiency: 70 },
  { name: "Tailwind CSS", icon: <TailwindCssIcon className="w-full h-full" />, proficiency: 90 },
  { name: "Advanced C", icon: <CIcon className="w-full h-full" />, proficiency: 65 },
  { name: "Core Java", icon: <CoreJavaIcon className="w-full h-full" />, proficiency: 75 },
  { name: "MongoDB", icon: <MongodbIcon className="w-full h-full" />, proficiency: 60 },
  { name: "SQL", icon: <SqlIcon className="w-full h-full" />, proficiency: 70 },
  { name: "Git", icon: <Github className="w-full h-full" />, proficiency: 80 },
]

export function SkillsSection() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A collection of technologies and tools I am proficient with. I'm always eager to learn more.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} proficiency={skill.proficiency} />
        ))}
      </div>
    </Section>
  )
}
