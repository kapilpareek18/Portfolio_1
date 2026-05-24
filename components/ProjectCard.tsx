type ProjectCardProps = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-6 shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:bg-white dark:border-slate-800/80 dark:bg-slate-900 dark:shadow-slate-950/40 dark:hover:bg-slate-800">
      <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
