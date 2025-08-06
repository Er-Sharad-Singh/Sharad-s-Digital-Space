import { AnimatedText } from "@/components/animated-text"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HomeSection() {
  const roles = ["Web Developer", "Programmer", "UI/UX Enthusiast"]

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center text-center"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-muted-foreground">Hello, I'm </span>
              <span className="text-primary">Jane Doe</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              I am a <AnimatedText roles={roles} className="font-semibold text-accent-foreground" />
            </p>
          </div>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Welcome to my digital canvas where I showcase my passion for creating beautiful and functional web experiences.
          </p>
          <a href="#about">
            <Button variant="outline" size="lg" className="mt-4">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
