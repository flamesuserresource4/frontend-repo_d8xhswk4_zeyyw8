import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'Web Design', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) setStatus('Thank you! We will reach out shortly.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (e) {
      setStatus('Could not send. Please try again later.')
    }
  }

  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Get a quote</h1>
            <p className="mt-3 text-gray-600">Tell us about your project. We respond within one business day.</p>
            <div className="mt-6 rounded-2xl border border-gray-200 p-6">
              <p className="text-sm text-gray-700">Email</p>
              <p className="font-semibold">info@liteweb.my</p>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Company</label>
                <input value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Service</label>
                <select value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500">
                  <option>Web Design</option>
                  <option>Managed Hosting</option>
                  <option>Maintenance</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-gray-700">Message</label>
                <textarea required rows="5" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <button className="mt-4 px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Send</button>
            {status && <p className="mt-3 text-sm text-gray-600">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
