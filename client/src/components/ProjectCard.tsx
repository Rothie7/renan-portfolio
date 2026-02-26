import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, Server, Bot } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  slug: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  demoUrl,
  slug,
}: ProjectCardProps) {
  const Icon = slug === "amora" ? Bot : Server;

  return (
    <Card className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-primary/10 via-card to-primary/5 flex items-center justify-center">
        <Icon className="h-16 w-16 text-primary/30 transition-transform duration-500 group-hover:scale-110" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold tracking-tight">{title}</CardTitle>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <CardDescription className="line-clamp-2 text-muted-foreground/80">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50 text-secondary-foreground/90 hover:bg-secondary/80">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/projects/${slug}`}>
          <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
