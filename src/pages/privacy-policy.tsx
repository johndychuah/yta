import { useTranslation } from "@/i18n/Locale";
import { LegalPage } from "@/components/legal/LegalPage";
import { privacyEnglish } from "@/data/privacyNotice";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  return <LegalPage title={t("Privacy Policy")} intro="How personal information is handled when you browse our website, make an enquiry or send a career application." sections={privacyEnglish} languageLink={{ href: "/privacy-policy/ms", label: "Bahasa Malaysia" }}>
    <p className="mt-8 text-sm leading-7 text-[#596575]">{t("Malaysia’s privacy regulator:")}<a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer" className="text-[#1f5f9e] underline">{t("Personal Data Protection Commissioner (JPDP)")}</a>.</p>
  </LegalPage>;
}
