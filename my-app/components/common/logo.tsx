import Link from "next/link";
import { Layers } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold tracking-tight"
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Layers className="size-4" />
      </span>
      <span>{siteConfig.name}</span>
    </Link>
  );
}
