import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Server, GraduationCap, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="container space-y-16">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Me
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-3xl">
              I'm Renan Fernandes, a backend developer based in Rio de Janeiro, Brazil. I specialize in building robust, scalable, and secure backend systems using modern technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <Code className="h-6 w-6 text-primary" /> Technical Skills
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Backend Development</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Node.js & Express</li>
                    <li>RESTful APIs</li>
                    <li>Microservices</li>
                    <li>Event-Driven Architecture</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Database & Storage</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>SQL (SQLite, PostgreSQL)</li>
                    <li>NoSQL (Redis)</li>
                    <li>Data Modeling</li>
                    <li>Query Optimization</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Security & Auth</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>OAuth 2.0</li>
                    <li>JWT & Session Management</li>
                    <li>Data Encryption (AES-256)</li>
                    <li>Secure Coding Practices</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">DevOps & Tools</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Git & GitHub</li>
                    <li>Docker & Containers</li>
                    <li>CI/CD Pipelines</li>
                    <li>TDD & Automated Testing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" /> Education
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Master's in Materials Engineering</h3>
                  <p className="text-muted-foreground">Universidade Federal do Rio de Janeiro (UFRJ) | 2024 - Present</p>
                  <p className="text-sm text-muted-foreground">Focus on advanced materials and applied research.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Bachelor's in Nanotechnology</h3>
                  <p className="text-muted-foreground">Universidade Federal do Rio de Janeiro (UFRJ) | 2019 - 2024</p>
                  <p className="text-sm text-muted-foreground">Foundation in scientific method, precision, and problem-solving.</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2 pt-8">
                <Briefcase className="h-6 w-6 text-primary" /> Experience
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Backend Developer (Rotieh)</h3>
                  <p className="text-muted-foreground">2025 - Present</p>
                  <p className="text-sm text-muted-foreground">Developing a comprehensive business management platform with 8 DDD domains and 1025+ automated tests.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Researcher (LIMC - UFRJ)</h3>
                  <p className="text-muted-foreground">2020 - 2024</p>
                  <p className="text-sm text-muted-foreground">Research on polyaniline and conductive carbon properties.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
