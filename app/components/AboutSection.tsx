export default function AboutSection() {
  return (
    <section id="about" className="border-t border-slate-200/80 bg-white py-20 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl space-y-6 px-6 sm:px-8">
        <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">About Me</h2>
        <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
          <p>
            I am a passionate frontend developer who enjoys creating clean,
            responsive and user-friendly websites using HTML, CSS and JavaScript.
          </p>
          <p>
            I love learning new technologies and improving my design skills.
            My goal is to build websites that look modern and work smoothly
            on all devices.
          </p>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            Skills: HTML, CSS, JavaScript, Responsive Design, GitHub
          </p>
        </div>
      </div>
    </section>
  );
}
