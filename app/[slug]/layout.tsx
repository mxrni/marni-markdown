import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Link href={"/"} className="text-secondary opacity-50">
        &larr; Zurück
      </Link>
      <article
        className="
        prose prose-invert 
        text-secondary 
        prose-headings:text-primary 
        prose-a:text-accent 
        prose-base:text-primary 
        prose-img:rounded-lg 
        prose-inline-code
        "
      >
        {children}
      </article>
    </>
  );
}
