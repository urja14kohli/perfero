'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [title, sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="bg-ivory min-h-screen">
      <section className="max-w-[1100px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6 md:gap-10">
        {/* Sidebar TOC - Desktop */}
        <aside className="hidden md:block sticky top-24 h-fit">
          <nav className="rounded-2xl border border-line bg-white p-5 text-sm shadow-card">
            <p className="font-semibold text-charcoal mb-3">On this page</p>
            <ul className="space-y-2 text-muted">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`text-left hover:text-gold transition-colors duration-200 ${
                      activeSection === id ? 'text-gold font-medium' : ''
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <article className="bg-white rounded-2xl border border-line shadow-card p-6 sm:p-8 md:p-10">
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-sm text-muted hover:text-gold transition-colors duration-200 mb-4"
            >
              ← Back to Home
            </Link>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
          </div>

          <div className="prose prose-neutral max-w-none 
            prose-headings:font-display prose-headings:text-charcoal prose-headings:scroll-mt-24
            prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-[15px] prose-p:leading-7 prose-p:text-muted prose-p:mb-4
            prose-ul:text-[15px] prose-ul:leading-7 prose-ul:text-muted prose-ul:mb-4
            prose-li:mb-2
            prose-a:text-gold prose-a:underline-offset-4 hover:prose-a:text-gold-deep hover:prose-a:underline
            prose-strong:text-charcoal prose-strong:font-semibold">
            {children}
          </div>
        </article>
      </section>

      {/* Structured Data */}
      <script
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
    </main>
  );
}

