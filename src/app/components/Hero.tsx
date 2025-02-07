import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-blue-600 to-blue-400 text-white min-h-screen flex items-center pt-16"
    >
      {" "}
      {}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Syad Usman Ali</h1>
        <h2 className="text-3xl mb-8">AI Engineer | Next.js Developer | Custom GPT Creator</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Transforming ideas into intelligent solutions and seamless web experiences
        </p>
        <a
          href="#contact"
          className="bg-yellow-500 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300 inline-flex items-center"
        >
          Request VIP Access
          <ArrowDown className="ml-2" />
        </a>
      </div>
    </section>
  )
}

