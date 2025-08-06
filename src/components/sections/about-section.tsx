import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { Section } from "@/components/section"

export function AboutSection() {
  return (
    <Section id="about" className="bg-card">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            I'm a passionate and detail-oriented developer with a knack for bringing ideas to life through code. With a background in computer science and a love for design, I specialize in crafting seamless user interfaces and robust back-end systems.
          </p>
          <p className="text-muted-foreground md:text-lg">
            When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          <Button asChild size="lg" className="w-fit">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Portrait of Jane Doe"
              width={400}
              height={400}
              className="rounded-full object-cover shadow-lg border-4 border-primary/20"
              data-ai-hint="portrait person"
            />
        </div>
      </div>
    </Section>
  )
}
