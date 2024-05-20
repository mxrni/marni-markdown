"use client";

export default function AktuellBadge({
  mdFile,
}: {
  mdFile: {
    slug: string;
    metadata: any;
  };
}) {
  function isAktuell(dateStr: string) {
    const targetDate = new Date(dateStr);
    const today = new Date();

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7);

    if (targetDate >= sevenDaysAgo && targetDate <= today) {
      return true;
    }

    return false;
  }

  return (
    <>
      {isAktuell(mdFile.metadata.date) && (
        <div>
          <p className="rounded-full bg-accent/10 px-2.5 whitespace-nowrap py-1 text-xs font-semibold leading-5 text-accent">
            Aktuell
          </p>
        </div>
      )}
    </>
  );
}
