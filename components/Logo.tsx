import Image from "next/image";
import logo from "@/public/clintzecleintattoo.png";

/** Real Clitze Clein emblem (transparent PNG) – used on light backgrounds. */
export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="Clitze Clein – Das Clitze Cleine Tattoo Atelier"
      className={className}
      priority
      sizes="(max-width: 768px) 150px, 190px"
    />
  );
}
