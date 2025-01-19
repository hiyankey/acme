import type { PropsWithChildren } from "react";
import { cn } from "../lib/cn";

export function SocialProof({
	children,
	className,
}: PropsWithChildren & { className?: string }) {
	return <div className={cn(className)}>{children}</div>;
}
