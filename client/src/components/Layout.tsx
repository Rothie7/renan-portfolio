import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main className="pt-16 min-h-[calc(100vh-4rem)]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
