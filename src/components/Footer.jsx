export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Liteweb Design. All rights reserved.</p>
        <div className="text-sm text-gray-600">info@liteweb.my</div>
      </div>
    </footer>
  )
}
