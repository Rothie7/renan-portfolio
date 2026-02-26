import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Server, Bot } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:slug");
  const slug = params?.slug;

  const projects = {
    rotieh: {
      title: "Rotieh - AI OS for Business",
      description: "A comprehensive business management platform designed to automate and optimize enterprise workflows. Built with a focus on scalability, security, and intelligent automation.",
      fullDescription: `Rotieh is an advanced AI Operating System for business management, featuring a robust backend architecture with 8 distinct DDD domains:
- Customer Service (Leads, Clients, Quotes)
- Finance (Accounting, Payroll, Taxes, Payments)
- Fiscal (Invoices, Receipts)
- Marketing (Meta/Facebook Ads, Campaigns)
- Operations (Products, Inventory)
- HR (Employees, Onboarding)
- Intelligence (AI Agents, Orchestration)
- Business Intelligence (Dashboards, Analytics)

The system includes over 1025 automated tests ensuring reliability and zero regressions. It integrates seamlessly with major platforms like Meta, Mercado Pago, PayPal, and WhatsApp using OAuth 2.0 and secure webhooks.`,
      tags: ["Node.js", "Express", "SQLite", "DDD", "TDD", "OAuth", "AI", "Microservices", "Event-Driven"],
      githubUrl: "https://github.com/Rothie7/Rotiehproject",
      icon: Server,
      features: [
        "Multi-tenancy architecture with complete data isolation",
        "Secure authentication via OAuth 2.0 and JWT",
        "Advanced encryption (AES-256-GCM) for sensitive data",
        "Real-time event processing and webhook handling",
        "Automated financial reporting (DRE, Balance Sheet)",
        "AI-driven lead scoring and quotation generation"
      ]
    },
    amora: {
      title: "Amora - Intelligent Assistant",
      description: "An advanced AI assistant designed to automate business tasks and provide intelligent insights. Built with a modern stack and local LLM integration.",
      fullDescription: `Amora is a sophisticated AI assistant that leverages Large Language Models (LLMs) to perform complex reasoning and task execution. It features a ReAct (Reasoning + Acting) engine that allows it to break down problems and execute multi-step workflows.

Key architectural components include:
- Tool Registry: A modular system for registering and managing capabilities.
- Gateway: A security layer for sanitizing inputs and outputs.
- Runtime: The core execution engine managing context and state.
- Local LLM: Integration with Ollama for privacy-focused, local inference.`,
      tags: ["TypeScript", "Express", "PostgreSQL", "Redis", "LLM", "ReAct", "Ollama", "Docker"],
      githubUrl: "https://github.com/Rothie7/Amora",
      icon: Bot,
      features: [
        "ReAct engine for complex task reasoning",
        "Local LLM support via Ollama for data privacy",
        "Modular tool registry for easy extensibility",
        "Secure gateway for input/output sanitization",
        "Redis-based caching for high performance",
        "Dockerized deployment for consistency"
      ]
    }
  };

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <Layout>
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Link href="/projects">
            <Button className="mt-8">Back to Projects</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const IconComponent = project.icon;

  return (
    <Layout>
      <article className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container space-y-16">
          <div className="space-y-8">
            <Link href="/projects">
              <Button variant="ghost" className="pl-0 hover:pl-2 transition-all">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
              </Button>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2">
                      <Github className="h-5 w-5" /> View Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-primary/10 via-card to-primary/5 shadow-2xl flex items-center justify-center">
            <IconComponent className="h-24 w-24 text-primary/30" />
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
              <div className="prose prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                {project.fullDescription}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Key Features</h2>
              <ul className="space-y-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
