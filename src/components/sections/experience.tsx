import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "Innovatech Solutions",
    date: "2020 - Present",
    description: "Leading the development of scalable web applications using modern technologies. Mentoring junior developers and contributing to architectural decisions.",
  },
  {
    type: "work",
    title: "Software Engineer",
    company: "TechCorp",
    date: "2018 - 2020",
    description: "Developed and maintained features for a large-scale e-commerce platform. Collaborated with cross-functional teams to deliver high-quality software.",
  },
  {
    type: "education",
    title: "B.S. in Computer Science",
    company: "State University",
    date: "2014 - 2018",
    description: "Graduated with honors. Focused on algorithms, data structures, and artificial intelligence. Active in the coding club and participated in several hackathons.",
  },
];

const Icon = ({ type }: { type: string }) => {
  if (type === "work") return <Briefcase className="h-5 w-5 text-primary" />;
  return <GraduationCap className="h-5 w-5 text-primary" />;
};

export default function Experience() {
  return (
    <section id="experience" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">My Journey</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          A timeline of my professional career and educational background, highlighting key roles and accomplishments.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"></div>
        {experienceData.map((item, index) => (
          <div key={index} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="animate-in fade-in-up duration-500" style={{ animationDelay: `${index * 200}ms`}}>
                <Card className="transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.company} | {item.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background border-2 border-primary">
              <Icon type={item.type} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
