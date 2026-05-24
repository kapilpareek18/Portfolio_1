export default function HeroSection() {
  return (
    <section id="home" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6 text-slate-950 dark:text-slate-100">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Hello, I'm
          </p>
          <h2 className="text-4xl font-semibold sm:text-5xl">
            Kapil Pareek
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            I am a frontend developer who creates simple and clean websites.
          </p>
          <a href="#projects" className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
            View Work
          </a>
        </div>

        <div className="mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/40">
          <img
            src="/flower-729510_1280.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
