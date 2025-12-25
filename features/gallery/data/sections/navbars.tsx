'use client'

import { useMemo, useState } from 'react'
import { Footprints, Phone, Search, ShoppingCart, Menu, X, Orbit, FileText, Home, ChevronDown, ChevronRight, ChevronUp, CalendarDays, MapPin, List, Map } from "lucide-react"
import type { Section } from '../../types'

function PillNavbarPreview() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-4xl">
        <nav
          className="
            relative flex items-center justify-between
            rounded-full bg-neutral-900/95
            px-3 py-3
            shadow-[0_18px_45px_rgba(0,0,0,0.35)]
            ring-1 ring-white/10
            backdrop-blur
          "
        >
          {/* Left icon */}
          <div
            className="
              grid h-11 w-11 place-items-center
              rounded-full bg-white
              text-neutral-900
              shadow-sm ring-1 ring-black/5
            "
            aria-label="Home"
          >
            <Orbit className="h-5 w-5" />
          </div>

          {/* Desktop links */}
          <div className="hidden items-center gap-10 md:flex">
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">
              Work
            </a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">
              About
            </a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">
              Playground
            </a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">
              Resource
            </a>
          </div>

          {/* Right email pill (desktop) */}
          <a
            href="mailto:ihyaet@gmail.com"
            className="
              hidden md:inline-flex items-center justify-center
              rounded-full bg-white
              px-5 py-2.5
              text-sm font-medium text-neutral-900
              shadow-sm ring-1 ring-black/5
              hover:bg-white/95
            "
          >
            ihyaet@gmail.com
          </a>

          {/* Mobile menu button (NOW FUNCTIONAL) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="
              md:hidden
              grid h-11 w-11 place-items-center
              rounded-full bg-white/10
              text-white
              ring-1 ring-white/10
              hover:bg-white/15
            "
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Mobile dropdown menu */}
          {open && (
            <div
              className="
                absolute left-0 top-full z-50 mt-3 w-full
                rounded-3xl bg-neutral-950/95
                p-4
                shadow-[0_22px_60px_rgba(0,0,0,0.45)]
                ring-1 ring-white/10
                backdrop-blur
                md:hidden
              "
            >
              <div className="grid gap-2">
                {['Work', 'About', 'Playground', 'Resource'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-3">
                <a
                  href="mailto:ihyaet@gmail.com"
                  onClick={() => setOpen(false)}
                  className="
                    flex items-center justify-center
                    rounded-2xl bg-white
                    px-4 py-3
                    text-sm font-medium text-neutral-900
                    ring-1 ring-black/5
                    hover:bg-white/95
                  "
                >
                  ihyaet@gmail.com
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

function FootwearNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(0)

  const links = useMemo(() => ["Home", "About Us", "Product", "Contact Us"], [])

  return (
    <header className="w-full bg-white">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Footprints className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-700">Footwear</span>
          </a>

          {/* Diagonal green shape (desktop) */}
          <div className="relative hidden h-10 flex-1 md:block">
            <div className="absolute inset-y-0 left-10 right-10 -skew-x-12 rounded-sm bg-emerald-600" />
          </div>

          {/* Phone */}
          <a
            href="tel:+9808123456"
            className="flex items-center gap-3 rounded-full bg-white px-2 py-1.5 text-sm font-semibold text-gray-700"
            aria-label="Call phone"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
              <Phone className="h-5 w-5 text-emerald-600" />
            </span>
            <span className="hidden sm:inline">9808123456</span>
          </a>
        </div>
      </div>

      {/* Menu bar */}
      <div className="shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Left: hamburger (mobile) + links (desktop) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map((label) => {
                const isActive = label === "Home"
                return (
                  <a
                    key={label}
                    href="#"
                    className={[
                      "rounded-md px-5 py-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-600 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="mx-auto w-full max-w-6xl px-4 py-3">
              <div className="grid gap-2">
                {links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

function L2ToitureNavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const groups = [
    {
      id: "services",
      label: "Services",
      items: [
        "Réparation toiture",
        "Toiture commerciale",
        "Toiture résidentielle",
        "Inspection",
        "Urgence toiture",
        "Soumission toiture",
      ],
    },
    {
      id: "zones",
      label: "Zones résidentielles",
      items: [
        "Toiture Charlesbourg",
        "Toiture Beauport",
        "Toiture Lévis",
        "Toiture Lac-Beauport",
        "Toiture Cap-Rouge",
        "Toiture Lac-Saint-Joseph",
        "Toiture Saint-Nicolas",
        "Toiture Sillery",
        "Toutes les zones desservies",
      ],
    },
    {
      id: "types",
      label: "Types de toit",
      items: [
        "Plat",
        "Blanc",
        "Bardeaux d’asphalte",
        "Membrane élastomère",
        "Toit en pente",
        "Tous les types de toit",
      ],
    },
    {
      id: "apropos",
      label: "À propos",
      items: ["Notre entreprise", "Nos clients", "Nos produits", "Notre équipe"],
    },
  ]

  const simpleLinks = [
    { label: "Réalisations", href: "#" },
    { label: "Carrières", href: "#" },
    { label: "Nous joindre", href: "#" },
  ]

  function toggleGroup(id: string) {
    setOpenGroup((curr) => (curr === id ? null : id))
  }

  return (
    <header className="w-full">
      {/* Bar sticky */}
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white">
              <Home className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">L2 Toitures</div>
              <div className="text-xs text-neutral-500">Experts en toiture</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {/* Group dropdowns (hover) */}
            {groups.slice(0, 3).map((g) => (
              <div key={g.id} className="relative group">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
                >
                  {g.label}
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </button>

                {/* Mega dropdown */}
                <div className="invisible absolute left-0 top-full z-50 mt-2 w-[360px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="text-xs font-semibold text-neutral-500">{g.label}</div>
                  <div className="mt-2 grid gap-1">
                    {g.items.map((it) => (
                      <a
                        key={it}
                        href="#"
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                      >
                        <span>{it}</span>
                        <ChevronRight className="h-4 w-4 text-neutral-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Simple */}
            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Réalisations
            </a>

            {/* À propos dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                À propos
                <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-neutral-200 bg-white p-2 shadow-lg opacity-0 transition group-hover:visible group-hover:opacity-100">
                {groups.find((x) => x.id === "apropos")!.items.map((it) => (
                  <a
                    key={it}
                    href="#"
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
                  >
                    <span>{it}</span>
                    <ChevronRight className="h-4 w-4 text-neutral-400" />
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Carrières
            </a>
            <a
              href="#"
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
            >
              Nous joindre
            </a>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* CTA desktop */}
            <a
              href="#"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              <FileText className="h-4 w-4" />
              Ma soumission
            </a>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5 text-neutral-800" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-600 text-white">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">L2 Toitures</div>
                  <div className="text-xs text-neutral-500">Menu</div>
                </div>
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-64px)] overflow-auto px-4 py-4">
              {/* Accordion groups */}
              <div className="grid gap-2">
                {groups.map((g) => {
                  const isOpen = openGroup === g.id
                  return (
                    <div key={g.id} className="rounded-2xl border border-neutral-200">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-neutral-900"
                        onClick={() => toggleGroup(g.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{g.label}</span>
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4 text-neutral-500" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-neutral-500" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="border-t border-neutral-200 p-2">
                          {g.items.map((it) => (
                            <a
                              key={it}
                              href="#"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                            >
                              <span>{it}</span>
                              <ChevronRight className="h-4 w-4 text-neutral-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Simple links */}
              <div className="mt-4 grid gap-2">
                {simpleLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                <FileText className="h-4 w-4" />
                Ma soumission
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to show it nicely inside your preview area */}
      <div className="h-4 bg-white" />
    </header>
  )
}

function HepVintageNavbarPreview() {
  const [open, setOpen] = useState(false)

  const leftLinks = [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Shop', href: '#' },
  ]

  const rightLinks = [
    { label: 'Events', href: '#', icon: CalendarDays },
    { label: 'Find Us', href: '#', icon: MapPin },
  ]

  return (
    <header className="w-full bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          {/* Left links (desktop) */}
          <nav className="hidden items-center gap-6 md:flex">
            {leftLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-neutral-800 hover:text-neutral-950"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Left: hamburger (mobile) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-neutral-900" />
          </button>

          {/* Center logo */}
          <a
            href="#"
            className="select-none text-center text-lg font-black tracking-[0.35em] text-neutral-900 md:text-xl"
            aria-label="HEP"
          >
            HEP
          </a>

          {/* Right links (desktop) */}
          <div className="hidden items-center gap-6 md:flex">
            {rightLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950"
              >
                <l.icon className="h-4 w-4 text-neutral-600" />
                {l.label}
              </a>
            ))}

            {/* Cart */}
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50"
              aria-label="Cart"
            >
              <ShoppingCart className="h-5 w-5 text-neutral-900" />
            </button>
          </div>

          {/* Right icons (mobile): cart */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5 text-neutral-900" />
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/40"
            aria-label="Close overlay"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute left-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="text-sm font-semibold tracking-[0.25em] text-neutral-900">
                HEP MENU
              </div>
              <button
                className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {leftLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {rightLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    <l.icon className="h-4 w-4 text-neutral-600" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function BelleOaksNavbarPreview() {
  const [apartmentsOpen, setApartmentsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    'Home',
    'Amenities',
    'About us',
    'Gallery',
    'Lifestyle',
    'Units',
    'Contact',
  ]

  return (
    <div className="w-full">
      {/* Top bar floating */}
      <div className="relative mx-auto mt-4 w-[min(1200px,96%)] rounded-[26px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
        <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
          {/* Left: dotted + OFF */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-neutral-400">······</span>
            <span className="text-sm font-semibold tracking-wide text-neutral-400">
              OFF
            </span>
          </div>

          {/* Center logo */}
          <div className="flex flex-1 items-center justify-start md:justify-center">
            <div className="text-center leading-none">
              <div className="text-lg font-black tracking-wide text-[#111C3B] md:text-xl">
                BELLE OAKS
              </div>
              <div className="text-sm font-medium tracking-wide text-[#111C3B]/80 md:text-base">
                MARKETPLACE
              </div>
            </div>
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Apartments dropdown */}
            <button
              type="button"
              onClick={() => setApartmentsOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-[#F2B24A] bg-white px-4 py-2 text-sm font-semibold text-[#111C3B] hover:bg-[#FFF7EA] md:px-6"
              aria-expanded={apartmentsOpen}
              aria-label="Apartments dropdown"
            >
              Apartments
              {apartmentsOpen ? (
                <ChevronUp className="h-4 w-4 opacity-70" />
              ) : (
                <ChevronDown className="h-4 w-4 opacity-70" />
              )}
            </button>

            {/* Menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 rounded-full bg-[#F2C46D] px-4 py-2 text-sm font-semibold text-[#111C3B] hover:brightness-95 md:px-6"
              aria-label="Open menu"
            >
              Menu
              <span className="grid h-8 w-10 place-items-center rounded-full bg-white/35">
                <Menu className="h-5 w-5" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Apartments options row */}
      {apartmentsOpen && (
        <div className="mx-auto mt-3 w-[min(1200px,96%)]">
          <div className="flex flex-col gap-3 md:flex-row md:justify-end">
            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111C3B] shadow-[0_12px_35px_rgba(0,0,0,0.14)] ring-1 ring-black/5 hover:bg-neutral-50 md:w-[320px]"
            >
              <span>
                Visual <span className="font-serif italic font-medium">Selection</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF3DD]">
                <Map className="h-5 w-5 text-[#111C3B]" />                
              </span>
            </button>

            <button
              type="button"
              className="flex items-center justify-between gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111C3B] shadow-[0_12px_35px_rgba(0,0,0,0.14)] ring-1 ring-black/5 hover:bg-neutral-50 md:w-[320px]"
            >
              <span>
                List <span className="font-serif italic font-medium">Selection</span>
              </span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#FFF3DD]">
                <List className="h-5 w-5 text-[#111C3B]" />
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90]">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/35"
            aria-label="Close backdrop"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <div className="absolute inset-0 m-4 rounded-[28px] bg-[#182554] shadow-2xl md:m-6">
            {/* Top bar inside overlay */}
            <div className="flex items-start justify-between px-6 py-6">
              <div className="leading-tight text-white">
                <div className="text-lg font-black tracking-wide">BELLE OAKS</div>
                <div className="text-sm font-medium opacity-90">MARKETPLACE</div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-[#F2C46D] text-[#111C3B] hover:brightness-95"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="grid h-[calc(100%-92px)] grid-cols-1 gap-6 px-6 pb-6 md:grid-cols-[1fr_420px]">
              {/* Left big links */}
              <div className="flex flex-col justify-start">
                <div className="space-y-6 md:space-y-7">
                  {navLinks.map((label, idx) => (
                    <a
                      key={label}
                      href="#"
                      className="group flex items-center gap-4 text-[44px] font-light leading-none text-white hover:opacity-95 md:text-[56px]"
                      onClick={() => setMenuOpen(false)}
                    >
                      {/* bullet only for active (Home like screenshot) */}
                      <span
                        className={[
                          'text-[#F2C46D] transition-opacity',
                          idx === 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-60',
                        ].join(' ')}
                      >
                        •
                      </span>
                      <span>{label}</span>
                    </a>
                  ))}
                </div>

                {/* small circle social */}
                <div className="mt-auto pt-6">
                  <button
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
                    aria-label="Social"
                  >
                    f
                  </button>
                </div>
              </div>

              {/* Right visual block (desktop look) */}
              <div className="hidden md:flex md:flex-col md:justify-end">
                <div className="rounded-[22px] bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="flex items-center justify-end gap-6 text-xs text-white/80">
                    <a className="underline underline-offset-4" href="#">
                      Terms of Use ↗
                    </a>
                    <a className="underline underline-offset-4" href="#">
                      Privacy Policy ↗
                    </a>
                    <span className="opacity-70">Copyright © 2025</span>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-[18px] bg-white/10 ring-1 ring-white/10">
                    <div className="aspect-[16/10] w-full bg-gradient-to-br from-white/20 to-white/5" />
                    <div className="px-4 py-3 text-white">
                      <div className="text-2xl font-light">
                        3D Map <span className="opacity-60">•</span> 3D Map
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right visual block (mobile) */}
              <div className="md:hidden">
                <div className="rounded-[18px] bg-white/10 p-4 ring-1 ring-white/10">
                  <div className="text-sm font-semibold text-white">Extras</div>
                  <div className="mt-2 text-xs text-white/80">
                    Terms of Use • Privacy Policy • © 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Small spacer for gallery preview */}
      <div className="h-6" />
    </div>
  )
}


export const navbarsSection: Section = {
  id: 'navbars',
  name: 'Navbars',
  collections: [
    {
      id: 'pill-navbars',
      title: 'Pill / Floating Navbars',
      description: 'Rounded pill-style navigation bars for modern portfolios',
      variants: [
        {
          id: 'pill-navbar-responsive',
          title: 'Pill Navbar (Responsive)',
          description:
            'Pill navbar with centered links and email pill, with mobile dropdown menu',
          tags: ['navbar', 'pill', 'modern', 'responsive', 'lucide'],
          preview: <PillNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Orbit, Menu, X } from 'lucide-react'

export default function PillNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-4xl">
        <nav className="relative flex items-center justify-between rounded-full bg-neutral-900/95 px-3 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur">
          <a
            href="#"
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-neutral-900 shadow-sm ring-1 ring-black/5"
            aria-label="Home"
          >
            <Orbit className="h-5 w-5" />
          </a>

          <div className="hidden items-center gap-10 md:flex">
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Work</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">About</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Playground</a>
            <a href="#" className="text-sm font-medium text-white/85 hover:text-white">Resource</a>
          </div>

          <a
            href="mailto:ihyaet@gmail.com"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 shadow-sm ring-1 ring-black/5 hover:bg-white/95"
          >
            ihyaet@gmail.com
          </a>

          <button
            type="button"
            onClick={() => setOpen(v => !v)}
            className="md:hidden grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15"
            aria-label="Open menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {open && (
            <div className="absolute left-0 top-full z-50 mt-3 w-full rounded-3xl bg-neutral-950/95 p-4 shadow-[0_22px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur md:hidden">
              <div className="grid gap-2">
                {['Work', 'About', 'Playground', 'Resource'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>

              <div className="mt-3">
                <a
                  href="mailto:ihyaet@gmail.com"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-medium text-neutral-900 ring-1 ring-black/5 hover:bg-white/95"
                >
                  ihyaet@gmail.com
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
`,
        },       
        
      ],
    },
    {
  id: "ecommerce-navbars",
  title: "E-commerce / Store Navbars",
  description: "Store navbars with topbar + phone + search + cart badge",
  variants: [
    {
      id: "footwear-navbar-responsive",
      title: "Footwear Navbar (Responsive)",
      description: "Two-row store navbar with diagonal topbar and mobile hamburger menu",
      tags: ["navbar", "ecommerce", "store", "topbar", "responsive"],
      preview: <FootwearNavbarPreview />,
      code: `'use client'

import { useMemo, useState } from 'react'
import { Footprints, Phone, Search, ShoppingCart, Menu, X } from 'lucide-react'

export default function FootwearNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  const links = useMemo(() => ['Home', 'About Us', 'Product', 'Contact Us'], [])

  // (opcional) demo: sumar carrito
  // const addToCart = () => setCartCount(c => c + 1)

  return (
    <header className="w-full bg-white">
      <div className="border-b border-gray-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <Footprints className="h-6 w-6 text-emerald-600" />
            <span className="text-lg font-semibold text-emerald-700">Footwear</span>
          </a>

          <div className="relative hidden h-10 flex-1 md:block">
            <div className="absolute inset-y-0 left-10 right-10 -skew-x-12 rounded-sm bg-emerald-600" />
          </div>

          <a href="tel:+9808123456" className="flex items-center gap-3 rounded-full bg-white px-2 py-1.5 text-sm font-semibold text-gray-700">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
              <Phone className="h-5 w-5 text-emerald-600" />
            </span>
            <span className="hidden sm:inline">9808123456</span>
          </a>
        </div>
      </div>

      <div className="shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white hover:bg-gray-50 md:hidden"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {links.map(label => {
                const isActive = label === 'Home'
                return (
                  <a
                    key={label}
                    href="#"
                    className={[
                      'rounded-md px-5 py-2 text-sm font-semibold transition-colors',
                      isActive ? 'bg-emerald-600 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
                    ].join(' ')}
                  >
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>

            <button className="relative grid h-10 w-10 place-items-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-600 px-1 text-[11px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-gray-200 bg-white md:hidden">
            <div className="mx-auto w-full max-w-6xl px-4 py-3">
              <div className="grid gap-2">
                {links.map(label => (
                  <a key={label} href="#" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
`,
    },
    {
          id: 'hep-vintage-split-navbar',
          title: 'HEP Vintage Style (Responsive)',
          description: 'Split links on desktop + centered logo + mobile overlay hamburger menu',
          tags: ['navbar', 'minimal', 'center-logo', 'overlay', 'responsive', 'lucide'],
          preview: <HepVintageNavbarPreview />,
          code: `'use client'

import { useState } from 'react'
import { Menu, X, ShoppingCart, CalendarDays, MapPin } from 'lucide-react'

export default function HepVintageNavbar() {
  const [open, setOpen] = useState(false)

  const leftLinks = [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Shop', href: '#' },
  ]

  const rightLinks = [
    { label: 'Events', href: '#', icon: CalendarDays },
    { label: 'Find Us', href: '#', icon: MapPin },
  ]

  return (
    <header className="w-full bg-white">
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
          <nav className="hidden items-center gap-6 md:flex">
            {leftLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-neutral-800 hover:text-neutral-950">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-neutral-900" />
          </button>

          <a href="#" className="select-none text-center text-lg font-black tracking-[0.35em] text-neutral-900 md:text-xl">
            HEP
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {rightLinks.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-950">
                <l.icon className="h-4 w-4 text-neutral-600" />
                {l.label}
              </a>
            ))}

            <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50" aria-label="Cart">
              <ShoppingCart className="h-5 w-5 text-neutral-900" />
            </button>
          </div>

          <button type="button" className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 md:hidden" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-neutral-900" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[80] md:hidden">
          <button className="absolute inset-0 bg-black/40" aria-label="Close overlay" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[min(380px,100%)] bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-4">
              <div className="text-sm font-semibold tracking-[0.25em] text-neutral-900">HEP MENU</div>
              <button className="grid h-10 w-10 place-items-center rounded-xl border border-neutral-200 hover:bg-neutral-50" aria-label="Close menu" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {leftLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                {rightLinks.map((l) => (
                  <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 rounded-2xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
                    <l.icon className="h-4 w-4 text-neutral-600" />
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
`,
        },
        {
      id: "belle-oaks-overlay-navbar",
      title: "Belle Oaks Style (Responsive)",
      description: "Apartments dropdown + fullscreen menu overlay (responsive)",
      tags: ["navbar", "overlay", "dropdown", "responsive", "lucide"],
      preview: <BelleOaksNavbarPreview />,
      code: `'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ChevronUp, Map, List } from 'lucide-react'

export default function BelleOaksNavbar() {
  const [apartmentsOpen, setApartmentsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // ... (pega aquí el mismo JSX del preview para que el code muestre todo el proceso completo)
  return <div />
}
`,
    },
  ],
    },
    {
  id: "business-navbars",
  title: "Business / Mega Menu Navbars",
  description: "Navbars for services companies with grouped mega-menus and a CTA",
  variants: [
    {
      id: "l2toiture-megamenu-responsive",
      title: "L2 Toiture Style (Responsive)",
      description: "Mega-menu categories + CTA, with mobile accordion hamburger menu",
      tags: ["navbar", "megamenu", "services", "cta", "responsive", "lucide"],
      preview: <L2ToitureNavbarPreview />,
      code: `'use client'

import { useState } from 'react'
import { Menu, X, Home, FileText, ChevronDown, ChevronUp, ChevronRight } from 'lucide-react'

export default function L2ToitureNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const groups = [
    { id: 'services', label: 'Services', items: ['Réparation toiture','Toiture commerciale','Toiture résidentielle','Inspection','Urgence toiture','Soumission toiture'] },
    { id: 'zones', label: 'Zones résidentielles', items: ['Toiture Charlesbourg','Toiture Beauport','Toiture Lévis','Toiture Lac-Beauport','Toiture Cap-Rouge','Toiture Lac-Saint-Joseph','Toiture Saint-Nicolas','Toiture Sillery','Toutes les zones desservies'] },
    { id: 'types', label: 'Types de toit', items: ['Plat','Blanc',"Bardeaux d’asphalte",'Membrane élastomère','Toit en pente','Tous les types de toit'] },
    { id: 'apropos', label: 'À propos', items: ['Notre entreprise','Nos clients','Nos produits','Notre équipe'] },
  ]

  const simpleLinks = [
    { label: 'Réalisations', href: '#' },
    { label: 'Carrières', href: '#' },
    { label: 'Nous joindre', href: '#' },
  ]

  const toggleGroup = (id: string) => setOpenGroup(curr => (curr === id ? null : id))

  return (
    // Pega aquí el mismo JSX del preview (idéntico)
    // (por espacio, en tu galería queda completo en el archivo real)
    <div />
  )
}
`,
    },
  ],
    }

  ],
}
