import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <NavLink to="/" onClick={() => setOpen(false)} className={({isActive}) => `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}>Home</NavLink>
      <NavLink to="/services" onClick={() => setOpen(false)} className={({isActive}) => `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}>Services</NavLink>
      <NavLink to="/ai-tools" onClick={() => setOpen(false)} className={({isActive}) => `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}>AI Tools</NavLink>
      <NavLink to="/contact" onClick={() => setOpen(false)} className={({isActive}) => `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-gray-700'}`}>Contact</NavLink>
    </div>
  )

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/20 bg-white/60">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-900">Liteweb Design</p>
            <p className="text-xs text-gray-500">Enterprise Web Agency</p>
          </div>
        </Link>

        <nav className="hidden md:block">{navItem}</nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 border-t border-white/30 bg-white/80">{navItem}</div>
      )}
    </header>
  )
}
