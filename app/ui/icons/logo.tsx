export const Logo = ({ className }: { className?: string }) => (
	// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
	<svg
		width="32"
		height="32"
		viewBox="0 0 32 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`${className}`}
	>
		<circle cx="16" cy="16" r="13" stroke="#FF5500" strokeWidth="6" />
	</svg>
);
