import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 text-base leading-7 text-secondary">
          Die angefragte Seite konnte nicht gefunden werden
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-accent/10 transition-all ease-in-out duration-300 px-3.5 py-2.5 text-sm font-semibold text-accent shadow-sm hover:bg-accent/50 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
