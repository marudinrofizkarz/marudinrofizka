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
    title: "QuantumLeap CRM",
    description: "An intelligent CRM platform for optimizing customer relationships.",
    longDescription: "QuantumLeap CRM is a comprehensive customer relationship management platform designed to help businesses of all sizes manage their interactions with current and potential customers. It features lead tracking, sales pipeline management, and detailed analytics.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "AI"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "futuristic user interface"
  },
  {
    title: "AetherFlow Analytics",
    description: "A data visualization tool that turns complex data into clear insights.",
    longDescription: "AetherFlow Analytics provides an intuitive interface for users to upload, process, and visualize complex datasets. With a variety of chart types and interactive dashboards, it empowers users to uncover trends and make data-driven decisions.",
    tags: ["React", "D3.js", "Node.js", "GraphQL"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "data visualization"
  },
  {
    title: "NovaPost Social",
    description: "A decentralized social media platform focused on user privacy.",
    longDescription: "NovaPost Social is a next-generation social network built on decentralized principles. It gives users full control over their data and content, free from central algorithms. It includes features like encrypted messaging and content ownership verification.",
    tags: ["Blockchain", "Solid.js", "IPFS", "Web3"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "social media network"
  },
  {
    title: "StellarShip E-commerce",
    description: "A high-performance e-commerce solution for online retailers.",
    longDescription: "StellarShip is a headless e-commerce platform that offers blazing-fast performance and unlimited customization. It integrates with modern frontend frameworks and provides a robust backend for inventory management, order processing, and payments.",
    tags: ["Shopify", "React", "Hydrogen", "Headless"],
    image: "https://placehold.co/600x400.png",
    dataAiHint: "e-commerce modern"
  },
];


export default function Projects() {
  return (
    <section id="projects" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">My Creations</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Here are some of the projects I'm proud to have worked on. Each one represents a challenge I was excited to tackle.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
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
