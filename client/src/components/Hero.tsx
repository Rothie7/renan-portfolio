import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Server } from "lucide-react";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/80 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8">
        <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
          Available for new opportunities
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
          Backend Developer <br />
          <span className="text-primary">Architecting Scalable Systems</span>
        </h1>

        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I build robust, secure, and high-performance backend solutions. Specializing in Node.js, distributed systems, and AI integration.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/projects">
            <Button size="lg" className="h-12 px-8 text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg font-semibold border-primary/20 hover:bg-primary/10 hover:text-primary transition-all">
              Contact Me
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Server className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Scalable Architecture</h3>
            <p className="text-sm text-muted-foreground">Microservices & Distributed Systems</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Data Engineering</h3>
            <p className="text-sm text-muted-foreground">SQL, NoSQL & Data Pipelines</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">Clean Code</h3>
            <p className="text-sm text-muted-foreground">TDD, DDD & Best Practices</p>
          </div>
        </div>
      </div>
    </section>
  );
}
