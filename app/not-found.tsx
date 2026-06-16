import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center">
      <div className="container-x text-center">
        <p className="eyebrow">Fehler 404</p>
        <h1 className="t-display mt-4">Clitze clein verlaufen.</h1>
        <p className="lead mx-auto mt-5 text-ink/70">
          Diese Seite gibt&rsquo;s leider nicht. Aber dein nächstes Tattoo schon –
          lass uns reden.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-primary">Zur Startseite</Link>
          <Link href="/#kontakt" className="btn btn-ghost">Kontakt</Link>
        </div>
      </div>
    </section>
  );
}
