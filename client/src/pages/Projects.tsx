import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";

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
    <Layout>
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container space-y-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              All Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore my complete portfolio of backend development and AI integration projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
