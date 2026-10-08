import { Children, createContext, useContext, isValidElement, cloneElement, type ReactNode, type ReactElement } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import type { ComponentProps } from 'react';
import translations from './zh.json';

export type Locale = 'en' | 'zh';
const LocaleContext = createContext<Locale>('en');
export const LocaleProvider = LocaleContext.Provider;
const dictionary: Record<string, string> = translations;
const normalise = (text: string) => text.replace(/\s+/g, ' ').trim();

export function translateText(text: string, locale: Locale): string {
  if (locale !== 'zh') return text;
  const key = normalise(text);
  const translated = dictionary[key];
  if (translated) return text.replace(key, translated) === text ? translated : text.replace(key, translated);
  if (key.endsWith(' logo')) return `${dictionary[key.slice(0, -5)] ?? key.slice(0, -5)} 标志`;
  return text;
}

export function localisedHref(href: string, locale: Locale): string {
  if (locale !== 'zh' || !href.startsWith('/') || href.startsWith('//') || /^\/zh(?:\/|$)/.test(href) || href.startsWith('/privacy-policy/ms')) return href;
  if (href === '/services/china-malaysia-desk/zh') return '/zh/services/china-malaysia-desk';
  return href === '/' ? '/zh' : `/zh${href}`;
}

function translateNode<T>(value: T, locale: Locale): T {
  if (typeof value === 'string') return translateText(value, locale) as T;
  if (Array.isArray(value)) return Children.map(value as ReactNode[], child => translateNode(child, locale)) as T;
  if (isValidElement(value)) {
    const element = value as ReactElement<{children?: ReactNode}>;
    return cloneElement(element, {}, translateNode(element.props.children, locale)) as T;
  }
  return value;
}

export function useTranslation() {
  const locale = useContext(LocaleContext);
  return { locale, t: <T,>(value: T): T => translateNode(value, locale), href: (value: string) => localisedHref(value, locale) };
}

export function LocalisedLink(props: ComponentProps<typeof NextLink>) {
  const { locale } = useTranslation();
  const href: LinkProps['href'] = typeof props.href === 'string' ? localisedHref(props.href, locale) : props.href;
  return <NextLink {...props} href={href} />;
}
