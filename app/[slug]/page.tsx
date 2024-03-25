import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string } }) {
  try {
    const mdx = await import(`@/markdown/${params.slug}.mdx`);
    return mdx.default({});
  } catch (error) {
    notFound();
  }
}
