'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send, Code, Volume2 } from 'lucide-react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section id="hero" className="container grid md:grid-cols-2 place-items-center gap-10 py-20 md:py-32">
      <div className="flex flex-col items-start gap-4 text-left order-2 md:order-1 animate-in fade-in-up duration-500">
        <div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Marudin Rofizka
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground mt-2">
            <Typewriter
              words={['Web Developer', 'Digital Marketing Specialist', 'IT Professional']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h3>
        </div>
        <div className="delay-200">
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Transforming Ideas into Digital Success Stories
          </p>
        </div>
        <div className="flex items-center gap-4 delay-300">
          <Link href="https://github.com/marudinrofizka" target="_blank" rel="noreferrer">
            <Github className="h-7 w-7 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/marudin-rofizka-9a892b109/" target="_blank" rel="noreferrer">
            <Linkedin className="h-7 w-7 hover:text-primary transition-colors" />
          </Link>
        </div>
        <div className="delay-400 mt-2">
          <Button asChild size="lg">
            <Link href="#contact">
              Contact Me <Send className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 animate-in fade-in-up duration-500 delay-100">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute inset-4 bg-primary/30 rounded-full animate-pulse-slow animation-delay-200"></div>
          <div className="absolute inset-8 flex items-center justify-center">
            <Image 
              src="https://marudinrofizka.github.io/images/profile.jpg"
              alt="Marudin Rofizka"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square"
              data-ai-hint="profile picture"
              priority
            />
          </div>
          <div className="absolute top-10 -right-2 md:top-16 md:-right-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center animate-float animation-delay-500">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute bottom-10 -left-2 md:bottom-16 md:-left-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center animate-float animation-delay-800">
            <Volume2 className="h-8 w-8 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
