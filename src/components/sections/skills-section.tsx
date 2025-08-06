import { Section } from "@/components/section"
import { SkillCard } from "@/components/skill-card"
import { Html5Icon } from "@/components/icons/html5-icon"
import { Css3Icon } from "@/components/icons/css3-icon"
import { JavascriptIcon } from "@/components/icons/javascript-icon"
import { TypescriptIcon } from "@/components/icons/typescript-icon"
import { ReactIcon } from "@/components/icons/react-icon"
import { NextjsIcon } from "@/components/icons/nextjs-icon"
import { NodejsIcon } from "@/components/icons/nodejs-icon"
import { TailwindCssIcon } from "@/components/icons/tailwind-css-icon"
import { FigmaIcon } from "@/components/icons/figma-icon"

const skills = [
  { name: "HTML5", icon: <Html5Icon className="w-full h-full" /> },
  { name: "CSS3", icon: <Css3Icon className="w-full h-full" /> },
  { name: "JavaScript", icon: <JavascriptIcon className="w-full h-full" /> },
  { name: "TypeScript", icon: <TypescriptIcon className="w-full h-full" /> },
  { name: "React", icon: <ReactIcon className="w-full h-full" /> },
  { name: "Next.js", icon: <NextjsIcon className="w-full h-full" /> },
  { name: "Node.js", icon: <NodejsIcon className="w-full h-full" /> },
  { name: "Tailwind CSS", icon: <TailwindCssIcon className="w-full h-full" /> },
  { name: "Figma", icon: <FigmaIcon className="w-full h-full" /> },
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
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </Section>
  )
}
