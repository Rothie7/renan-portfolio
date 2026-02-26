import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Github, Linkedin, Menu } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
            Renan<span className="text-primary">.dev</span>
          </a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a href="https://github.com/Rothie7" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hidden sm:inline-flex">
            <a href="https://www.linkedin.com/in/renan-fernandes-355176187/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[280px]">
          <SheetHeader>
            <SheetTitle className="text-left">
              Renan<span className="text-primary">.dev</span>
            </SheetTitle>
            <SheetDescription className="sr-only">Navigation menu</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col gap-4 px-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-primary py-2",
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-border/40">
              <a href="https://github.com/Rothie7" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/renan-fernandes-355176187/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
