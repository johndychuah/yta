const officeQuery = "Menara 1, KL Eco City, 3 Jalan Bangsar, 59200 Kuala Lumpur";

export const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeQuery)}`;

type OfficeMapProps = {
  className?: string;
};

export function OfficeMap({ className = "" }: OfficeMapProps) {
  return (
    <iframe
      title="Map showing the YT Associates office at Menara 1, KL Eco City"
      src={`https://www.google.com/maps?q=${encodeURIComponent(officeQuery)}&z=17&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
      className={`absolute inset-0 h-full w-full border-0 ${className}`}
    />
  );
}
