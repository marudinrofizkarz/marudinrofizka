import { Mail, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Contact Me</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Get in touch
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Mail className="h-10 w-10 text-primary" />
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-muted-foreground">marudin.rofizka@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="h-10 w-10 text-primary" />
            <div>
              <h3 className="text-xl font-bold">WhatsApp</h3>
              <p className="text-muted-foreground">+62 822-8412-9269</p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
