"use client";

import { Children } from "react";
import { cn } from "@/lib/utils";

export function CodeFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const lines = Children.toArray(children);

  return (
    <div className={cn("ide-scroll h-full overflow-auto py-3", className)}>
      <div className="min-w-max font-mono text-[13px] leading-7">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            <span className="w-12 shrink-0 pr-4 text-right text-[11px] text-muted-foreground/70 select-none">
              {index + 1}
            </span>
            <div className="pr-8 whitespace-pre">{line}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function K({ children }: { children: React.ReactNode }) {
  return <span className="syn-k">{children}</span>;
}
export function S({ children }: { children: React.ReactNode }) {
  return <span className="syn-s">{children}</span>;
}
export function C({ children }: { children: React.ReactNode }) {
  return <span className="syn-c">{children}</span>;
}
export function F({ children }: { children: React.ReactNode }) {
  return <span className="syn-f">{children}</span>;
}
export function T({ children }: { children: React.ReactNode }) {
  return <span className="syn-t">{children}</span>;
}
export function N({ children }: { children: React.ReactNode }) {
  return <span className="syn-n">{children}</span>;
}
export function P({ children }: { children: React.ReactNode }) {
  return <span className="syn-p">{children}</span>;
}
