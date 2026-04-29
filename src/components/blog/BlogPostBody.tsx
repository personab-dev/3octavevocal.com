"use client";

import { useEffect, useState } from "react";
import TableOfContents from "./TableOfContents";

interface FAQItem {
  question: string;
  answer: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogPostBodyProps {
  html: string;
}

export default function BlogPostBody({ html }: BlogPostBodyProps) {
  const [faqData, setFaqData] = useState<{ title: string; items: FAQItem[] } | null>(null);
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [processedHtml, setProcessedHtml] = useState(html);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // 1. 목차 추출 및 ID 삽입
    const headingElements = Array.from(doc.querySelectorAll("h2, h3"));
    const tocItems: TOCItem[] = headingElements.map((el, index) => {
      const id = `heading-${index}`;
      el.id = id;
      return {
        id,
        text: el.textContent || "",
        level: parseInt(el.tagName.substring(1)),
      };
    });
    setHeadings(tocItems);

    // 2. FAQ 섹션 추출
    let faqSection = doc.querySelector(".faq-wrap");

    if (!faqSection) {
      const allElements = Array.from(
        doc.body.querySelectorAll("h2, h3, div, section")
      );
      const faqTitleEl = allElements.find((el) =>
        el.textContent?.includes("자주하는 질문")
      );
      if (faqTitleEl) {
        faqSection =
          faqTitleEl.closest("section, div.wp-block-group") ||
          faqTitleEl.parentElement;
      }
    }

    if (faqSection) {
      const title =
        faqSection.querySelector("h1, h2, h3, .faq-title")?.textContent ||
        "자주하는 질문";
      const items: FAQItem[] = [];

      const detailsElements = faqSection.querySelectorAll("details.faq-item");
      if (detailsElements.length > 0) {
        detailsElements.forEach((details) => {
          const summary = details.querySelector("summary.faq-q");
          const qText = summary?.textContent?.trim();

          const clone = details.cloneNode(true) as HTMLElement;
          const summaryInClone = clone.querySelector("summary");
          if (summaryInClone) summaryInClone.remove();
          const aHtml = clone.innerHTML.trim();

          if (qText && aHtml) {
            items.push({ question: qText, answer: aHtml });
          }
        });
      } else {
        const questions = Array.from(
          faqSection.querySelectorAll("h3, h4, .faq-question, strong, b")
        );

        questions.forEach((q) => {
          const qText = q.textContent?.trim();
          if (!qText || qText === title.trim() || qText === "자주하는 질문") return;

          let answer = "";
          let nextEl = q.nextElementSibling;

          while (
            nextEl &&
            !["H3", "H4", "STRONG", "B"].includes(nextEl.tagName) &&
            !nextEl.classList.contains("faq-question")
          ) {
            answer += nextEl.outerHTML;
            nextEl = nextEl.nextElementSibling;
          }

          if (answer) {
            items.push({ question: qText, answer });
          }
        });
      }

      if (items.length > 0) {
        setFaqData({ title, items });
        faqSection.remove();
      }
    }

    setProcessedHtml(doc.body.innerHTML);
  }, [html]);

  return (
    <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* 좌측 사이드바 목차 */}
      <aside className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
          <TableOfContents headings={headings} />
        </div>
      </aside>

      {/* 본문 */}
      <div className="flex-1 min-w-0">
        <div className="space-y-12">
          <div
            className="prose prose-lg prose-blog max-w-none break-keep"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />

          {faqData && (
            <section
              id="faq-section"
              className="border-t border-zinc-200 pt-12 mt-12"
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center text-text-on-light">
                <span className="w-1.5 h-6 bg-accent mr-3 rounded-full" />
                {faqData.title}
              </h2>
              <div className="w-full">
                {faqData.items.map((item, index) => (
                  <details
                    key={index}
                    className="group border-b border-zinc-200 py-2"
                  >
                    <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-lg font-medium text-text-on-light transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                      <span>{item.question}</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div
                      className="prose prose-sm prose-blog max-w-none pb-6 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
