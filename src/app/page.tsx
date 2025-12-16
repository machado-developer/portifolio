import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-dark-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />

      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-white/5 bg-background">
        <p>&copy; {new Date().getFullYear()} Antonio Ulundo. All rights reserved.</p>
      </footer>
    </main>
  );
}
