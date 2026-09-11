import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 lg:mb-16", className)}>
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {index}
      </p>
      <h2 className="font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
