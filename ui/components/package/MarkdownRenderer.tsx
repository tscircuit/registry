"use client"

import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Prism from "prismjs"
import { useEffect } from "react"
import "github-markdown-css"

export const MarkdownRenderer = ({ markdown }: { markdown: string }) => {
  useEffect(() => {
    // Highlight code blocks with Prism
    Prism.highlightAll()
  }, [markdown])

  return (
    <Markdown remarkPlugins={[remarkGfm]} className="markdown-body">
      {markdown}
    </Markdown>
  )
}
