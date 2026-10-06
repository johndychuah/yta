import { useRouter } from "next/router";
import { serviceNavItems } from "@/data/serviceDetails";
import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CareerSection } from "@/components/contact/CareerSection";
import { OfficeMap, officeMapsUrl } from "@/components/common/OfficeMap";

const contactDetails = [
  {
    label: "KL Eco City Office",
    value: (
      <>
        SO-11-5 Menara 1, KL Eco City
        <br />3 Jalan Bangsar
        <br />59200 Kuala Lumpur, Malaysia
      </>
    ),
  },
  {
    label: "Phone",
    value: (
      <a href="tel:+60327284819" className="transition hover:text-[#03101c]">
        +603 2728 4819
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a
        href="mailto:info@yta.com.my"
        className="underline underline-offset-2 transition hover:text-[#03101c]"
      >
        info@yta.com.my
      </a>
    ),
  },
  {
    label: "Office Hours",
    value: (
      <>
        Monday - Friday: 8:00 AM - 5:00 PM
        <br />Saturday - Sunday: Closed
      </>
    ),
  },
];

function Field({
  label,
  type = "text",
  name,
  autoComplete,
  required = false,
}: {
  label: string;
  type?: string;
  name: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="mb-2 block text-sm font-semibold text-[#03101c]">{label}{required ? " *" : ""}</span>
      <input
        type={type}
        name={name}
        autoComplete={autoComplete}
        required={required}
        maxLength={200}
        className="h-14 w-full rounded-[8px] border border-[#dfe3e7] bg-white px-5 text-base font-medium tracking-[0.02em] text-[#03101c] outline-none transition placeholder:text-[#747986] focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
      />
    </label>
  );
}

