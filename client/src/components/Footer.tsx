import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Link href="/">
            <a className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              Renan<span className="text-primary">.dev</span>
            </a>
          </Link>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Renan Fernandes. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Rothie7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/renan-fernandes-355176187/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:renanfernandes@poli.ufrj.br" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
