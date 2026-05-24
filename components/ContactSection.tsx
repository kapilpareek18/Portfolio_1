export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-slate-200/80 bg-white py-20 dark:border-slate-800/80 dark:bg-slate-950">
      <div className="mx-auto max-w-4xl space-y-6 px-6 sm:px-8 text-slate-700 dark:text-slate-300">
        <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Contact</h2>
        <div className="space-y-4 text-base leading-7">
          <p>Email: kapilpareek@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Location: Jodhpur, Rajasthan</p>
          <p>
            Feel free to contact me for freelance projects, collaborations or web development work.
          </p>
        </div>
      </div>
    </section>
  );
}
