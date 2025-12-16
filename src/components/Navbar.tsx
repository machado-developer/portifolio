'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
// import ReactCountryFlag from 'react-country-flag'; 
// Commenting out external lib until confirmed installed. Using Emoji for robustness in first pass.

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.projects, href: '#projects' },
        { name: t.nav.testimonials, href: '#testimonials' },
        { name: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-background/80 backdrop-blur-md border-b border-white/10 shadow-lg'
                    : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center gap-2">
                            <img
                                src="https://placehold.co/100x40/7c3aed/FFF?text=AU+Dev"
                                alt="Antonio Ulundo Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                            <button
                                onClick={() => setLanguage('pt')}
                                className={cn("p-1.5 rounded-full transition-all", language === 'pt' ? "bg-white/10 scale-110 shadow-sm" : "opacity-50 hover:opacity-100")}
                                title="Português"
                            >
                                <span className="text-lg">🇵🇹</span>
                            </button>
                            <button
                                onClick={() => setLanguage('en')}
                                className={cn("p-1.5 rounded-full transition-all", language === 'en' ? "bg-white/10 scale-110 shadow-sm" : "opacity-50 hover:opacity-100")}
                                title="English"
                            >
                                <span className="text-lg">🇬🇧</span>
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 mt-4 px-3">
                            <button
                                onClick={() => { setLanguage('pt'); setIsOpen(false); }}
                                className={cn("flex items-center gap-2 px-3 py-2 rounded-md border border-white/10", language === 'pt' ? "bg-primary/20 border-primary" : "")}
                            >
                                <span className="text-xl">🇵🇹</span> PT
                            </button>
                            <button
                                onClick={() => { setLanguage('en'); setIsOpen(false); }}
                                className={cn("flex items-center gap-2 px-3 py-2 rounded-md border border-white/10", language === 'en' ? "bg-primary/20 border-primary" : "")}
                            >
                                <span className="text-xl">🇬🇧</span> EN
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
