# YTA website legal and privacy review

Reviewed 7 October 2026. This is a website implementation and risk review, not a legal opinion or confirmation that either firm complies with every applicable rule. Have a Malaysian lawyer and the firm's responsible partner review the notices and the outstanding operational matters.

## Scope and evidence

Reviewed all current page components, service data (including Chinese copy), enquiry and career flows, image use, links, map embeds, hosting configuration and app dependencies. The application is a static export on Cloudflare Pages. The contact form constructs a local mailto draft; it does not have a submission API. Careers use mailto. No application analytics, advertising SDK, cookie setter or browser-storage use was found. The published homepage's external script inventory contained only site-local Next.js scripts; dashboard-level Cloudflare settings were not audited. This is not a full penetration test or a review of the firm's internal client files, email accounts or contracts.

## Changes implemented

- Added `/privacy-policy` and its Bahasa Malaysia equivalent `/privacy-policy/ms`. Both cover public enquiries, CVs, technical data, purposes, recipient classes, overseas processing, retention principles and privacy requests. They name both firms presented on the site and identify the relevant receiving firm rather than asserting an unverified joint-controller structure.
- Added `/terms-and-conditions` for the informational website, separate from paid professional engagements. Includes general-information limitations, intellectual-property and external-link notices, reasonable lawful liability boundaries and Malaysian governing law. No shopping, payment, cancellation or refund promises were invented for this enquiry-only site.
- Added `/cookie-policy` explaining current application behaviour and conditional Cloudflare security cookies. No blanket claim that all providers never set cookies.
- Added policy links to every footer, the enquiry consent wording and recruitment notice. Enquiry consent is specific and does not opt visitors into marketing. Sensitive records are discouraged in initial emails.
- Google Maps is absent from the DOM until a visitor deliberately loads it. A privacy explanation precedes the action; a hide control removes the frame. Choice is per-page memory only, with no cookie or local storage. The written address remains available. No site-wide analytics consent banner is necessary for this application configuration; reassess before enabling tracking.
- Added visible illustrative/AI image disclosure. Added professional-body/authority non-endorsement notices and distinction between individual memberships and firm authorisations.
- Changed homepage practice age from 35 years to more than three decades, consistent with the stated 1992 founding. Partner experience is a separate fact.
- Corrected Axcelasia's listing milestone to 2015 using SGX's announcement.
- Removed current firm-level Taxand membership claims: the inspected official Taxand publication names Tricor Taxand, not YT Associates or Peter Tang & Associates. A partner's historical role does not establish current firm membership. Removed the present-tense Taxand leadership assertion from the bio pending reconfirmation; the historical 2006 milestone remains based on the firm's original published biography.
- Removed the unconfirmed wealth-management offer from both China Desk translations and scope lists. Qualified immigration, certification and intellectual-property application promises to require a separately confirmed scope and appropriately authorised provider. Mandarin support is now confirmed per engagement rather than promised universally.
- Added service-scope, authorisation, outcome and audit-independence qualifications. Removed categorical payroll-deadline and one-working-day response guarantees.
- Updated audit-exemption FAQ to refer to SSM PD 10/2024 and its phased criteria, with an official source link. Qualified the deadline and auditor-change explanations so they do not purport to describe every case.

## Outstanding business and legal checks

| Priority | Owner confirmation or action needed | Why it matters |
| --- | --- | --- |
| High | Confirm the legal entity controlling this website and the shared info@yta.com.my inbox, who can access it, and which firm receives CVs. Revise the notice if one firm alone is responsible. | A privacy notice must accurately identify the relevant data controller and recipient classes. Names on a website do not establish operational access or control. |
| High | Confirm email/IT providers, processing locations, overseas-transfer basis and processor contracts. Confirm whether enquiry details are forwarded to an affiliate or external adviser. | A privacy page alone does not establish a lawful transfer or contractual safeguards. |
| High | Set and enforce actual retention/deletion periods for enquiries, unsuccessful CVs, backups and professional records; restrict mailbox access and protect sensitive attachments. | A retention principle must be supported by an operational procedure. No invented numeric period has been published. |
| High | Confirm current audit firm registrations, practising certificates, approved tax-agent/liquidator status, and the scope of any capital-market authorisation or exemption. Review IPO/M&A and insolvency services against that scope. | Professional memberships do not authorise every regulated activity. Website qualifications cannot cure unlicensed work. |
| High | Assess PDPA registration duties, whether DPO appointment thresholds apply, and adopt breach-assessment/notification and privacy-request procedures. | DPO and breach requirements introduced in 2025 are operational obligations; policy pages do not discharge them. DPO thresholds include more than 20,000 individuals' personal data, more than 10,000 individuals' sensitive/financial data, or regular systematic monitoring, as described in current JPDP guidance. |
| Medium | Confirm today's leadership roles, professional memberships, network relationships and actual service availability. Retain supporting records. | The original firm website supports many historic credentials, but it does not prove current registration or availability. |
| Medium | Verify rights/permissions and brand-use terms for professional-body and government logos. Record the licence/provenance of original photo inputs, including the KLCC photograph used for the AI-refined hero. | AI refinement does not establish permission to use an underlying copyrighted photo; a non-endorsement disclaimer does not grant logo rights. Remove or replace any asset whose rights cannot be established. |
| Medium | Have a Malaysian lawyer check website terms and bilingual privacy notice against actual operations. Have a fluent Bahasa Malaysia reviewer check legal terminology and parity. | This is a tailored working draft, not legal clearance. Do not add an artificial language-priority clause that weakens the national-language notice. |
| Medium | Review Google and Cloudflare settings periodically; rescan when adding analytics, chat, CAPTCHA, marketing pixels, uploads or a server form. | Provider configuration can change data flows independently of repository code. |
| Medium | Confirm audit/non-audit independence safeguards where accounting, payroll and audit are offered to the same organisation. | Appropriate scope and providers depend on the engagement and professional rules. |

