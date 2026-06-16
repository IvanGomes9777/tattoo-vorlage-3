import Link from "next/link";
import { Reveal } from "./Reveal";

type Crumb = { name: string; href?: string };

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <header className="relative overflow-hidden bg-cream-2/50 pt-32 pb-14">
      <div className="paper absolute inset-0" />
      <div className="container-x relative">
        {crumbs && (
          <nav aria-label="Brotkrumen" className="mb-5 text-xs text-ink/50">
            <ol className="flex flex-wrap items-center gap-2">
              {crumbs.map((c, i) => (
                <li key={c.name} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-oxblood">{c.name}</Link>
                  ) : (
                    <span className="text-ink/70">{c.name}</span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>·</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="t-h1 mt-4 max-w-3xl">{title}</h1>
          {intro && <p className="lead mt-5 text-ink/70">{intro}</p>}
        </Reveal>
      </div>
      <div className="flourish mt-12 opacity-60" />
    </header>
  );
}
