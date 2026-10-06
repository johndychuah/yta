import { LegalPage } from "@/components/legal/LegalPage";
import { privacyMalay } from "@/data/privacyNotice";

export default function PrivacyPolicyMalayPage() {
  return <LegalPage title="Polisi Privasi" intro="Cara maklumat peribadi dikendalikan apabila anda melayari laman web kami, membuat pertanyaan atau menghantar permohonan kerjaya." sections={privacyMalay} language="ms" languageLink={{ href: "/privacy-policy", label: "English" }}>
    <p className="mt-8 text-sm leading-7 text-[#596575]">Pengawal selia privasi Malaysia: <a href="https://www.pdp.gov.my/" target="_blank" rel="noopener noreferrer" className="text-[#1f5f9e] underline">Pesuruhanjaya Perlindungan Data Peribadi (JPDP)</a>.</p>
  </LegalPage>;
}
