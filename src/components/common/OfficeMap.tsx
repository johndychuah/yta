const officeQuery = "Menara 1, KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur";

export const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeQuery)}`;

type OfficeMapProps = {
  className?: string;
};

export function OfficeMap({ className = "" }: OfficeMapProps) {
  return (
    <>
    <iframe
      title="Map showing the YT Associates office at Menara 1, KL Eco City"
      src={`https://www.google.com/maps?q=${encodeURIComponent(officeQuery)}&z=17&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={`absolute inset-0 h-full w-full border-0 ${className}`}
    />
    <a href={officeMapsUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-x-4 bottom-4 z-10 flex min-h-14 items-center justify-between gap-4 rounded-lg bg-white px-5 py-3 text-sm text-[#03101c] shadow-md transition hover:bg-[#fff3e4]">
      <span><strong className="block">KL Eco City office</strong><span className="mt-1 block text-[#596575]">Open location in Google Maps</span></span>
      <span aria-hidden="true">↗</span>
    </a>
    </>
  );
}
