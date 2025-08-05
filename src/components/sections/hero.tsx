import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="container grid md:grid-cols-2 place-items-center gap-10 py-20 md:py-32">
      <div className="flex flex-col items-start gap-4 text-left order-2 md:order-1">
        <div className="animate-in fade-in-up duration-500">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Marudin Rofizka
          </h1>
          <h3 className="text-xl md:text-2xl text-muted-foreground mt-2">Web Developer</h3>
        </div>
        <div className="animate-in fade-in-up duration-500 delay-200">
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            High level experience in web design and development knowledge, producing quality work.
          </p>
        </div>
        <div className="flex items-center gap-4 animate-in fade-in-up duration-500 delay-300">
          <Link href="https://github.com/marudinrofizka" target="_blank" rel="noreferrer">
            <Github className="h-7 w-7 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/marudin-rofizka-9a892b109/" target="_blank" rel="noreferrer">
            <Linkedin className="h-7 w-7 hover:text-primary transition-colors" />
          </Link>
        </div>
        <div className="animate-in fade-in-up duration-500 delay-400 mt-2">
          <Button asChild size="lg">
            <Link href="#contact">
              Contact Me <Send className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="order-1 md:order-2 animate-in fade-in-up duration-500 delay-100">
        <Image 
          src="https://placehold.co/400x400.png"
          alt="Marudin Rofizka"
          width={400}
          height={400}
          className="rounded-full"
          data-ai-hint="profile picture"
        />
      </div>
    </section>
  );
}
