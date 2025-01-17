import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
	className?: string;
	href?: string;
	children: React.ReactNode;
	type?: "submit" | "reset" | "button";
}

const buttonClasses = cva(
	"whitespace-nowrap inline-flex items-center shadow-btn",
	{
		variants: {
			variant: {
				primary: "bg-primary-gradient",
				secondary: "bg-[#fff]/[.1]",
			},
			size: {
				sm: "px-2 py-1 rounded-full text-xs",
				md: "px-3 h-[3.2rem] rounded-[6px] text-sm",
				lg: "px-4 h-[4rem] rounded-[8px] text-rg",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);

export function Button({
	className,
	href,
	children,
	variant,
	size,
	type,
}: ButtonProps) {
	return (
		<>
			{href ? (
				<Link
					className={`${className} ${buttonClasses({ variant, size })}`}
					href={href}
				>
					{children}
				</Link>
			) : (
				<button
					className={`${className} ${buttonClasses({ variant, size })}`}
					type={type}
				>
					{children}
				</button>
			)}
		</>
	);
}
