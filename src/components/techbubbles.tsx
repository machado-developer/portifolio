import React from "react";

const TechBubbles = () => {
    return (
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mb-4">
            {["Desenvolvimento Web", "Desktop", "Desenvolvimento Mobile", "CEO", "Automação de tarefas e processos", "DeepLearn"].map((tech) => (
                <div
                    key={tech}
                    className="px-4 py-2 bg-white border-2 border-lilac-900 rounded-full text-gray-900 text-sm sm:text-base font-semibold shadow-md transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer whitespace-nowrap"
                >
                    {tech}
                </div>
            ))}
        </div>
    );
};

export default TechBubbles;
