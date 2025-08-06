import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SkillCardProps {
  icon: React.ReactNode
  name: string
  proficiency: number
}

const CircularProgress = ({
  proficiency,
  size = 80,
  strokeWidth = 6,
}: {
  proficiency: number
  size?: number
  strokeWidth?: number
}) => {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (proficiency / 100) * circumference

  const getProficiencyColor = (p: number) => {
    if (p >= 90) return "text-green-500"
    if (p >= 70) return "text-orange-500"
    return "text-red-500"
  }
  
  const proficiencyColor = getProficiencyColor(proficiency)

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
      <circle
        className="text-border"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className={cn("transition-all duration-500 ease-out", proficiencyColor)}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  )
}

export function SkillCard({ icon, name, proficiency }: SkillCardProps) {
    const getProficiencyColor = (p: number) => {
        if (p >= 90) return "text-green-500"
        if (p >= 70) return "text-orange-500"
        return "text-red-500"
    }

    const proficiencyColor = getProficiencyColor(proficiency)

  return (
    <Card className="group flex flex-col items-center justify-center p-4 transition-all duration-300 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
        <div className="relative h-20 w-20">
          <CircularProgress proficiency={proficiency} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-12 w-12 text-primary/80 transition-colors group-hover:text-primary">
              {icon}
            </div>
          </div>
        </div>
        <p className="font-semibold text-center">{name}</p>
        <p className={cn("text-sm font-bold", proficiencyColor)}>{proficiency}%</p>
      </CardContent>
    </Card>
  )
}
