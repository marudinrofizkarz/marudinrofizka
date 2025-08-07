import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Marudin Rofizka. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/marudinrofizka" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/marudin-rofizka-4b31b1115/" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <Twitter className="h-6 w-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