## Primary references

- [JPDP quick guide to privacy notices](https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/01/A-Quick-Guide-to-PRIVACY-NOTICE.pdf): written notice and English/national-language requirement under section 7.
- [JPDP current FAQ](https://www.pdp.gov.my/ppdpv1/en/faq/) and [DPO guideline](https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/08/GP_DPO_ENG.pdf): DPO applicability and administration. Some older FAQ statements predate amendments, so use current guidelines and the amended Act for operational advice.
- [JPDP breach notification guideline](https://www.pdp.gov.my/ppdpv1/wp-content/uploads/2025/08/GP_DBN_ENG.pdf): assess incidents and applicable reporting/notification duties.
- [SSM audit-exemption guidance](https://www.ssm.com.my/Pages/Legal_Framework/Audit-Exemption.aspx) and [updated FAQ](https://ssm.com.my/Pages/Legal_Framework/Document/PART%20Q%20%286.11.2025%29.pdf): PD 10/2024 criteria, phases and overriding obligations.
- [SGX listing confirmation](https://links.sgx.com/1.0.0/corporate-announcements/8I5OJ9MDFEAY7W6C/3e34dc4396ef0e1fddbbe6f09425e6564445c97a833033826ef772b1416260a7): Axcelasia trading began 27 November 2015.
- [Taxand Malaysia publication](https://www.taxand.com/wp-content/uploads/2024/01/Malaysia.pdf): identifies Tricor Taxand as Taxand Malaysia.
- [Original leadership page](https://petertang.com/index.php/aboutus/the-leadership): source for existing biographies and historical qualifications; current validity still needs owner confirmation.
- [SC licensing overview](https://www.sc.com.my/regulation/licensing): corporate-finance advice, investment advice and financial planning are among regulated activities; exemptions and actual permissions require a case-specific review.
- [MIA By-Laws, February 2025 update](https://mia.org.my/storage/2025/07/By-Laws-updated-Feb-2025-Effective-1-July-2025.pdf): professional behaviour/marketing and independence review. The search index identified this current document, but the full PDF returned 403 during this review; its detailed requirements have not been independently verified here.
- [Cloudflare cookie documentation](https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/), [Google Privacy Policy](https://policies.google.com/privacy) and [Google cookies](https://policies.google.com/technologies/cookies): hosting security and optional map-provider notices.

## Validation record

- `npm run lint` and `git diff --check` passed.
- `npm run build:static` passed: all four new legal routes are included in the export.
- Browser checks passed for every legal route on desktop and narrow mobile layouts: one correct title, no horizontal overflow, valid contents anchors and all three footer policy links.
- Malay full-load metadata and client navigation to/from the English notice settled to `ms`/`en` correctly.
- Contact draft test used fictitious `website-qa@example.com` data locally: preparation was blocked before consent, then produced only a mailto draft after consent. The email link was not activated and no message was sent. Reload cleared the draft.
- Maps check passed: zero frames before choice, one after load, zero after hide and zero after reload. The narrow-screen privacy-link overlap found during review was corrected and visually rechecked.
- Source and published-homepage script inspections found no analytics or advertising integration; Cloudflare account configuration and HttpOnly cookies are outside this check.
- Local browser proof and route-check artifacts are in `artifacts/legal-review/`; final live deployment verification follows publication.
