import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Server } from "lucide-react";
import { Link } from "wouter";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Rotieh - AI OS for Business",
      description: "A comprehensive business management platform with 8 DDD domains, 1025+ automated tests, and AI-driven insights. Features multi-tenancy, OAuth, and secure payment integrations.",
      tags: ["Node.js", "Express", "SQLite", "DDD", "TDD", "OAuth", "AI"],
      image: "/rotieh-project.png",
      githubUrl: "https://github.com/Rothie7/meyrelles-aura-mvp",
      slug: "rotieh",
    },
    {
      title: "Amora - Intelligent Assistant",
      description: "An advanced AI assistant built with TypeScript and Express, featuring a ReAct engine, local LLM integration via Ollama, and a modular tool registry for business automation.",
      tags: ["TypeScript", "Express", "PostgreSQL", "Redis", "LLM", "ReAct"],
      image: "/amora-project.png",
      githubUrl: "https://github.com/Rothie7/Amora",
      slug: "amora",
    },
  ];

  return (
    <section className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container space-y-16">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore some of my recent work in backend development and AI integration.
            </p>
          </div>
          <Link href="/projects">
            <Button variant="ghost" className="group">
              View All Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
