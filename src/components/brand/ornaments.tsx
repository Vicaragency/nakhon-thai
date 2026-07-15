import { cn } from "@/lib/utils";

/**
 * Kleine sierlijke divider boven sectiekoppen (Figma: fijn lotus-motief).
 * Neemt currentColor over; standaard beige-40 op crème achtergronden.
 */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 24"
      className={cn("h-6 w-[140px] text-beige-40", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12h44M94 12h44"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="46" cy="12" r="2" fill="currentColor" />
      <circle cx="94" cy="12" r="2" fill="currentColor" />
      {/* lotus-bud in het midden */}
      <path
        d="M70 4c-4 3-6 6-6 8 0 2.6 2.7 4.5 6 4.5s6-1.9 6-4.5c0-2-2-5-6-8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M64 12c-3-.5-6 .5-8 2.5 2.8 1.4 5.6 1 8-1Zm12 0c3-.5 6 .5 8 2.5-2.8 1.4-5.6 1-8-1Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

/**
 * Rozet-icoon boven de "Contactgegevens" / "Adres" koppen (footer + contact).
 */
export function DiamondRosette({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-11 w-11 text-current", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 11 33 24 24 37 15 24 24 11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 17 29 24 24 31 19 24 24 17Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
    </svg>
  );
}

/**
 * Verticale Thaise hang-ornament (dangling lantern) voor de flanken van de hero.
 */
export function ThaiLantern({ className }: { className?: string }) {
  const medallion = (cy: number) => (
    <g key={cy}>
      <circle cx="22" cy={cy} r="14" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy={cy} r="8.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M22 12.5 26 22l-4 9.5L18 22l4-9.5Z"
        transform={`translate(0 ${cy - 22})`}
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
      <circle cx="22" cy={cy} r="2" fill="currentColor" />
    </g>
  );
  return (
    <svg
      viewBox="0 0 44 232"
      className={cn("h-full w-11 text-beige-40", className)}
      fill="none"
      aria-hidden="true"
    >
      {/* hanger */}
      <circle cx="22" cy="8" r="6" stroke="currentColor" strokeWidth="1" />
      <path d="M22 14v9" stroke="currentColor" strokeWidth="1" />
      {medallion(45)}
      <path d="M22 59v9" stroke="currentColor" strokeWidth="1" />
      {medallion(90)}
      <path d="M22 104v9" stroke="currentColor" strokeWidth="1" />
      {medallion(135)}
      {/* tassel */}
      <path d="M22 149v12" stroke="currentColor" strokeWidth="1" />
      <path d="M16 161h12" stroke="currentColor" strokeWidth="1" />
      <path
        d="M17 161v40M20.5 161v44M24 161v44M27 161v40"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <circle cx="22" cy="209" r="2.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/**
 * Bloemvormige (scalloped) sticker-badge zoals de "HOMEMADE" / "DEAL" / "TASTY"
 * stickers uit het ontwerp. De schulprand is opgebouwd uit petals rond een
 * centrale schijf; de tekst (children) staat gecentreerd bovenop.
 */
export function ScallopBadge({
  fill = "#ed3fa6",
  className,
  children,
  petals = 13,
}: {
  fill?: string;
  className?: string;
  petals?: number;
  children: React.ReactNode;
}) {
  const size = 100;
  const c = size / 2;
  const ringR = 34;
  const petalR = 12;
  const items = Array.from({ length: petals }, (_, i) => {
    const a = (i / petals) * Math.PI * 2;
    return { x: c + ringR * Math.cos(a), y: c + ringR * Math.sin(a) };
  });
  return (
    <div className={cn("relative aspect-square", className)}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 size-full drop-shadow-sm"
        aria-hidden="true"
      >
        {items.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={petalR} fill={fill} />
        ))}
        <circle cx={c} cy={c} r={ringR + 3} fill={fill} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-none">
        {children}
      </div>
    </div>
  );
}
