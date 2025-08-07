import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Code } from "lucide-react";

const aboutData = {
  description:
    "A results-driven Digital Marketing Specialist with over 5 years of experience in developing and executing successful marketing strategies. Combining technical expertise in IT with creative marketing solutions to deliver exceptional results.",
  tags: ["Digital Marketing", "Web Development", "IT Solutions"],
  services: [
    {
      icon: <LineChart className="w-8 h-8 text-primary" />,
      title: "Digital Strategy",
      description:
        "Expert in creating comprehensive digital marketing strategies",
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Development",
      description:
        "Proficient in Laravel, Codeigniter, and modern web technologies",
    },
  ],
};

export default function About() {
  return (
    <section id="about" className="container py-20 md:py-24 animate-in fade-in-up duration-1000">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          About Me
        </h2>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <p className="text-muted-foreground sm:text-lg">
            {aboutData.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {aboutData.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:col-span-1 lg:col-span-2 md:grid-cols-2">
          {aboutData.services.map((service) => (
            <Card
              key={service.title}
              className="flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
