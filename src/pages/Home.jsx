import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Enterprise‑grade delivery',
              desc: 'Rigorous QA, performance budgets, and accessibility baked in.'
            },
            {
              title: 'Scalable architecture',
              desc: 'From landing pages to SaaS, we build to grow with you.'
            },
            {
              title: 'Dedicated support',
              desc: 'SLAs and proactive monitoring keep you online 24/7.'
            },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
