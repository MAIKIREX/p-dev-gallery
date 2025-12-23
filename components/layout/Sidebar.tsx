"use client"

interface SidebarProps {
  sections: Array<{ id: string; name: string }>
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="sticky top-0 h-screen w-64 border-r border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">Categories</h2>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`w-full rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
              activeSection === section.id
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {section.name}
          </button>
        ))}
      </nav>
    </aside>
  )
}
