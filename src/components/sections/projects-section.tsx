import { Section } from "@/components/section"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Clicket : Be There or Make It Happen",
    description: "Clicket is a web-based event ticket booking application that allows users to browse events and book tickets through a simple and responsive interface.The project focuses on frontend usability, smooth booking flow, and modern UI design using web technologies.",
    imageUrl: "https://res.cloudinary.com/dh7cy576e/image/upload/v1768018359/clicket_overview_gt6ze5.png",
    imageHint: "abstract technology",
    githubUrl: "https://github.com/Er-Sharad-Singh/clicket",
    liveUrl: "https://ticketwithclicket.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using Firebase.",
    imageUrl: "https://res.cloudinary.com/dh7cy576e/image/upload/v1768018784/Screenshot_2026-01-10_094626_eyqoyy.png",
    imageHint: "modern ui",
    githubUrl: "https://github.com/Er-Sharad-Singh/To-Do-List-Web-Application",
    liveUrl: "https://er-sharad-singh.github.io/To-Do-List-Web-Application/",
  },
  {
    title: "Myntra Clone",
    description: "Myntra Clone is a frontend e-commerce web application that replicates core shopping features of Myntra using HTML, CSS, and JavaScript, with LocalStorage used to manage cart data and user selections. The project supports product listing, add-to-cart functionality, quantity updates, and persistent cart state across page reloads without using a backend.",
    imageUrl: "https://res.cloudinary.com/dh7cy576e/image/upload/v1768018786/Screenshot_2026-01-10_094516_v39f9c.png",
    imageHint: "minimalist design",
    githubUrl: "https://github.com/Er-Sharad-Singh/Myntra_Functional_Clone",
    liveUrl: "https://er-sharad-singh.github.io/Myntra_Functional_Clone/",
  },
  {
    title: "Learning Project of Bootstrap",
    description: "An interactive dashboard using Bootstrap.",
    imageUrl: "https://res.cloudinary.com/dh7cy576e/image/upload/v1768018785/Screenshot_2026-01-10_094434_ntjanc.png",
    imageHint: "dashboard",
    githubUrl: "https://github.com/Er-Sharad-Singh/bootstrap-project",
    liveUrl: " https://er-sharad-singh.github.io/bootstrap-project/",
  },
  {
    title: "Basic Cricket Game",
    description: "Trying to use logic and built a basic game.",
    imageUrl: "https://res.cloudinary.com/dh7cy576e/image/upload/v1768018802/Screenshot_2026-01-10_094648_syo9ul.png",
    imageHint: "dashboard",
    githubUrl: "https://github.com/Er-Sharad-Singh/Simple-Cricket-Game---HTML-CSS-and-JavaScript",
    liveUrl: "https://er-sharad-singh.github.io/Simple-Cricket-Game---HTML-CSS-and-JavaScript/",
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
