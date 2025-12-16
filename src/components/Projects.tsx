'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorPlay } from 'lucide-react';
import { cn } from '@/lib/utils';

// This data could move to content object if translation needed per project, 
// strictly keeping it here for simplicity or 'projects.ts' as planned.
// For now, embedding as it's static structure.
const projectList = [
    {
        image: "https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/rm.jpeg",
        title: "Resolvemais web",
        description: "plataforma de busca de prestadores de serviços",
        tags: ["Next.js", "React", "Node.js", "MySQL", "Prisma", "Json web tokens", "git Workflow", "CI/CD", "Jobs background..."],
        status: "Live",
        links: { demo: "https://resolvemais.ao", github: "#" }
    },
    {
        image: "https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/rm.jpeg",
        title: "Resolvemais Mobile",
        description: "aplicação mobile de busca de prestadores de serviços",
        tags: ["Next.js", "React", "Node.js", "MySQL", "Prisma", "Json web tokens", "git Workflow", "CI/CD", "Jobs background..."],
        status: "Live",
        links: { demo: "https://resolvemis.ao", github: "#" }
    },

    {
        image: "https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/sgi.jpeg",
        title: 'SGI',
        description: 'Sistema de gestão empresarial completo para otimização de processos internos(vistos).',
        tags: ['React/Nextjs', 'Node.js', 'MySQL', 'Prisma', "Json web tokens", "git Workflow", "CI/CD", "Jobs background..."],
        status: 'Live',
        links: { demo: 'https://sgi.mos.ao', github: '#' }
    },
    {
        image: "https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/nt.jpeg",
        title: 'Sistema de Faturação (SAF-T AO)',
        description: 'Software certificado para emissão de faturas e comunicação com AGT.',
        tags: ['React/Nextjs', 'Node.js', 'MySQL', "Json web tokens", 'Prisma', "git Workflow", "CI/CD", "Jobs background..."],

        status: 'Live',
        links: { demo: 'https://nextech-new.vercel.app/', github: '#' }
    },
    {
        image: "",
        title: 'Libras AI Recognition',
        description: 'Sistema de reconhecimento de linguagem de sinais utilizando Inteligência Artificial.',
        tags: ['Python', 'TensorFlow', 'React'],
        status: 'Prototype (Private)',
        links: { demo: '#', github: '#' }
    },
    {
        image: "",
        title: 'ED',
        description: ' sistema de reconhecimento de emoções',
        tags: ["Javascript", "TensorFlow", "Media handMediaPipe"],
        status: 'Prototype (Private)',
        links: { demo: '#', github: '#' }
    },
    {
        image: "https://raw.githubusercontent.com/machado-developer/portifolio/refs/heads/main/public/st.jpeg",
        title: 'Sleny Tube',
        description: 'Plataforma desktop para download de playlists do YouTube.(pagina do app + app)',
        tags: ['Next.js', "Electron", "fmpeg", "yt_dlp", "python"],

        status: 'Live',
        links: { demo: 'https://slenytube.vercel.app/', github: 'https://github.com/machado-developer/slenytube/' }
    },
    {
        image: "",
        title: "Lola",
        description: "Leitor de usb, que le os dados de texto em forma de audio ",
        links: { demo: "#", github: "https://github.com/machado-developer/leitor-de-usb/tree/main/src" }
    }
];

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Selected works demonstrating full-stack capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-card border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Image Placeholder - relying on simple gradient/pattern for now since no assets provided */}
                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="h-48 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                                    <MonitorPlay className="w-12 h-12 text-white/20 group-hover:text-primary transition-colors" />
                                </div>
                            )}

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <span className={cn(
                                        "px-2 py-1 text-xs rounded-full border",
                                        project.status === 'Live' ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                            "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                                    )}>
                                        {project.status}
                                    </span>
                                </div>

                                <p className="text-muted-foreground mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags?.map(tag => (
                                        <span key={tag} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">


                                    {project.links?.demo && (
                                        <a
                                            href={project.links.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            {t.projects.demo}
                                        </a>
                                    )}
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            {t.projects.github}
                                        </a>
                                    )}

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
