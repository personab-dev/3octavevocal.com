"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-100px 0px -70% 0px",
      threshold: 0,
    });

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-4">
      <h4 className="text-sm font-bold text-text-on-light uppercase tracking-wider">
        목차
      </h4>
      <ul className="space-y-2.5">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? "16px" : "0px" }}
            className="group"
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                window.history.pushState(null, "", `#${heading.id}`);
              }}
              className={cn(
                "block transition-all duration-200 break-keep leading-snug relative",
                heading.level === 2
                  ? "text-sm font-bold mt-5 mb-2 pb-1.5"
                  : "text-[13px] py-1",
                activeId === heading.id
                  ? "text-accent"
                  : "text-zinc-500 hover:text-text-on-light"
              )}
            >
              {heading.level === 2 && (
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-all duration-300",
                    activeId === heading.id
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0 group-hover:w-3 group-hover:opacity-30"
                  )}
                />
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
