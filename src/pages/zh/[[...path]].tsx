import type { GetStaticPaths, GetStaticProps } from 'next';
import HomePage from '../index';
import AboutPage from '../about-us';
import ServicesPage from '../services';
import ContactPage from '../contact';
import CareerPage from '../career';
import ProfessionalBodiesPage from '../professional-bodies';
import PrivacyPolicyPage from '../privacy-policy';
import TermsPage from '../terms-and-conditions';
import CookiePolicyPage from '../cookie-policy';
import ServicePage from '../services/[slug]';
import { serviceDetails, serviceNavItems, type ServiceSlug } from '@/data/serviceDetails';

export const chinesePaths = ['', 'about-us', 'services', 'contact', 'career', 'professional-bodies', 'privacy-policy', 'terms-and-conditions', 'cookie-policy', ...serviceNavItems.map(item => `services/${item.slug}`)];
const pages: Record<string, React.ComponentType> = {'':HomePage,'about-us':AboutPage,'services':ServicesPage,'contact':ContactPage,'career':CareerPage,'professional-bodies':ProfessionalBodiesPage,'privacy-policy':PrivacyPolicyPage,'terms-and-conditions':TermsPage,'cookie-policy':CookiePolicyPage};

export default function ChinesePage({ path }: {path: string}) {
  if (path.startsWith('services/')) return <ServicePage service={serviceDetails[path.slice(9) as ServiceSlug]} />;
  const Page = pages[path];
  return <Page />;
}
export const getStaticPaths: GetStaticPaths = () => ({ paths: chinesePaths.map(path => ({params:{path:path ? path.split('/') : []}})), fallback:false });
export const getStaticProps: GetStaticProps = ({params}) => {
  const path = Array.isArray(params?.path) ? params.path.join('/') : '';
  return chinesePaths.includes(path) ? {props:{path}} : {notFound:true};
};
