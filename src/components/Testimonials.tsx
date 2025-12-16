'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Quote, Linkedin } from 'lucide-react';

const testimonials = [
    {
        name: 'John Doe',
        role: 'CEO at TechCorp',
        text: 'Antonio is a fantastic developer who delivered our project on time and with excellent quality. Highly recommended!',
        platform: 'linkedin'
    },
    {
        name: 'Jane Smith',
        role: 'Product Manager',
        text: 'Great communication and technical skills. He solved complex problems in our backend very efficiently.',
        platform: 'linkedin'
    }
];

export default function Testimonials() {
    const { t } = useLanguage();

    return (
        <section id="testimonials" className="py-20 bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.testimonials.title}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl border border-white/5 relative shadow-lg"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-primary/20" />

                            <p className="text-lg text-muted-foreground mb-6 italic">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">{item.role}</p>
                                </div>
                                {item.platform === 'linkedin' && (
                                    <Linkedin className="w-5 h-5 text-[#0077b5] ml-auto" />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
