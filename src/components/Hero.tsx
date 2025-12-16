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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
                            {t.hero.greeting} Antonio Ulundo
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                                {t.hero.role.split('&')[0]}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                                & {t.hero.role.split('&')[1] || 'Developer'}
                            </span>
                        </h1>

                        <p className="mt-4 text-xl text-muted-foreground mb-10">
                            {t.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
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

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative hidden md:block"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10" />
                            <img
                                src="https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/machado.jpg"
                                alt="Antonio Ulundo"
                                className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
                            />
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 -z-0 animate-bounce delay-700" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 backdrop-blur-md rounded-full border border-white/5 -z-0 animate-pulse" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
