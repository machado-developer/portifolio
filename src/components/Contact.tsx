'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.contact.title}</h2>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@antonioulundo.com"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                            <Mail className="w-5 h-5" />
                            {t.contact.email}
                        </a>

                        <a
                            href="https://linkedin.com/in/antonioulundo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#0077b5]/90 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,119,181,0.3)]"
                        >
                            <Linkedin className="w-5 h-5" />
                            {t.contact.linkedin}
                        </a>
                    </div>

                    <div className="mt-12 p-8 bg-card border border-white/5 rounded-2xl max-w-md mx-auto">
                        <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2">
                            <Send className="w-4 h-4 text-primary" />
                            Quick Message
                        </h3>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary outline-none transition-colors"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-background border border-white/10 focus:border-primary outline-none transition-colors resize-none"
                            />
                            <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors">
                                Send
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
