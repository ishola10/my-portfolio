"use client";

import { useState } from "react";
import { site, socialLinks } from "@/lib/site";
import { C, CodeFrame, K, S } from "../CodeFrame";
import { useWorkspace } from "../WorkspaceContext";

export function ContactView() {
  const { preview } = useWorkspace();
  const [ran, setRan] = useState(false);

  if (!preview) {
    return (
      <CodeFrame>
        <><C>#!/bin/bash</C></>
        <><K>echo</K> <S>&quot;{site.availability}&quot;</S></>
        <><K>open</K> <S>&quot;mailto:{site.email}&quot;</S></>
        {socialLinks.map((social) => (
          <span key={social.label}>
            <K>echo</K> <S>&quot;{social.label}: {social.handle}&quot;</S>
          </span>
        ))}
      </CodeFrame>
    );
  }

  return (
    <div className="ide-scroll h-full overflow-auto px-6 py-8 lg:px-12">
      <p className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase">
        contact.sh
      </p>
      <h1 className="mt-3 max-w-2xl font-serif text-4xl tracking-tight sm:text-5xl">
        A short email is enough.
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        {site.availability}. I usually reply within a couple of days.
      </p>

      <div className="mt-8 overflow-hidden rounded-md border border-border bg-[#14110e]">
        <div className="border-b border-border px-4 py-2 font-mono text-[10px] text-muted-foreground">
          bash
        </div>
        <div className="space-y-1 px-4 py-4 font-mono text-[13px]">
          <p className="text-primary">~/portfolio $ ./contact.sh</p>
          {ran ? (
            <>
              <p>{site.availability}</p>
              <p>
                mailto:
                <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              {socialLinks.map((social) => (
                <p key={social.label}>
                  {social.label}:{" "}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {social.handle}
                  </a>
                </p>
              ))}
            </>
          ) : (
            <p className="text-muted-foreground">press run to execute</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setRan(true)}
          className="rounded-md bg-foreground px-4 py-2 text-sm text-background"
        >
          Run script
        </button>
        <a
          href={`mailto:${site.email}`}
          className="rounded-md border border-border px-4 py-2 text-sm"
        >
          {site.email}
        </a>
      </div>
    </div>
  );
}
