import type { Section } from "../../types"

export const navbarsSection: Section = {
  id: "navbars",
  name: "Navbars",
  collections: [
    {
      id: "basic-navbars",
      title: "Basic Navigation",
      description: "Simple navigation bars with links",
      variants: [
        {
          id: "simple-navbar",
          title: "Simple Navbar",
          description: "Basic navbar with logo and navigation links",
          tags: ["navbar", "navigation", "simple"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </nav>
          ),
          code: `<nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
<div className="flex gap-6">
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Home
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    About
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Services
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Contact
  </a>
</div>
  </div>
</nav>`,
        },
        {
          id: "navbar-with-cta",
          title: "Navbar with CTA",
          description: "Navbar with a prominent call-to-action button",
          tags: ["navbar", "cta", "button"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
                <div className="flex items-center gap-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Docs
                  </a>
                  <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
                    Sign Up
                  </button>
                </div>
              </div>
            </nav>
          ),
          code: `<nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
<div className="flex items-center gap-6">
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Features
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Pricing
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Docs
  </a>
  <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
    Sign Up
  </button>
</div>
  </div>
</nav>`,
        },
        {
          id: "navbar-with-logo",
          title: "Navbar with Logo Icon",
          description: "Navigation bar with an icon logo",
          tags: ["navbar", "logo", "icon"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</span>
                </div>
                <div className="flex items-center gap-8">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Resources
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Company
                  </a>
                </div>
              </div>
            </nav>
          ),
          code: `<nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
<div className="flex items-center gap-2">
  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600"></div>
  <span className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</span>
</div>
<div className="flex items-center gap-8">
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Products
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Solutions
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Resources
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Company
  </a>
</div>
  </div>
</nav>`,
        },
      ],
    },
    {
      id: "mobile-responsive-navbars",
      title: "Mobile Responsive Navigation",
      description: "Navigation bars with mobile menu toggles",
      variants: [
        {
          id: "mobile-toggle-navbar",
          title: "Mobile Toggle Navbar",
          description: "Responsive navbar with hamburger menu",
          tags: ["navbar", "mobile", "responsive", "toggle"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto max-w-7xl px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
                  <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden">
                    <svg
                      className="h-6 w-6 text-gray-700 dark:text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                  <div className="hidden md:flex md:gap-6">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      About
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          ),
          code: `'use client'
import { useState } from 'react'

export default function MobileToggleNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <div className="mx-auto max-w-7xl px-4 py-4">
    <div className="flex items-center justify-between">
      <div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
      >
        <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden md:flex md:gap-6">
        <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Home
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          About
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Services
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Contact
        </a>
      </div>
    </div>
    {isOpen && (
      <div className="mt-4 space-y-2 md:hidden">
        <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          Home
        </a>
        <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          About
        </a>
        <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          Services
        </a>
        <a href="#" className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
          Contact
        </a>
      </div>
    )}
  </div>
</nav>
  )
}`,
        },
        {
          id: "mobile-overlay-navbar",
          title: "Mobile Overlay Navbar",
          description: "Full screen mobile menu overlay",
          tags: ["navbar", "mobile", "overlay", "fullscreen"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600"></div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
                </div>
                <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden">
                  <svg
                    className="h-6 w-6 text-gray-700 dark:text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <div className="hidden lg:flex lg:items-center lg:gap-8">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    About
                  </a>
                  <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
                    Get Started
                  </button>
                </div>
              </div>
            </nav>
          ),
          code: `'use client'
import { useState } from 'react'

export default function MobileOverlayNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
<>
  <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600"></div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
      </div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
      >
        <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="hidden lg:flex lg:items-center lg:gap-8">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Features
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          Pricing
        </a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
          About
        </a>
        <button className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">
          Get Started
        </button>
      </div>
    </div>
  </nav>
  
  {isOpen && (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-800 lg:hidden">
      <div className="flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600"></div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Brand</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-12 flex flex-col gap-4">
          <a href="#" className="text-2xl font-medium text-gray-900 hover:text-emerald-500 dark:text-white">Features</a>
          <a href="#" className="text-2xl font-medium text-gray-900 hover:text-emerald-500 dark:text-white">Pricing</a>
          <a href="#" className="text-2xl font-medium text-gray-900 hover:text-emerald-500 dark:text-white">About</a>
          <button className="mt-4 rounded-lg bg-emerald-500 px-6 py-3 text-lg font-medium text-white hover:bg-emerald-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )}
</>
  )
}`,
        },
        {
          id: "navbar-with-search",
          title: "Navbar with Search",
          description: "Navigation bar featuring a search input field",
          tags: ["navbar", "search", "input"],
          preview: (
            <nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
                <div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
                <div className="flex max-w-md flex-1">
                  <div className="relative w-full">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                    <svg
                      className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex gap-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </nav>
          ),
          code: `<nav className="w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
<div className="text-xl font-bold text-gray-900 dark:text-white">DevWolf</div>
<div className="flex max-w-md flex-1">
  <div className="relative w-full">
    <input
      type="search"
      placeholder="Search..."
      className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
    />
    <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
</div>
<div className="flex gap-6">
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Products
  </a>
  <a href="#" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
    Pricing
  </a>
</div>
  </div>
</nav>`,
        },
      ],
    },
  ],
}
