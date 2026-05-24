const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-10 w-full border-b border-slate-200/70 bg-white/95 py-4 backdrop-blur-sm dark:border-slate-800/70 dark:bg-slate-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <h1 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
          Portfolio
        </h1>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
