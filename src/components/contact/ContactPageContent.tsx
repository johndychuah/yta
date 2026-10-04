import Image from "next/image";
import Link from "next/link";

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

const careerPoints = [
  "Professional development",
  "Internal training",
  "Mentorship culture",
  "Long-term growth",
];

function Field({
  label,
  type = "text",
  wide = false,
}: {
  label: string;
  type?: string;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "sm:col-span-2" : undefined}>
      <span className="sr-only">{label}</span>
      <input
        type={type}
        placeholder={label}
        className="h-14 w-full rounded-[8px] border border-[#dfe3e7] bg-white px-5 text-[0.95rem] font-medium tracking-[0.02em] text-[#03101c] outline-none transition placeholder:text-[#747986] focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
      />
    </label>
  );
}

export function ContactPageContent() {
  return (
    <>
      <section className="bg-white px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]">
        <div className="mx-auto grid max-w-[1280px] gap-[clamp(3rem,6vw,7rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1fr)] lg:items-center">
          <div>
            <p className="text-[clamp(0.82rem,0.72vw,0.9rem)] font-medium uppercase tracking-[0.18em] text-[#091c2f]">
              Contact Us
            </p>
            <h1 className="mt-7 max-w-[42rem] text-[clamp(2.4rem,3.5vw,4.25rem)] font-medium leading-[1.1] tracking-normal text-[#03101c]">
              Let&apos;s Talk About Your Business Needs
            </h1>
            <p className="mt-7 max-w-[37rem] text-[clamp(1rem,0.95vw,1.12rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#3c3d4b]">
              Whether you need audit, corporate advisory, restructuring,
              accounting, or payroll support, our team is ready to discuss the
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

          <div className="relative h-[clamp(17rem,26vw,31rem)] overflow-hidden rounded-[10px]">
            <Image
              src="/accounting-documents.png"
              alt="Accounting documents and calculator prepared for a consultation"
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
          <div className="rounded-[8px] bg-white p-[clamp(1.5rem,3vw,3rem)]">
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

          <div className="rounded-[8px] bg-white p-[clamp(1.5rem,3vw,3rem)]">
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Enquiry Form
            </p>
            <h2 className="mt-6 text-[clamp(1.9rem,2vw,2.45rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              How can we help?
            </h2>

            <form className="mt-8 grid gap-4 sm:grid-cols-2">
              <Field label="Full name" />
              <Field label="Email address" type="email" />
              <Field label="Phone number" type="tel" />
              <Field label="Company name" />
              <label className="sm:col-span-2">
                <span className="sr-only">Service interest</span>
                <select
                  defaultValue=""
                  className="h-14 w-full rounded-[8px] border border-[#dfe3e7] bg-white px-5 text-[0.95rem] font-medium tracking-[0.02em] text-[#747986] outline-none transition focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
                >
                  <option value="" disabled>
                    Service interest
                  </option>
                  <option>Audit & Assurance</option>
                  <option>Corporate Advisory</option>
                  <option>Restructuring Advisory</option>
                  <option>Accounting & Payroll Outsourcing</option>
                  <option>General enquiry</option>
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="sr-only">Message</span>
                <textarea
                  placeholder="Message"
                  className="min-h-36 w-full resize-none rounded-[8px] border border-[#dfe3e7] bg-white px-5 py-4 text-[0.95rem] font-medium tracking-[0.02em] text-[#03101c] outline-none transition placeholder:text-[#747986] focus:border-[#ffad50] focus:ring-4 focus:ring-[#ffad50]/20"
                />
              </label>
              <label className="flex items-start gap-3 rounded-[8px] border border-[#dfe3e7] px-5 py-4 text-[0.9rem] font-medium leading-[1.5] tracking-[0.02em] text-[#3c3d4b] sm:col-span-2">
                <input
                  type="checkbox"
                  className="mt-1 size-4 rounded border-[#dfe3e7] accent-[#ffad50]"
                />
                <span>I agree to be contacted regarding my enquiry.</span>
              </label>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  className="inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
                >
                  Send Message
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
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
              The map area is prepared for an embedded Google Map once the
              final map preference or API setup is confirmed.
            </p>
          </div>

          <div className="relative min-h-[clamp(17rem,24vw,25rem)] overflow-hidden rounded-[10px] bg-[#ffad50]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,16,28,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(3,16,28,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-[#ffad50] via-[#ffc174] to-[#ffe0b8]"
            />
            <div className="absolute left-[52%] top-[45%] z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#061d31] text-3xl text-white shadow-[0_18px_35px_rgba(3,16,28,0.24)]">
              ⌖
            </div>
            <div className="absolute bottom-8 left-8 right-8 z-10 rounded-[8px] bg-white/92 p-5 text-[#03101c] shadow-[0_18px_45px_rgba(9,28,47,0.12)] sm:left-auto sm:w-[20rem]">
              <strong className="block text-[1rem]">YT Associates</strong>
              <span className="mt-2 block text-[0.92rem] font-medium leading-[1.5] text-[#3c3d4b]">
                Menara 1, KL Eco City, Kuala Lumpur
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="career"
        className="bg-[#f3f3f3] px-[clamp(1.5rem,8vw,12rem)] py-[clamp(4rem,7vw,8rem)]"
      >
        <div className="mx-auto grid max-w-[1280px] gap-[clamp(2rem,5vw,5rem)] lg:grid-cols-2 lg:items-center">
          <div className="relative h-[clamp(18rem,28vw,31rem)] overflow-hidden rounded-[10px]">
            <Image
              src="/about-story-meeting.png"
              alt="Professional team discussion in a meeting room"
              fill
              sizes="(min-width: 1024px) 610px, 88vw"
              className="object-cover object-center"
            />
          </div>

          <div>
            <p className="text-[clamp(0.78rem,0.7vw,0.88rem)] font-medium uppercase tracking-[0.18em] text-[#596575]">
              Career Opportunity
            </p>
            <h2 className="mt-6 max-w-[36rem] text-[clamp(1.9rem,2.25vw,2.75rem)] font-medium leading-[1.18] tracking-normal text-[#03101c]">
              Grow Your Career With Us
            </h2>
            <p className="mt-5 max-w-[38rem] text-[clamp(0.95rem,0.85vw,1rem)] font-medium leading-[1.65] tracking-[0.03em] text-[#3c3d4b]">
              We welcome capable and driven individuals who want to develop
              their professional career in audit, tax, corporate finance,
              accounting, and advisory services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {careerPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[8px] bg-white px-5 py-4 text-[0.95rem] font-semibold text-[#03101c]"
                >
                  {point}
                </div>
              ))}
            </div>

            <Link
              href="mailto:info@yta.com.my?subject=Career%20Opportunity%20Application"
              className="mt-9 inline-flex h-[53px] items-center justify-center gap-4 rounded-full bg-[#ffad50] px-8 text-[0.9rem] font-medium tracking-[0.04em] text-[#03101c] transition hover:bg-[#ffc174]"
            >
              Submit your resume
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-[clamp(1rem,4vw,4.75rem)] py-[clamp(2rem,4vw,4rem)]">
        <div className="relative isolate mx-auto min-h-[clamp(24rem,32vw,36rem)] max-w-[1800px] overflow-hidden rounded-[6px] px-[clamp(1.5rem,10.5vw,12rem)] py-[clamp(5rem,8vw,10rem)] text-white">
          <Image
            src="/about-cta-coins.png"
            alt="Hands holding coins as a symbol of trusted financial advisory"
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
