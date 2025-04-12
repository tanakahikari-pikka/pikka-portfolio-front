'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/' 
                  ? 'border-indigo-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/about' 
                  ? 'border-indigo-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === '/projects' 
                  ? 'border-indigo-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}