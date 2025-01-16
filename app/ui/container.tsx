export function Container({
	children,
	className,
}: { children: React.ReactNode; className?: string }) {
	return (
		<div className={`${className} max-w-[100rem] mx-auto`}>{children}</div>
	);
}
