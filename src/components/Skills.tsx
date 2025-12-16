'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Code, Database, Server, Smartphone, Layout, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

const skillCategories = [
    {
        name: 'Frontend',
        icon: Layout,
        skills: ['React.js', 'Next.js', 'Angular', 'Tailwind CSS', 'Electron'],
        color: 'text-blue-400'
    },
    {
        name: 'Backend',
        icon: Server,
        skills: ['Node.js', 'Express', 'Prisma', 'APIs REST'],
        color: 'text-green-400'
    },
    {
        name: 'Database',
        icon: Database,
        skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
        color: 'text-yellow-400'
    },
    {
        name: 'Mobile',
        icon: Smartphone,
        skills: ['React Native', 'Expo'],
        color: 'text-purple-400'
    },
    {
        name: 'Tools & DevOps',
        icon: Terminal,
        skills: ['Git', 'Linux', 'CI/CD Concepts', 'Clean Architecture'],
        color: 'text-orange-400'
    }
];

export default function Skills() {
    const { t } = useLanguage();

    return (
        <section id="skills" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card hover:bg-card/80 border border-white/5 p-6 rounded-2xl shadow-lg transition-all hover:scale-[1.02] hover:shadow-primary/10"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={cn("p-3 rounded-lg bg-white/5", category.color)}>
                                    <category.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">{category.name}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
