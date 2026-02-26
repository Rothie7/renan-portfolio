import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <section className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container flex flex-col items-center gap-16 md:flex-row md:items-start md:justify-between">
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a backend developer with a passion for building scalable, high-performance systems. My journey started with a curiosity for how things work under the hood, which led me to specialize in server-side technologies, distributed systems, and cloud architecture.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently, I'm focused on developing robust APIs, optimizing database performance, and integrating AI solutions into business workflows. I believe in writing clean, maintainable code and following best practices like TDD and DDD.
          </p>
          <div className="flex gap-4">
            <Link href="/about">
              <Button variant="outline" className="group">
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent rounded-2xl blur-3xl opacity-30" />
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 bg-card/50 shadow-2xl flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-primary/40">
              <User className="h-24 w-24" />
              <span className="text-sm font-medium text-muted-foreground">Renan Fernandes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
