"use client";

import { useState } from "react";
import { experiences } from "@/lib/experience";
import { C, CodeFrame, N, S } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function ExperienceView() {
  const { preview } = useWorkspace();
  const [active, setActive] = useState(experiences[0].id);
  const current = experiences.find((exp) => exp.id === active) ?? experiences[0];

  if (!preview) {
    return (
      <CodeFrame>
        <><C>{"# git log --oneline"}</C></>
        {experiences.map((exp) => (
          <span key={exp.id}>
            <N>{exp.hash}</N>  <S>{exp.role}</S> @ {exp.company}
          </span>
        ))}
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll grid h-full min-h-0 overflow-hidden lg:grid-cols-[minmax(16rem,22rem)_1fr]">
      <div className="ide-scroll overflow-auto border-b border-border lg:border-r lg:border-b-0">
        <p className="px-4 py-3 font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
          git log
        </p>
        {experiences.map((exp, index) => (
          <button
            key={exp.id}
            type="button"
            onClick={() => setActive(exp.id)}
            className={`flex w-full items-start gap-3 px-4 py-3 text-left ${
              exp.id === active ? "bg-primary/10" : "hover:bg-foreground/5"
            }`}
          >
            <span className="mt-1 font-mono text-[10px] text-primary">
              {exp.hash}
            </span>
            <span>
              <span className="block text-sm text-foreground">{exp.role}</span>
              <span className="block text-xs text-muted-foreground">
                {exp.company}
              </span>
            </span>
            {index === 0 ? (
              <span className="ml-auto font-mono text-[10px] text-primary">
                HEAD
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <div className="ide-scroll overflow-auto px-6 py-8 lg:px-10">
        <p className="font-mono text-[11px] text-primary">
          commit {current.hash}
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight">{current.role}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {current.company} · {current.location}
        </p>
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          {current.period}
        </p>
        <ul className="mt-8 space-y-3">
          {current.points.map((point) => (
            <li
              key={point}
              className="border-l-2 border-primary/40 pl-4 text-[15px] leading-relaxed text-muted-foreground"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
