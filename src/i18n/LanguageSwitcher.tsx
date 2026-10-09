import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from './Locale';

export function LanguageSwitcher({ inline = false }: { inline?: boolean }) {
  const { locale } = useTranslation();
  const router = useRouter();
  const optionsId = useId();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const english = router.asPath.replace(/^\/zh(?=\/|[?#]|$)/, '') || '/';
  const normalised = /^[?#]/.test(english) ? `/${english}` : english;
  const base = normalised === '/privacy-policy/ms' ? '/privacy-policy' : normalised.replace('/services/china-malaysia-desk/zh', '/services/china-malaysia-desk');
  const chinese = base === '/' ? '/zh' : `/zh${base}`;
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => { if (event.target instanceof Node && !ref.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);
  return <div ref={ref} className="relative" onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); ref.current?.querySelector('button')?.focus(); } }}>
    {inline && <p className="px-2 py-2 text-sm font-semibold text-[#596575]">{locale === 'zh' ? '语言 / Language' : 'Language / 语言'}</p>}
    {!inline && <button type="button" aria-label={locale === 'zh' ? '选择语言' : 'Choose language'} aria-expanded={inline || open} aria-controls={optionsId} onClick={() => setOpen(!open)} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-2 text-[#27303a] hover:bg-[#f3f3f3] focus-visible:outline-2 focus-visible:outline-[#1f5f9e] `}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"/></svg>
      <span className="text-sm font-semibold">{inline ? (locale === 'zh' ? '语言' : 'Language') : (locale === 'zh' ? '中文' : 'EN')}</span>
    </button>}
    {(open || inline) && <div id={optionsId} className={inline ? "mt-1 grid grid-cols-2 gap-2" : "absolute right-0 top-full z-50 mt-2 min-w-36 rounded-lg border border-black/10 bg-white p-1 shadow-lg"}>
      <Link href={base} onClick={() => setOpen(false)} hrefLang="en" lang="en" aria-current={locale === 'en' ? 'page' : undefined} className="flex min-h-11 items-center rounded px-3 text-sm text-[#27303a] hover:bg-[#fff3e4]">English {locale === 'en' && '✓'}</Link>
      <Link href={chinese} onClick={() => setOpen(false)} hrefLang="zh-Hans" lang="zh-Hans" aria-current={locale === 'zh' ? 'page' : undefined} className="flex min-h-11 items-center rounded px-3 text-sm text-[#27303a] hover:bg-[#fff3e4]">简体中文 {locale === 'zh' && '✓'}</Link>
    </div>}
  </div>;
}
