import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
}

export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <Card className="group flex flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
        <div className="h-16 w-16 text-primary transition-colors group-hover:text-accent-foreground">
          {icon}
        </div>
        <p className="font-semibold text-center">{name}</p>
      </CardContent>
    </Card>
  )
}
