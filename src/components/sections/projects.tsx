'use client'

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Project 1",
    description: "A short description of the first project.",
    longDescription: "A more detailed description of the project, explaining the technologies used and the problems it solves.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "modern web application"
  },
  {
    title: "Project 2",
    description: "A short description of the second project.",
    longDescription: "A more detailed description of the project, explaining the technologies used and the problems it solves.",
    tags: ["React", "Node.js", "Express"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "dashboard analytics"
  },
  {
    title: "Project 3",
    description: "A short description of the third project.",
    longDescription: "A more detailed description of the project, explaining the technologies used and the problems it solves.",
    tags: ["Vue.js", "Firebase", "Vuetify"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "e-commerce user interface"
  },
];


export default function Projects() {
  return (
    <section id="projects" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Portfolio</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Most recent work
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Dialog key={project.title}>
            <DialogTrigger asChild>
              <div className="animate-in fade-in-up duration-500 delay-200" style={{ animationDelay: `${index * 150}ms`}}>
                <Card className="group overflow-hidden rounded-lg transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        data-ai-hint={project.dataAiHint}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-xl font-bold font-headline mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </CardFooter>
                </Card>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <div className="aspect-video overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    data-ai-hint={project.dataAiHint}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <DialogTitle className="text-2xl font-headline">{project.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <DialogDescription className="pt-4 text-base">
                  {project.longDescription}
                </DialogDescription>
              </DialogHeader>
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
