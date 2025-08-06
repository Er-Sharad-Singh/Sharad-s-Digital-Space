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
            I'm a passionate and detail-oriented MERN Stack Developer with a strong foundation in computer science. I love building smooth, responsive user interfaces and continuously expanding my skills in creating scalable and efficient back-end systems.
          </p>
          <p className="text-muted-foreground md:text-lg">
            I’m currently focused on mastering full-stack web development using MongoDB, Express.js, React, and Node.js. Beyond coding, I enjoy keeping up with the latest tech trends, contributing to open-source communities, and recharging with a good cup of coffee.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Always curious, always learning — I’m driven by the challenge of turning ideas into impactful digital experiences.
          </p>
          <Button asChild size="lg" className="w-fit">
            <a href="/Sharad_Singh.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-center">
            <Image
              src="/about.jpeg"
              alt="Portrait of Sharad Singh"
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
