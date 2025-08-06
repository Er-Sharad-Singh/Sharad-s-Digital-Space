import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with a modern UI, product catalog, shopping cart, and checkout process, built with Next.js and Stripe.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "abstract technology",
    githubUrl: "https://github.com/sharad-2003/E-commerce",
    liveUrl: "https://aesthetic-eclair-5c5553.netlify.app",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "modern ui",
    githubUrl: "https://github.com/sharad-2003/Task-Management",
    liveUrl: "https://transcendent-vacherin-8e390a.netlify.app",
  },
  {
    title: "Portfolio Website V1",
    description: "My previous personal portfolio website, designed to be clean, simple, and responsive. Built with pure HTML, CSS, and JavaScript.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "minimalist design",
    githubUrl: "https://github.com/sharad-2003/Portfolio",
    liveUrl: "https://sharad-2003.github.io/Portfolio",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets using D3.js and React, providing insightful charts and graphs.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "data chart",
    githubUrl: "#",
    liveUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <Section id="projects" className="bg-card">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  )
}
