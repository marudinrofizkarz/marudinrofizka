import { GraduationCap, School, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const educationData = [
  {
    year: "2013 - 2020",
    degree: "Information Technology",
    university: "Budiluhur University",
    description: "Focused on Software Engineering and Web Development",
    tags: ["Web Development", "Software Engineering"],
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
  },
  {
    year: "2008 - 2012",
    degree: "Madrasah Aliyah",
    university: "MA Daarul - Qoori'in",
    description: "General Education with focus on Islamic Education and leadership",
    tags: ["Islamic Education", "Leadership"],
    icon: <School className="w-8 h-8 text-primary" />,
  },
  {
    year: "2005 - 2008",
    degree: "Junior High School",
    university: "SMP Negeri 3 Maja",
    description: "General Education with focus on Computer and Science",
    tags: ["Computer", "Science"],
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="container space-y-8 py-12 md:py-24 animate-in fade-in-up duration-1000">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Education Journey
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {educationData.map((edu, index) => (
          <div key={edu.degree} className="animate-in fade-in-up duration-500" style={{ animationDelay: `${index * 150}ms`}}>
            <Card className="flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    {edu.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <span className="text-sm text-muted-foreground">{edu.year}</span>
                <CardTitle className="font-headline mt-2 text-xl">{edu.degree}</CardTitle>
                <p className="text-muted-foreground font-medium">{edu.university}</p>
                <CardDescription className="mt-4 flex-grow">{edu.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
