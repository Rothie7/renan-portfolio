import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <section className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm always open to discussing new projects, collaborations, or opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button size="lg" className="group">
                Send Message <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:renanfernandes@poli.ufrj.br" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              renanfernandes@poli.ufrj.br
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 md:items-end">
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/renan-fernandes-355176187/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Rothie7" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Connect with me on social media for updates and insights.
          </p>
        </div>
      </div>
    </section>
  );
}
