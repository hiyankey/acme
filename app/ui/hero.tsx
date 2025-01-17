type HeroProps = {
	children: React.ReactNode;
	className?: string;
};
type HeroElementsProps = {
	children: React.ReactNode;
	className?: string;
};

export const Headline = ({ children, className }: HeroElementsProps) => (
	<h1
		className={`${className} text-3xl font-semibold text-center bg-gradient-to-b from-[#f0f0f0] to-[#666] bg-clip-text  text-transparent`}
	>
		{children}
	</h1>
);
export const Caption = ({ children, className }: HeroElementsProps) => (
	<p className={`${className} text-lg font-medium text-center text-[#999]`}>
		{children}
	</p>
);
export function Hero({ children, className }: HeroProps) {
	return <div className={` py-[12rem] ${className}`}>{children}</div>;
}
