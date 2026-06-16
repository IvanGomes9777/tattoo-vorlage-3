import PageHeader from "./PageHeader";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title={title} crumbs={[{ name: "Start", href: "/" }, { name: title }]} />
      <section className="section-y">
        <div className="container-x">
          <div className="legal mx-auto max-w-3xl">{children}</div>
          <p className="mx-auto mt-12 max-w-3xl text-sm text-ink/50">Stand: {updated}</p>
        </div>
      </section>
    </>
  );
}
