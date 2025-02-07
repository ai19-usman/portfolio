import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Chatbot",
    description:
      "A custom GPT-based chatbot for customer support, integrating advanced NLP techniques for improved user interactions.",
    image: "/ai.jpg",
    tech: ["OpenAI API", "Next.js", "Node.js"]
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack Next.js e-commerce solution with real-time inventory management and AI-driven product recommendations.",
    image: "/ecomer.jpg",
    tech: ["Next.js", "Prisma", "Stripe", "TensorFlow"],
  },
  {
    title: "Machine Learning Dashboard",
    description:
      "Real-time analytics dashboard for ML models, featuring interactive visualizations and automated reporting.",
    image: "/hq720.jpg",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-gray-800">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
