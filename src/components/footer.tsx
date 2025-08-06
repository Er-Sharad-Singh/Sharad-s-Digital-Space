import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-card">
      <Separator />
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 px-4 py-6 text-center">
        <div className="text-sm text-muted-foreground">
          <p>Developed by Er. Sharad Singh</p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
