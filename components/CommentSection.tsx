"use client";

import Giscus from "@giscus/react";

export default function CommentSection() {
  return (
    <Giscus
      id="comments"
      repo="mxrni/marni-markdown"
      repoId="R_kgDOLlZhcQ"
      category="General"
      categoryId="DIC_kwDOLlZhcc4CeOYt"
      mapping="pathname"
      strict="0"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="dark"
      lang="de"
      loading="lazy"
    />
  );
}
