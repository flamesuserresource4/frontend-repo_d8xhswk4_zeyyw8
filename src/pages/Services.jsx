import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const [services, setServices] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/services`).then(res => res.json()).then(setServices).catch(() => setServices([]))
  }, [])

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Services</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">Web design, hosting, and maintenance — delivered to enterprise standards.</p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.id} className="rounded-2xl border border-gray-200 p-6">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 mb-4" />
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.description}</p>
                <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
                  {s.features.map((f) => (<li key={f}>{f}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
