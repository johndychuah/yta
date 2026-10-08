import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from '@/i18n/Locale';

type SEOProps = {title:string;description?:string;alternates?:{en:string;zh:string}};
export function SEO({title,description}:SEOProps) {
  const {t}=useTranslation();
  const router=useRouter();
  const english=router.asPath.split(/[?#]/)[0].replace(/^\/zh(?=\/|$)/,'') || '/';
  const chinese=english === '/' ? '/zh' : `/zh${english}`;
  const malay=english === '/privacy-policy/ms';
  return <Head>
    <title>{title ? `${t(title)} | YT Associates` : 'YT Associates'}</title>
    {description && <meta name="description" content={t(description)}/>}
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    {!malay && <><link rel="alternate" hrefLang="en" href={english}/><link rel="alternate" hrefLang="zh-Hans" href={chinese}/><link rel="alternate" hrefLang="x-default" href={english}/></>}
  </Head>;
}
