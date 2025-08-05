import { ContactForm } from "./contact-form";

export default function Contact() {
  return (
    <section id="contact" className="container space-y-8 py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-headline text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Have a question or want to work together? Feel free to reach out. I'm always open to discussing new projects and opportunities.
        </p>
      </div>
      <div className="mx-auto max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
