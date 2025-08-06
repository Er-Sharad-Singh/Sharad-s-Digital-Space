import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import type { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  imageHint: string
  githubUrl: string
  liveUrl: string
}

export function ProjectCard({ title, description, imageUrl, imageHint, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative h-56 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 p-4">
            <CardTitle className="text-xl font-bold text-primary-foreground">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-end gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
        <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
