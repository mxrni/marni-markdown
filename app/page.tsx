import fs from "fs";
import Link from "next/link";

async function getMarkdownFiles() {
  const markdownDir = "./markdown";
  const fileNames = fs.readdirSync(markdownDir);

  const mdFiles = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      return {
        slug,
        metadata: (await import(`@/markdown/${fileName}`)).metadata,
      };
    })
  );

  return mdFiles;
}

function isNewMd(dateStr: string) {
  const targetDate = new Date(dateStr);
  const today = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  if (targetDate >= sevenDaysAgo && targetDate <= today) {
    return true;
  }

  return false;
}

export default async function Home() {
  const mdFiles = await getMarkdownFiles();

  // sort by date
  mdFiles.sort((a, b) => {
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();
    return dateB - dateA;
  });

  return (
    <section>
      {mdFiles.map((mdFile, index) => (
        <Link
          href={`/${mdFile.slug}`}
          key={index}
          className="group my-4 py-4 rounded-xl px-6 bg-darker hover:ring-2 hover:ring-accent transition-all ease-in-out duration-100 block"
        >
          <article className="relative isolate flex justify-between flex-col gap-8 lg:flex-row">
            <div>
              <div className="relative max-w-xl">
                <h3 className="text-lg font-semibold leading-6 text-primary group-hover:text-accent transition-all ease-in-out duration-100">
                  {mdFile.metadata.title}
                </h3>
                <p className="text-sm leading-6 text-secondary">
                  {mdFile.metadata.description}
                </p>
              </div>
            </div>
            {isNewMd(mdFile.metadata.date) && (
              <div>
                <p className="rounded-full bg-accent/10 px-2.5 whitespace-nowrap py-1 text-xs font-semibold leading-5 text-accent">
                  Aktuell
                </p>
              </div>
            )}
          </article>
        </Link>
      ))}
    </section>
  );
}
