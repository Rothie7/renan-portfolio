# Renan Fernandes — Backend Developer Portfolio

Personal portfolio showcasing my backend development work, built with React, TypeScript, and Tailwind CSS.

**Live:** [rothie7.github.io/renan-portfolio](https://rothie7.github.io/renan-portfolio/)

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Routing:** Wouter
- **Animations:** Framer Motion
- **Build:** Vite 7
- **Deploy:** GitHub Pages via GitHub Actions

## Featured Projects

### Rotieh — AI OS for Business
A comprehensive business management platform with 8 DDD domains, 1025+ automated tests, and AI-driven insights.
Multi-tenancy, OAuth 2.0, and secure payment integrations.

### Amora — Intelligent Assistant
An advanced AI assistant built with TypeScript and Express, featuring a ReAct engine, local LLM integration via Ollama, and a modular tool registry for business automation.

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build:pages

# Preview production build
pnpm preview
```

## Project Structure

```
client/
  src/
    components/   # Reusable UI components (Header, Footer, Hero, etc.)
    pages/        # Route pages (Home, Projects, About, Contact)
    contexts/     # Theme context provider
    hooks/        # Custom React hooks
    lib/          # Utility functions
    components/ui/ # shadcn/ui component library
server/           # Express server for production (optional)
shared/           # Shared constants
```

## Deploy

Pushes to `main` automatically trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.

## Contact

- **Email:** renanfernandes@poli.ufrj.br
- **LinkedIn:** [linkedin.com/in/renan-fernandes](https://linkedin.com/in/renan-fernandes)
- **GitHub:** [github.com/Rothie7](https://github.com/Rothie7)

## License

MIT
