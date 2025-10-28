'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

interface LegalLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
  sections: Array<{ id: string; label: string }>;
}

export default function LegalLayout({ title, updated, children, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    document.title = `${title} • PERFÉRO`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActiveSection(e.target.id));
      },
      { root: null, rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [title, sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-ivory font-sans">
      <section className="max-w-[1040px] mx-auto px-5 sm:px-6 py-10 sm:py-14 md:py-20 grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-6 md:gap-10">
        {/* Sidebar TOC */}
        <aside className="hidden md:block sticky top-24 h-fit">
          <nav className="rounded-xl border border-line/70 bg-white p-4 text-[13px] shadow-sm">
            <p className="mb-2 font-medium text-charcoal/80">On this page</p>
            <ul className="space-y-1.5">
              {sections.map(({ id, label }) => {
                const active = activeSection === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className={[
                        'group flex w-full items-center gap-2 rounded-md px-2 py-1.5 transition-colors',
                        active ? 'text-gold font-medium bg-gold/5' : 'text-muted hover:text-gold'
                      ].join(' ')}
                    >
                      <span
                        className={[
                          'h-3 w-1.5 rounded-sm transition-colors',
                          active ? 'bg-gold' : 'bg-transparent group-hover:bg-gold/60'
                        ].join(' ')}
                      />
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main */}
        <article className="bg-white rounded-2xl border border-line/70 shadow-sm px-6 sm:px-8 md:px-12 py-8 sm:py-10">
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center text-[13px] text-muted hover:text-gold transition-colors mb-6"
            >
              ← Back to Home
            </Link>

            <h1 className="font-display text-[28px] sm:text-[34px] md:text-[40px] leading-[1.2] tracking-tight text-charcoal font-normal">
              {title}
            </h1>

            <p className="mt-2 text-[12.5px] text-muted/80">
              Last updated: <time dateTime={updated}>{updated}</time>
            </p>
          </div>

          {/* Content */}
          <div
            className="
              prose prose-neutral max-w-[72ch]
              prose-headings:font-display prose-headings:text-lg prose-headings:mt-6 prose-headings:text-charcoal prose-headings:scroll-mt-28
              prose-h2:text-[22px] prose-h2:sm:text-[24px] prose-h2:md:text-[26px] prose-h2:font-medium prose-h2:leading-[1.35]
              prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-line/40 prose-h2:pb-3
              prose-h3:text-[17px] prose-h3:sm:text-[18px] prose-h3:font-medium prose-h3:text-charcoal/90 prose-h3:mt-8 prose-h3:mb-2
              prose-p:text-[15.5px] prose-p:leading-[1.9] prose-p:text-charcoal/80 prose-p:mt-6 prose-ul:mt-6 prose-ul:pl-8 prose-li:mb-2 list-disc list-outside
              prose-ul:text-[15.5px] prose-ul:leading-[1.9] prose-ul:text-charcoal/80 prose-ul:mt-4 prose-ul:mb-6
              prose-ol:text-[15.5px] prose-ol:leading-[1.9] prose-ol:text-charcoal/80 prose-ol:mt-4 prose-ol:mb-6
              prose-li:my-0 prose-li:pl-1 prose-li:mb-4
              prose-strong:font-medium prose-strong:text-base prose-strong:text-charcoal
              prose-a:text-gold hover:prose-a:text-gold-deep prose-a:underline-offset-4
              prose-h2:mb-8 prose-h3:mb-6
            "
          >
            {children}
          </div>
        </article>
      </section>

      {/* Structured Data */}
      <Script
        id="legal-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: title,
            dateModified: updated,
            publisher: {
              '@type': 'Organization',
              name: 'PERFÉRO Fragrance',
              url: 'https://www.perferofragrance.com'
            }
          })
        }}
      />
    </div>
  );
}
