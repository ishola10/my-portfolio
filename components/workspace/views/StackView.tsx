"use client";

import { useState } from "react";
import { CodeFrame, N, S } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

const stack = {
  languages: ["TypeScript", "JavaScript"],
  interface: ["React", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  platform: ["Node.js", "REST APIs", "Firebase", "Git"],
};

export function StackView() {
  const { preview } = useWorkspace();
  const [active, setActive] = useState<string | null>(null);

  if (!preview) {
    return (
      <CodeFrame>
        <>{"{"}</>
        <>  <S>&quot;name&quot;</S>: <S>&quot;muhammed-badmus&quot;</S>,</>
        <>  <S>&quot;private&quot;</S>: <N>true</N>,</>
        <>  <S>&quot;dependencies&quot;</S>: {"{"}</>
        {Object.values(stack)
          .flat()
          .map((item) => (
            <span key={item}>
              {"    "}<S>&quot;{item.toLowerCase()}&quot;</S>: <S>&quot;latest&quot;</S>,
            </span>
          ))}
        <>  {"}"}</>
        <>{"}"}</>
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto px-6 py-8 lg:px-12">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        package.json
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">Dependencies</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Hover a package. This is the stack I actually ship with.
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {Object.entries(stack).map(([group, items]) => (
          <div key={group}>
            <p className="mb-3 font-mono text-[11px] text-muted-foreground uppercase">
              {group}
            </p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(item)}
                    onFocus={() => setActive(item)}
                    className={`w-full rounded px-2 py-1.5 text-left font-mono text-sm ${
                      active === item
                        ? "bg-primary/15 text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 font-mono text-xs text-muted-foreground">
        {active ? `selected: "${active}"` : "// select a dependency"}
      </p>
    </div>
  );
}
