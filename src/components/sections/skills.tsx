import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server } from "lucide-react";

const frontendSkills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"];
const backendSkills = ["Node.js", "Express", "Python", "Django", "PHP", "MySQL", "MongoDB"];

export default function Skills() {
  return (
    <section id="skills" className="container space-y-12 py-12 md:py-24 bg-secondary/50">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          My technical level
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader className="items-center">
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <Code className="h-8 w-8 text-primary" />
              Frontend Developer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <div key={skill} className="flex flex-col items-center gap-1">
                  <span className="font-semibold">{skill}</span>
                  <span className="text-sm text-muted-foreground">Intermediate</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="items-center">
            <CardTitle className="flex items-center gap-2 font-headline text-2xl">
              <Server className="h-8 w-8 text-primary" />
              Backend Developer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <div key={skill} className="flex flex-col items-center gap-1">
                  <span className="font-semibold">{skill}</span>
                  <span className="text-sm text-muted-foreground">Intermediate</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
