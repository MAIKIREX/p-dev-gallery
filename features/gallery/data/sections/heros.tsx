import { Dribbble, Instagram, Menu, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Section } from "../../types"

export const herosSection: Section = {
  id: "heros",
  name: "Heros",
  collections: [
    {
      id: "landing-heros",
      title: "Landing Heros",
      description: "Hero sections para páginas de inicio y landing pages",
      variants: [
        {
          id: "synqri-dark-hero",
          title: "Synqri Dark Hero",
          description: "Hero dark con navbar, CTA y esfera/loop decorativo (responsive)",
          tags: ["hero", "landing", "dark", "responsive", "navbar"],
          preview: (
            <div className="w-full max-w-5xl">
              <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#070614] via-[#0b0620] to-[#140a2e] text-white">
                {/* stars pattern */}
                <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />

                {/* arc line */}
                <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full border border-white/10 rotate-12" />

                {/* glow */}
                <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />

                <div className="relative px-6 py-6 md:px-10 md:py-8">
                  {/* Navbar */}
                  <header className="flex items-center justify-between">
                    <div className="text-lg font-semibold tracking-tight">syngri</div>

                    {/* desktop links */}
                    <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
                      <a className="hover:text-white" href="#">
                        About Us
                      </a>
                      <a className="hover:text-white" href="#">
                        Services
                      </a>
                      <a className="hover:text-white" href="#">
                        Projects
                      </a>
                      <a className="hover:text-white" href="#">
                        Contact
                      </a>
                    </nav>

                    <div className="flex items-center gap-3">
                      <Button
                        className="hidden bg-white text-black hover:bg-white/90 md:inline-flex"
                        size="sm"
                      >
                        Contact us
                      </Button>

                      {/* mobile menu (sin JS) */}
                      <details className="group relative md:hidden">
                        <summary className="list-none rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                          <Menu className="h-5 w-5" />
                        </summary>
                        <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0b0620] shadow-2xl">
                          <div className="flex flex-col p-2 text-sm text-white/85">
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              About Us
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Services
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Projects
                            </a>
                            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">
                              Contact
                            </a>
                            <div className="p-2">
                              <Button className="w-full bg-white text-black hover:bg-white/90" size="sm">
                                Contact us
                              </Button>
                            </div>
                          </div>
                        </div>
                      </details>
                    </div>
                  </header>

                  {/* Hero */}
                  <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2">
                    {/* Left */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Available for Work
                      </div>

                      <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Transform your ideas
                        <br />
                        into digital success
                        <br />
                        with us!
                      </h1>

                      <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                        We're your partner in product design, website creation, and branding for every stage of your business.
                      </p>

                      <div className="mt-7 flex flex-wrap gap-3">
                        <Button className="bg-white text-black hover:bg-white/90">Services</Button>
                        <Button variant="outline" className="border-white/20 bg-white/0 text-white hover:bg-white/10">
                          Our work
                        </Button>
                      </div>
                    </div>

                    {/* Right - “loop” decorativo responsive */}
                    <div className="relative mx-auto w-full max-w-md">
                      <div className="relative mx-auto aspect-square w-[260px] sm:w-[340px] md:w-[420px]">
                        {/* glow base */}
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.55),transparent_55%)] blur-2xl opacity-90" />

                        {/* glass core */}
                        <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_70px_-25px_rgba(168,85,247,0.85)]" />

                        {/* ring 1 */}
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-200/25 shadow-[0_0_40px_-18px_rgba(236,72,153,0.8)]" />

                        {/* ring 2 (cruzado) */}
                        <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full border-2 border-purple-200/20 shadow-[0_0_40px_-18px_rgba(168,85,247,0.8)]" />

                        {/* highlight */}
                        <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-white/10 blur-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ),
          code: `import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SynqriHero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#070614] via-[#0b0620] to-[#140a2e] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full border border-white/10 rotate-12" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />

      <div className="relative px-6 py-6 md:px-10 md:py-8">
        <header className="flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">syngri</div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#">About Us</a>
            <a className="hover:text-white" href="#">Services</a>
            <a className="hover:text-white" href="#">Projects</a>
            <a className="hover:text-white" href="#">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button className="hidden bg-white text-black hover:bg-white/90 md:inline-flex" size="sm">
              Contact us
            </Button>

            <details className="group relative md:hidden">
              <summary className="list-none rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/10">
                <Menu className="h-5 w-5" />
              </summary>

              <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0b0620] shadow-2xl">
                <div className="flex flex-col p-2 text-sm text-white/85">
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">About Us</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Services</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Projects</a>
                  <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#">Contact</a>
                  <div className="p-2">
                    <Button className="w-full bg-white text-black hover:bg-white/90" size="sm">Contact us</Button>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </header>

        <div className="mt-10 grid items-center gap-10 md:mt-14 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for Work
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Transform your ideas<br />into digital success<br />with us!
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              We're your partner in product design, website creation, and branding for every stage of your business.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button className="bg-white text-black hover:bg-white/90">Services</Button>
              <Button variant="outline" className="border-white/20 bg-white/0 text-white hover:bg-white/10">
                Our work
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="relative mx-auto aspect-square w-[260px] sm:w-[340px] md:w-[420px]">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.55),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.55),transparent_55%)] blur-2xl opacity-90" />
              <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_70px_-25px_rgba(168,85,247,0.85)]" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-200/25 shadow-[0_0_40px_-18px_rgba(236,72,153,0.8)]" />
              <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rotate-90 rounded-full border-2 border-purple-200/20 shadow-[0_0_40px_-18px_rgba(168,85,247,0.8)]" />
              <div className="absolute left-[18%] top-[18%] h-20 w-20 rounded-full bg-white/10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,
        },
        {
  id: "data-enrich-split-hero",
  title: "Data Enrich Split Hero",
  description: "Hero con panel oscuro + imagen a la derecha y corte diagonal (responsive)",
  tags: ["hero", "landing", "split", "image", "diagonal", "responsive"],
  preview: (
  <div className="w-full max-w-6xl">
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* RIGHT IMAGE (en mobile va arriba) */}
        <div className="relative order-1 min-h-[260px] sm:min-h-[340px] md:order-2 md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
            }}
          />
          {/* overlay suave */}
          <div className="absolute inset-0 bg-black/10 md:bg-black/0" />
          {/* degradado para “fundir” con el panel izquierdo */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/5 to-[#071226]/60 md:to-[#071226]/30" />
        </div>

        {/* LEFT */}
        <div
          className="
            relative z-10 order-2 bg-[#071226] px-6 py-8 sm:px-10 sm:py-10 md:order-1 md:px-12 md:py-12
            md:-mr-16 md:pr-20
            md:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]
          "
        >
          {/* Navbar */}
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600" />
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Marketplace</a>
              <a href="#" className="hover:text-white">Company</a>
            </nav>

            <a href="#" className="text-sm text-white/70 hover:text-white">
              Log in
            </a>
          </header>

          {/* Content */}
          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <span className="cursor-pointer text-indigo-300 hover:text-indigo-200">
                Read more →
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Data to enrich
              <br />
              your business
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
),
code: `export function DataEnrichSplitHero() {
  return (
    <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#070b14] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* RIGHT IMAGE (mobile arriba) */}
        <div className="relative order-1 min-h-[260px] sm:min-h-[340px] md:order-2 md:min-h-[520px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-black/10 md:bg-black/0" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-black/5 to-[#071226]/60 md:to-[#071226]/30" />
        </div>

        {/* LEFT */}
        <div
          className="
            relative z-10 order-2 bg-[#071226] px-6 py-8 sm:px-10 sm:py-10 md:order-1 md:px-12 md:py-12
            md:-mr-16 md:pr-20
            md:[clip-path:polygon(0_0,90%_0,100%_50%,90%_100%,0_100%)]
          "
        >
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600" />
            </div>

            <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
              <a href="#" className="hover:text-white">Product</a>
              <a href="#" className="hover:text-white">Features</a>
              <a href="#" className="hover:text-white">Marketplace</a>
              <a href="#" className="hover:text-white">Company</a>
            </nav>

            <a href="#" className="text-sm text-white/70 hover:text-white">
              Log in
            </a>
          </header>

          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Anim aute id magna aliqua ad ad non deserunt sunt.
              <span className="cursor-pointer text-indigo-300 hover:text-indigo-200">
                Read more →
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Data to enrich<br />your business
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}`,

        },
        {
  id: "startup-hero-navbar",
  title: "Startup Hero with Navbar",
  description: "Hero para startups con navbar limpio, corte diagonal y CTA (Lucide + responsive)",
  tags: ["hero", "navbar", "startup", "lucide", "responsive", "light"],
  preview: (
    <div className="w-full max-w-6xl rounded-2xl border bg-white overflow-hidden">
      <section className="relative">
        {/* NAVBAR */}
        <header className="relative z-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                D
              </div>
            </div>

            {/* Links desktop */}
            <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
              <a className="hover:text-black" href="#">HOME</a>
              <a className="hover:text-black" href="#">ABOUT</a>
              <a className="hover:text-black" href="#">PROJECTS</a>
              <a className="hover:text-black" href="#">EXPERTISE</a>
              <a className="hover:text-black" href="#">CONSULTATION</a>
              <a className="hover:text-black" href="#">CONTACT</a>
            </nav>

            {/* Icons desktop */}
            <div className="hidden items-center gap-4 text-gray-500 md:flex">
              <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
              <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
              <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
            </div>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer text-gray-700">
                <Menu className="h-6 w-6" />
              </summary>

              <div className="absolute right-0 mt-3 w-52 rounded-xl border bg-white shadow-lg">
                <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">PROJECTS</a>
                  <a href="#">EXPERTISE</a>
                  <a href="#">CONSULTATION</a>
                  <a href="#">CONTACT</a>

                  <div className="mt-3 flex gap-4 text-gray-500">
                    <Twitter className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                    <Dribbble className="h-4 w-4" />
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </header>

        {/* HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT */}
          <div
            className="
              relative z-10 bg-white px-6 py-16 sm:px-10 md:px-12
              md:-mr-24 md:pr-32
              md:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]
            "
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl lg:text-6xl">
              Turn your ideas
              <br />
              into a{" "}
              <span className="text-blue-500">Startup</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="rounded-lg bg-blue-500 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600">
                WORK WITH US
              </button>

              <a
                href="#"
                className="text-sm font-semibold text-blue-500 hover:text-blue-600"
              >
                LEARN MORE
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[280px] sm:min-h-[380px] md:min-h-[520px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80)",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  ),
  code: `import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export function StartupHeroNavbar() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* NAVBAR */}
      <header>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            D
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PROJECTS</a>
            <a href="#">EXPERTISE</a>
            <a href="#">CONSULTATION</a>
            <a href="#">CONTACT</a>
          </nav>

          <div className="hidden items-center gap-4 text-gray-500 md:flex">
            <Twitter className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Dribbble className="h-4 w-4" />
          </div>

          <Menu className="h-6 w-6 md:hidden" />
        </div>
      </header>

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="
            bg-white px-6 py-16 sm:px-10 md:px-12
            md:-mr-24 md:pr-32
            md:[clip-path:polygon(0_0,88%_0,100%_50%,88%_100%,0_100%)]
          "
        >
          <h1 className="text-4xl font-bold sm:text-6xl">
            Turn your ideas<br />
            into a <span className="text-blue-500">Startup</span>
          </h1>

          <p className="mt-6 max-w-xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="mt-8 flex gap-6">
            <button className="rounded-lg bg-blue-500 px-6 py-3 text-white">
              WORK WITH US
            </button>
            <a className="text-blue-500">LEARN MORE</a>
          </div>
        </div>

        <div className="relative min-h-[520px] bg-cover bg-center" />
      </div>
    </section>
  );
}`,
},
{
  id: "startup-hero-blob-navbar",
  title: "Startup Blob Hero + Navbar",
  description: "Hero tipo 'Turn your ideas into a Startup' con imagen circular recortada (Lucide + responsive)",
  tags: ["hero", "navbar", "startup", "blob", "clip-path", "lucide", "responsive", "light"],
  preview: (
    <div className="w-full max-w-6xl overflow-hidden rounded-2xl border bg-white">
      <section className="bg-white">
        {/* NAVBAR */}
        <header className="px-6 py-5">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Left: logo + links */}
            <div className="flex items-center gap-10">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
                D
              </div>

              <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.22em] text-gray-600 md:flex">
                <a href="#" className="hover:text-black">HOME</a>
                <a href="#" className="hover:text-black">ABOUT</a>
                <a href="#" className="hover:text-black">PROJECTS</a>
                <a href="#" className="hover:text-black">EXPERTISE</a>
                <a href="#" className="hover:text-black">CONSULTATION</a>
                <a href="#" className="hover:text-black">CONTACT</a>
              </nav>
            </div>

            {/* Right: icons */}
            <div className="hidden items-center gap-5 text-gray-700 md:flex">
              <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
              <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
              <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
              <div className="h-1 w-1 rounded-full bg-gray-400" />
            </div>

            {/* Mobile menu */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer text-gray-700">
                <Menu className="h-6 w-6" />
              </summary>
              <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg">
                <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                  <a href="#">HOME</a>
                  <a href="#">ABOUT</a>
                  <a href="#">PROJECTS</a>
                  <a href="#">EXPERTISE</a>
                  <a href="#">CONSULTATION</a>
                  <a href="#">CONTACT</a>
                  <div className="mt-3 flex gap-4 text-gray-500">
                    <Twitter className="h-4 w-4" />
                    <Instagram className="h-4 w-4" />
                    <Dribbble className="h-4 w-4" />
                  </div>
                </nav>
              </div>
            </details>
          </div>
        </header>

        {/* HERO */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-14 pt-8 md:grid-cols-2 md:pb-20 md:pt-14">
          {/* Left text */}
          <div className="max-w-xl">
            <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[56px] lg:text-[64px]">
              Turn your ideas
              <br />
              into a{" "}
              <span className="text-blue-500">Startup</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button className="rounded-xl bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
                WORK WITH US
              </button>

              <a href="#" className="text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-600">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Right image blob */}
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="relative mx-auto aspect-square w-[320px] sm:w-[400px] lg:w-[460px]">
              {/* Blob */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                {/* “corte” diagonal arriba-derecha */}
                <div className="absolute inset-0 bg-white md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
                {/* Imagen */}
                <div
                  className="absolute inset-0 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80)",
                  }}
                />
                {/* Recorte final (aplica el “bite” a la imagen también) */}
                <div className="absolute inset-0 bg-transparent md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
              </div>

              {/* Borde suave como el diseño */}
              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
  code: `import { Menu, Twitter, Instagram, Dribbble } from "lucide-react";

export function StartupBlobHeroNavbar() {
  return (
    <section className="bg-white">
      {/* NAVBAR */}
      <header className="px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
              D
            </div>

            <nav className="hidden items-center gap-10 text-xs font-medium tracking-[0.22em] text-gray-600 md:flex">
              <a href="#" className="hover:text-black">HOME</a>
              <a href="#" className="hover:text-black">ABOUT</a>
              <a href="#" className="hover:text-black">PROJECTS</a>
              <a href="#" className="hover:text-black">EXPERTISE</a>
              <a href="#" className="hover:text-black">CONSULTATION</a>
              <a href="#" className="hover:text-black">CONTACT</a>
            </nav>
          </div>

          <div className="hidden items-center gap-5 text-gray-700 md:flex">
            <Twitter className="h-4 w-4 cursor-pointer hover:text-black" />
            <Instagram className="h-4 w-4 cursor-pointer hover:text-black" />
            <Dribbble className="h-4 w-4 cursor-pointer hover:text-black" />
            <div className="h-1 w-1 rounded-full bg-gray-400" />
          </div>

          <details className="relative md:hidden">
            <summary className="list-none cursor-pointer text-gray-700">
              <Menu className="h-6 w-6" />
            </summary>
            <div className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg">
              <nav className="flex flex-col gap-3 px-4 py-4 text-sm text-gray-700">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">PROJECTS</a>
                <a href="#">EXPERTISE</a>
                <a href="#">CONSULTATION</a>
                <a href="#">CONTACT</a>
                <div className="mt-3 flex gap-4 text-gray-500">
                  <Twitter className="h-4 w-4" />
                  <Instagram className="h-4 w-4" />
                  <Dribbble className="h-4 w-4" />
                </div>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {/* HERO */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-14 pt-8 md:grid-cols-2 md:pb-20 md:pt-14">
        <div className="max-w-xl">
          <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tight text-black sm:text-[56px] lg:text-[64px]">
            Turn your ideas<br />
            into a <span className="text-blue-500">Startup</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-500 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <button className="rounded-xl bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600">
              WORK WITH US
            </button>
            <a href="#" className="text-sm font-semibold tracking-wide text-blue-500 hover:text-blue-600">
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="relative mx-auto aspect-square w-[320px] sm:w-[400px] lg:w-[460px]">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-white md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
              <div
                className="absolute inset-0 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-transparent md:[clip-path:polygon(0_0,74%_0,100%_28%,100%_100%,0_100%)]" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-black/5" />
          </div>
        </div>
      </div>
    </section>
  );
}`,
},




      ],
    },
  ],
}
