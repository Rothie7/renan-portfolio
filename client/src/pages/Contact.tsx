import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
  return (
    <Layout>
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Contact Me
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl">
              I'm always open to discussing new projects, collaborations, or opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:renanfernandes@poli.ufrj.br" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                renanfernandes@poli.ufrj.br
              </a>
              <a href="https://www.linkedin.com/in/renan-fernandes-355176187/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                linkedin.com/in/renan-fernandes-355176187
              </a>
              <a href="https://github.com/Rothie7" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                github.com/Rothie7
              </a>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-2xl blur-3xl opacity-30" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl flex items-center justify-center">
              <Mail className="h-32 w-32 text-primary/50" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
