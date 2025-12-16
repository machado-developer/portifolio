'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                        {t.hero.greeting} Antonio Ulundo
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {t.hero.role.split('&')[0]}
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            & {t.hero.role.split('&')[1] || 'Developer'}
                        </span>
                    </h1>

                    <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        {t.hero.description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary rounded-full overflow-hidden transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                        >
                            {t.hero.ctaPrimary}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            {t.hero.ctaSecondary}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
