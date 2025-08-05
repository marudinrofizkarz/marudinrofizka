import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="container grid md:grid-cols-2 place-items-center gap-10 py-20 md:py-24">
      <div className="animate-in fade-in-up duration-500">
        <Image 
          src="https://placehold.co/400x400.png"
          alt="About Marudin Rofizka"
          width={400}
          height={400}
          className="rounded-lg"
          data-ai-hint="person coding"
        />
      </div>
      <div className="flex flex-col items-start gap-4 text-left animate-in fade-in-up duration-500 delay-200">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
        <p className="text-muted-foreground sm:text-lg">
          Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.
        </p>
        <Button asChild size="lg">
          <Link href="#">
            Download CV <Download className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
