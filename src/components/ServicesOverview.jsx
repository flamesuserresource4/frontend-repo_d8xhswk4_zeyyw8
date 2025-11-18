import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const services = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Modern, responsive websites tailored to your brand.',
    features: ['UX/UI', 'Responsive', 'SEO-ready', 'Accessibility'],
  },
  {
    id: 'hosting',
    title: 'Managed Hosting',
    description: 'Fast, secure, and monitored cloud hosting.',
    features: ['SSL', 'Backups', 'Monitoring', 'CDN'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance',
    description: 'Ongoing updates, security patches, and enhancements.',
    features: ['Updates', 'Security', 'Performance', 'Support'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What we do</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Full‑stack services to ship, scale, and secure your digital presence.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.id} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.description}</p>
              <ul className="mt-4 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="text-indigo-600" size={18} /> {f}
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
