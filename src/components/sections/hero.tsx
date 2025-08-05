import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="container grid place-items-center gap-6 pb-8 pt-6 md:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
        <div className="animate-in fade-in-up duration-500">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Developer & Designer
          </h1>
        </div>
        <div className="animate-in fade-in-up duration-500 delay-200">
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Passionate about creating modern, responsive, and beautiful web applications that leave a lasting impression.
          </p>
        </div>
      </div>
      <div className="flex gap-4 animate-in fade-in-up duration-500 delay-300">
        <Button asChild size="lg">
          <Link href="#projects">
            View My Work <MoveRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  );
}
