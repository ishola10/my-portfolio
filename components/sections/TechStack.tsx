const groups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Interface",
    items: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    label: "Platform",
    items: ["Node.js", "REST APIs", "Firebase", "Git"],
  },
];

export function TechStack() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="section-container">
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          04 — Stack
        </p>
        <h2 className="mb-12 font-serif text-3xl tracking-tight text-foreground sm:text-4xl lg:mb-16">
          Tools I reach for.
        </h2>

        <div className="grid gap-10 sm:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-[15px] text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