export function ContactPageContent() {
  const { query } = useRouter();
  const [serviceInterest, setServiceInterest] = useState<string | null>(null);
  const selectedService = serviceInterest ?? serviceNavItems.find((item) => item.slug === query.service)?.title ?? "";
  const [draftHref, setDraftHref] = useState("");
  const draftRef = useRef<HTMLDivElement>(null);

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const subject = `Website enquiry: ${value("service")}`;
    const body = [
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      `Phone: ${value("phone") || "Not provided"}`,
      `Company: ${value("company") || "Not provided"}`,
      `Service: ${value("service")}`,
      "",
      value("message"),
    ].join("\n");
    setDraftHref(`mailto:info@yta.com.my?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    requestAnimationFrame(() => draftRef.current?.focus());
  }

  return (
    <>
      <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
        <div className="mx-auto grid max-w-[1280px] gap-[clamp(3rem,6vw,7rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1fr)] lg:items-center">
          <div>
            <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">
              Contact Us
            </p>
            <h1 className="mt-7 max-w-[42rem] text-[clamp(2rem,7.2vw,2.4rem)] sm:text-[clamp(2.4rem,3.5vw,4.25rem)] font-medium leading-[1.1] tracking-normal text-[#03101c]">
              Let&apos;s Talk About Your Business Needs
            </h1>
            <p className="mt-7 max-w-[37rem] text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#3c3d4b]">
              Whether you need audit, corporate advisory, restructuring,
              tax, accounting, or payroll support, our team is ready to discuss the
              appropriate next steps.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#enquiry"
                className="inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
              >
                Send an enquiry
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="#career"
                className="inline-flex h-[53px] items-center justify-center rounded-full bg-[#f3f3f3] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#e7e7e7]"
              >
                Career opportunity
              </Link>
            </div>
          </div>

          <div className="relative h-48 sm:h-[clamp(17rem,26vw,31rem)] overflow-hidden rounded-[10px]">
            <Image
              src="/images/editorial/office.webp"
              alt="Illustrative calm professional client lounge"
              fill
              priority
              sizes="(min-width: 1024px) 610px, 88vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#03101c]/10"
            />
          </div>
        </div>
      </section>

      <section
        id="enquiry"
        className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(28rem,1.18fr)]">
          <div className="order-2 rounded-[8px] bg-white p-5 sm:p-[clamp(1.5rem,3vw,3rem)] lg:order-none">
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Get In Touch
            </p>
            <h2 className="mt-6 max-w-[28rem] text-[clamp(1.9rem,2vw,2.45rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              Contact & Office Details
            </h2>
            <p className="mt-5 max-w-[28rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
              Reach our Kuala Lumpur office for consultations, service
              enquiries, or general assistance.
            </p>

            <div className="mt-9 grid gap-0">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-t border-[#03101c]/15 py-5 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-[1rem] font-semibold text-[#03101c]">
                    {detail.label}
                  </h3>
                  <div className="mt-2 text-[0.95rem] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 rounded-[8px] bg-white p-5 sm:p-[clamp(1.5rem,3vw,3rem)] lg:order-none">
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Enquiry Form
            </p>
            <h2 className="mt-6 text-[clamp(1.9rem,2vw,2.45rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              How can we help?
            </h2>

            <p id="enquiry-instructions" className="mt-4 text-base leading-relaxed text-[#596575]">
              Complete the fields below to prepare an email to our team. You can review and send it in your email app. Fields marked * are required.
            </p>
            <form onSubmit={prepareEnquiry} onChange={() => setDraftHref("")} aria-describedby="enquiry-instructions" className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full name" name="name" autoComplete="name" required />
              <Field label="Email address" name="email" type="email" autoComplete="email" required />
              <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
              <Field label="Company name" name="company" autoComplete="organization" />
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-[#03101c]">Service interest *</span>
                <select
                  name="service"
                  required
                  value={selectedService}
                  onChange={(event) => setServiceInterest(event.target.value)}
                  className="h-14 w-full rounded-[8px] border border-[#dfe3e7] bg-white px-5 text-base font-medium tracking-[0.02em] text-[#03101c] outline-none transition focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
                >
                  <option value="" disabled>
                    Service interest
                  </option>
                  <option>Audit & Assurance</option>
                  <option>Corporate Advisory</option>
                  <option>Restructuring & Insolvency</option>
                  <option>Tax Advisory & Compliance</option>
                  <option>China-Malaysia Desk</option>
                  <option>Accounting & Payroll Outsourcing</option>
                  <option>General enquiry</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-[#03101c]">Message *</span>
                <textarea
                  name="message"
                  required
                  maxLength={3000}
                  placeholder="Tell us about your business and the support you need"
                  className="min-h-36 w-full resize-y rounded-[8px] border border-[#dfe3e7] bg-white px-5 py-4 text-base font-medium tracking-[0.02em] text-[#03101c] outline-none transition placeholder:text-[#747986] focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
                />
              </label>
              <label className="flex items-start gap-3 rounded-[8px] border border-[#dfe3e7] px-5 py-4 text-[0.9rem] font-medium leading-[1.5] tracking-[0.02em] text-[#3c3d4b] sm:col-span-2">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 size-4 rounded border-[#dfe3e7] accent-[#ffad50]"
                />
                <span>I agree to be contacted regarding my enquiry.</span>
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
                >
                  Prepare enquiry
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
            <div ref={draftRef} tabIndex={-1} role="status" className={draftHref ? "mt-6 rounded-lg border border-[#1f5f9e]/20 bg-[#f0f6fb] p-5" : "sr-only"}>
              {draftHref ? <>
                <p className="font-semibold text-[#03101c]">Your enquiry draft is ready</p>
                <p className="mt-2 text-sm leading-relaxed text-[#596575]">Nothing has been sent yet. Open your email app to review and send the message. If no email app is configured, email info@yta.com.my directly.</p>
                <a href={draftHref} className="mt-4 inline-flex min-h-11 items-center rounded-full bg-[#091c2f] px-6 text-sm font-semibold text-white">Open email draft</a>
              </> : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
        <div className="mx-auto grid max-w-[1280px] gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-[minmax(18rem,0.72fr)_minmax(28rem,1.28fr)] lg:items-center">
          <div>
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Visit Our Office
            </p>
            <h2 className="mt-6 max-w-[28rem] text-[clamp(1.9rem,2vw,2.45rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              Located in KL Eco City, Kuala Lumpur
            </h2>
            <p className="mt-5 max-w-[27rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.6] tracking-[0.03em] text-[#3c3d4b]">
              Our office is in Menara 1, KL Eco City, close to Mid Valley and
              Abdullah Hukum LRT station. We welcome meetings by appointment.
            </p>
            <a
              href={officeMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-[0.95rem] font-semibold tracking-[0.02em] text-[#1f5f9e] transition hover:text-[#03101c]"
            >
              Get directions on Google Maps
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="relative min-h-[clamp(20rem,26vw,27rem)] overflow-hidden rounded-[10px] bg-[#e8eaed]">
            <OfficeMap />
          </div>
        </div>
      </section>

      <CareerSection />

      <section className="bg-white px-[clamp(1rem,4vw,4.75rem)] py-[clamp(2rem,4vw,4rem)]">
        <div className="relative isolate mx-auto min-h-[clamp(24rem,32vw,36rem)] max-w-[1800px] overflow-hidden rounded-[6px] px-[clamp(1.5rem,10.5vw,12rem)] py-[clamp(5rem,8vw,10rem)] text-white">
          <Image
            src="/images/editorial/business-district.webp"
            alt="Illustrative Malaysian business district in warm morning light"
            fill
            sizes="(min-width: 1280px) 1800px, 94vw"
            className="object-cover object-[62%_50%]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#03101c]/52"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-[58%] bg-gradient-to-r from-[#03101c]/45 to-transparent"
          />

          <div className="relative z-10 max-w-[35rem]">
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-white">
              Professional Services Firm
            </p>
            <h2 className="mt-8 max-w-[31rem] text-[clamp(2rem,2.25vw,2.75rem)] font-medium leading-[1.22] tracking-normal">
              Need reliable accounting support? Get in touch with our team
            </h2>

            <Link
              href="#enquiry"
              className="mt-[clamp(2rem,3vw,3rem)] inline-flex h-[53px] min-w-[230px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[clamp(0.8rem,0.72vw,0.87rem)] font-medium tracking-[0.6px] text-[#03101c] transition hover:bg-[#ffc174]"
            >
              <span>Schedule a consultation</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
