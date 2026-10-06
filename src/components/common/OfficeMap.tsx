import Link from "next/link";
import { useState } from "react";

const officeQuery = "Menara 1, KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur";

export const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeQuery)}`;

type OfficeMapProps = {
  className?: string;
};

export function OfficeMap({ className = "" }: OfficeMapProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
    {loaded ? <iframe
      title="Map showing the YT Associates office at Menara 1, KL Eco City"
      src={`https://www.google.com/maps?q=${encodeURIComponent(officeQuery)}&z=17&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer"
      allowFullScreen
      className={`absolute inset-0 h-full w-full border-0 ${className}`}
    /> : <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#edf1f5] px-6 py-8 text-center">
      <span aria-hidden="true" className="mb-3 text-3xl text-[#a27138]">⌖</span>
      <h3 className="text-lg font-bold text-[#03101c]">Our KL Eco City office</h3>
      <p className="mt-3 max-w-md text-sm leading-6 text-[#596575]">The map stays off until you choose to load it. Loading connects to Google, which may use cookies and receive browser information.</p>
      <button type="button" onClick={() => setLoaded(true)} className="mt-5 min-h-11 rounded-full bg-[#091c2f] px-6 py-3 text-sm font-bold text-white">Load Google Map</button>
      <Link href="/cookie-policy#maps" className="mt-2 inline-flex min-h-11 items-center text-sm text-[#1f5f9e] underline underline-offset-4">Read about Maps &amp; cookies</Link>
    </div>}
    {loaded ? <button type="button" onClick={() => setLoaded(false)} className="absolute right-4 top-4 z-10 min-h-11 rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#03101c] shadow-md">Hide map</button> : null}
    {loaded ? <a href={officeMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-x-4 bottom-4 z-10 flex min-h-14 items-center justify-between gap-4 rounded-lg bg-white px-5 py-3 text-sm text-[#03101c] shadow-md transition hover:bg-[#fff3e4]">
      <span><strong className="block">KL Eco City office</strong><span className="mt-1 block text-[#596575]">Open location in Google Maps</span></span>
      <span aria-hidden="true">↗</span>
    </a> : null}
    </>
  );
}
