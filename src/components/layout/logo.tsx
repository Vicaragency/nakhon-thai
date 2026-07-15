import Link from "next/link";

import { cn } from "@/lib/utils";

/**
 * Woordmerk "NAKHON THAI" in een afgerond rood blokje (Inter Bold, uppercase).
 * `tone="bright"` gebruikt het fellere rood voor op de donkere nav-overlay.
 */
export function Logo({
  className,
  tone = "brand",
  onClick,
}: {
  className?: string;
  tone?: "brand" | "bright";
  onClick?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Nakhon Thai - naar home"
      className={cn(
        "inline-flex items-center rounded-md px-3 py-2 text-[15px] font-bold uppercase tracking-[0.06em] text-white shadow-sm",
        tone === "bright" ? "bg-neon-red" : "bg-brand",
        className,
      )}
    >
      Nakhon Thai
    </Link>
  );
}
