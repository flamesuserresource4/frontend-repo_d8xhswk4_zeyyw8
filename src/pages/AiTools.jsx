import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const tools = [
  {
    name: 'ChatGPT',
    desc: 'Natural language AI for content, support, and research.',
    url: 'https://chat.openai.com'
  },
  {
    name: 'Midjourney',
    desc: 'Text‑to‑image generation for concepts and assets.',
    url: 'https://www.midjourney.com'
  },
  {
    name: 'Claude',
    desc: 'AI assistant for analysis and drafting.',
    url: 'https://claude.ai'
  },
  {
    name: 'Stable Diffusion',
    desc: 'Open image generation ecosystem.',
    url: 'https://stability.ai'
  },
]

export default function AiTools() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold">AI Tools Demo</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">Explore a curated list of popular AI tools we integrate into workflows.</p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <a key={t.name} href={t.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 mb-4" />
                <h3 className="text-xl font-semibold group-hover:text-indigo-600">{t.name}</h3>
                <p className="mt-2 text-gray-600">{t.desc}</p>
                <span className="mt-4 inline-flex text-sm text-indigo-600">Open →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
