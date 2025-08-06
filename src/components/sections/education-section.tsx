import { Section } from "@/components/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <Section id="education">
      <div className="flex flex-col items-center text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Education</h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          My academic background and qualifications.
        </p>
      </div>
      <div className="mx-auto mt-12 grid max-w-2xl">
        <Card className="group overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <CardHeader className="flex flex-row items-center gap-4">
            <GraduationCap className="w-12 h-12 text-primary" />
            <div>
              <CardTitle className="text-xl font-bold">Bachelor of Technology</CardTitle>
              <p className="text-muted-foreground">Computer Science & Engineering</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-semibold">Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
            <p className="text-sm text-muted-foreground">2022 - 2026</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
