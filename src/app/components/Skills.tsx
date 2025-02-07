import { Cpu, Code, Bot, Database, Cloud, Lightbulb } from "lucide-react"

const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
    ],
    icon: Cpu,
  },
  {
    category: "Web Development",
    items: ["Next.js", "React", "Node.js", "TypeScript", "GraphQL", "RESTful APIs", "Responsive Design"],
    icon: Code,
  },
  {
    category: "Custom GPT Development",
    items: ["OpenAI API", "Prompt Engineering", "Fine-tuning", "Chatbot Design", "Integration", "Conversational AI"],
    icon: Bot,
  },
  {
    category: "Database & Backend",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Express.js", "Prisma", "API Design"],
    icon: Database,
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Serverless Architecture"],
    icon: Cloud,
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Project Management", "Technical Writing", "Agile Methodologies"],
    icon: Lightbulb,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-gray-800">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-pink-600 mr-2" />
                <h3 className="font-bold text-xl">{skill.category}</h3>
              </div>
              <ul className="list-disc list-inside">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
